import { NextResponse } from "next/server";
import prisma from "@/libs/db";
import cloudinary from "@/libs/cloudinary";
import { fileToBuffer } from "@/libs/file";

export async function PUT(
  req: Request,
  params: { params: Promise<{ id: string }> }
) {
  try {
    const body = await req.formData();
    const id = (await params.params).id;
    const currentPortfolio = await prisma.portfolio.findUnique({
      where: { id: Number(id) },
      include: {
        category: true,
        portfolio_techstack: true,
        portfolio_images: true,
      },
    });
    if (!currentPortfolio) {
      return NextResponse.json(
        { success: false, message: "Portfolio not found" },
        { status: 404 }
      );
    }
    const data = {
      name: body.get("name") as string,
      category_id: Number(body.get("category_id")),
      link: (body.get("link") as string) || "",
      description: body.get("description") as string,
      client_name: body.get("client_name") as string,
    };
    let newThumbnailUrl;
    let newThumbnailId;
    const newthumbnail = body.get("thumbnail") as File;
    if (newthumbnail && newthumbnail.size > 0) {
      // Delete old thumbnail
      const currentThumbnailId = currentPortfolio?.thumbnail_id;
      if (currentThumbnailId) {
        await cloudinary.uploader.destroy(currentThumbnailId);
      }
      const bufferThumbnail = await fileToBuffer(body.get("thumbnail") as File);
      const uploadThumbnail: any = await new Promise((resolve, reject) => {
        cloudinary.uploader
          .upload_stream(
            {
              folder: "portfolio_thumbnails",
              public_id: `${Date.now()}_${data.name.replace(
                /\s+/g,
                "_"
              )}_thumbnail`,
              resource_type: "image",
            },
            (error, result) => {
              if (error) return reject(error);
              resolve(result);
            }
          )
          .end(bufferThumbnail);
      });
      newThumbnailUrl = uploadThumbnail.secure_url;
      newThumbnailId = uploadThumbnail.public_id;
    }
    let newAdditionalImages: any[] = [];
    const additionalImages = body.getAll("imageAdditional[]") as File[];
    const validImages = additionalImages.filter((file) => file.size > 0);
    const deletedImageIds = body
      .getAll("deletedImageIds[]")
      .map((id) => Number(id))
      .filter((id) => !isNaN(id));
    if (deletedImageIds.length > 0) {
      const imagesToDelete = currentPortfolio?.portfolio_images?.filter((img) =>
        deletedImageIds.includes(img.id)
      );
      // Delete images from Cloudinary
      for (const img of imagesToDelete || []) {
        await cloudinary.uploader.destroy(img.image_id);
      }
      // Delete records of deleted images from DB
      await prisma.portfolio_Image.deleteMany({
        where: {
          id: { in: deletedImageIds },
        },
      });
    }
    if (validImages.length > 0) {
      // buffer untuk upload gambar baru
      const bufferAdditionalImages = await Promise.all(
        validImages.map((file: File) => fileToBuffer(file))
      );

      // Upload new additional images to Cloudinary
      newAdditionalImages = await Promise.all(
        bufferAdditionalImages.map((buffer, index) => {
          return new Promise((resolve, reject) => {
            cloudinary.uploader
              .upload_stream(
                {
                  folder: "portfolio_additional_images",
                  public_id: `${Date.now()}_${data.name.replace(
                    /\s+/g,
                    "_"
                  )}_additional_${index}`,
                  resource_type: "image",
                },
                (error, result) => {
                  if (error) return reject(error);
                  resolve(result);
                }
              )
              .end(buffer);
          });
        })
      );

      // create records for new additional images in DB
      const additionalImageRecords = newAdditionalImages.map(
        (uploadResult) => ({
          portfolio_id: currentPortfolio.id,
          image_id: uploadResult.public_id,
          image_url: uploadResult.secure_url,
        })
      );

      await prisma.portfolio_Image.createMany({
        data: additionalImageRecords,
      });
    }

    // techstack deletion and addition
    const techStackIds = body
      .getAll("techStack[]")
      .map((id) => Number(id))
      .filter((id) => !isNaN(id));
    if (techStackIds.length > 0) {
      await prisma.portfolio_TechStack.deleteMany({
        where: {
          portfolioId: currentPortfolio.id,
        },
      });
      const techStackConnections = techStackIds.map((techId) => ({
        portfolioId: currentPortfolio.id,
        techstackId: Number(techId),
      }));
      await prisma.portfolio_TechStack.createMany({
        data: techStackConnections,
      });
    }

    // update portfolio data
    const updatedPortfolio = await prisma.portfolio.update({
      where: { id: Number(currentPortfolio.id) },
      data: {
        name: data.name,
        category_id: data.category_id,
        link: data.link || null,
        description: data.description,
        client_name: data.client_name,
        thumbnail_url: newThumbnailUrl || currentPortfolio.thumbnail_url,
        thumbnail_id: newThumbnailId || currentPortfolio.thumbnail_id,
      },
    });
    return NextResponse.json({
      success: true,
      message: "Portfolio updated successfully",
      code: 200,
      data: updatedPortfolio,
    });
  } catch (error) {
    console.error("❌ Error updating portfolio:", error);
    return NextResponse.json(
      {
        success: false,
        code: 500,
        message: "Internal server error",
      },
      { status: 500 }
    );
  }
}

export async function DELETE(req: Request, params: { params: Promise<{ id: string }> }) {
  try {
    const id = (await params.params).id;
    const existingPortfolio = await prisma.portfolio.findUnique({
      where: { id: Number(id) },
      include: { portfolio_images: true, portfolio_techstack: true },
    });
    if (!existingPortfolio) {
      return NextResponse.json(
        { success: false, message: "Portfolio not found" },
        { status: 404 }
      );
    }
    // Delete thumbnail from Cloudinary
    if (existingPortfolio.thumbnail_id) {
      await cloudinary.uploader.destroy(existingPortfolio.thumbnail_id);
    }
    // Delete additional images from Cloudinary
    for (const img of existingPortfolio.portfolio_images) {
      await cloudinary.uploader.destroy(img.image_id);
    }
    // Delete portfolio images records from DB
    await prisma.portfolio_Image.deleteMany({
      where: { portfolio_id: Number(existingPortfolio.id) },
    });
    // Delete portfolio techstack records from DB
    await prisma.portfolio_TechStack.deleteMany({
      where: { portfolioId: Number(existingPortfolio.id) },
    });
    // Delete the portfolio itself
    await prisma.portfolio.delete({
      where: { id: Number(existingPortfolio.id) },
    });
    return NextResponse.json({
      success: true,
      message: "Portfolio deleted successfully",
      code: 200,
    });
  } catch (error) {
    console.error("❌ Error deleting portfolio:", error);
    return NextResponse.json(
      {
        success: false,
        code: 500,
        message: "Internal server error",
      },
      { status: 500 }
    );
  }
}
