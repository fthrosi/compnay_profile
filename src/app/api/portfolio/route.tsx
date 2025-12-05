import { NextResponse } from "next/server";
import prisma from "@/libs/db";
import { z } from "zod";
import { PortfolioAPISchema } from "@/schema/portfolioSchema";
import cloudinary from "@/libs/cloudinary";
import { fileToBuffer } from "@/libs/file";

export async function POST(request: Request) {
  try {
    const body = await request.formData();

    const rawData = {
      name: body.get("name") as string,
      category_id: Number(body.get("category_id")),
      link: (body.get("link") as string) || "",
      description: body.get("description") as string,
      techStack: body.getAll("techStack[]").map((id) => String(id)),
      client_name: body.get("client_name") as string,
      thumbnail: body.get("thumbnail"),
      imageAdditional: body.getAll("imageAdditional[]"),
    };

    // ✅ Validate
    const validatedData = PortfolioAPISchema.parse(rawData);

    // Upload thumbnail
    const bufferThumbnail = await fileToBuffer(validatedData.thumbnail as File);
    const uploadThumbnail: any = await new Promise((resolve, reject) => {
      cloudinary.uploader
        .upload_stream(
          {
            folder: "portfolio_thumbnails",
            public_id: `${Date.now()}_${validatedData.name.replace(
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

    // Upload additional images
    let additionalImages: any[] = [];
    if (
      validatedData.imageAdditional &&
      validatedData.imageAdditional.length > 0
    ) {
      const bufferAdditionalImages = await Promise.all(
        validatedData.imageAdditional.map((file: File) => fileToBuffer(file))
      );

      additionalImages = await Promise.all(
        bufferAdditionalImages.map((buffer, index) => {
          return new Promise((resolve, reject) => {
            cloudinary.uploader
              .upload_stream(
                {
                  folder: "portfolio_additional_images",
                  public_id: `${Date.now()}_${validatedData.name.replace(
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
    }

    // Create portfolio
    const newPortfolio = await prisma.portfolio.create({
      data: {
        name: validatedData.name,
        category_id: validatedData.category_id,
        link: validatedData.link || null,
        description: validatedData.description,
        client_name: validatedData.client_name,
        thumbnail_url: uploadThumbnail.secure_url,
        thumbnail_id: uploadThumbnail.public_id,
      },
    });

    // Create tech stack relations
    if (validatedData.techStack.length > 0) {
      const techStackConnections = validatedData.techStack.map((techId) => ({
        portfolioId: newPortfolio.id,
        techstackId: Number(techId),
      }));

      await prisma.portfolio_TechStack.createMany({
        data: techStackConnections,
      });
    }

    // Create additional images records
    if (additionalImages.length > 0) {
      const additionalImageRecords = additionalImages.map((uploadResult) => ({
        portfolio_id: newPortfolio.id,
        image_id: uploadResult.public_id,
        image_url: uploadResult.secure_url,
      }));

      await prisma.portfolio_Image.createMany({
        data: additionalImageRecords,
      });
    }

    return NextResponse.json(
      {
        success: true,
        message: "Portfolio created successfully",
        data: newPortfolio,
      },
      { status: 201 }
    );
  } catch (error) {
    // ✅ Better error handling
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        {
          success: false,
          code: 400,
          message: "Validation error",
          errors: error.issues,
        },
        { status: 400 }
      );
    }
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

export async function GET() {
  try {
    const portfolios = await prisma.portfolio.findMany({
      include: {
        category: true,
        portfolio_techstack:{
          include:{
            techstack: true
          }
        },
        portfolio_images: true,
      },
      orderBy:{
        created_at: "desc"
      }
    });
    return NextResponse.json({
      success: true,
      message: "Portfolios retrieved successfully",
      code: 200,
      data: portfolios,
    });
  } catch (error) {
    return NextResponse.json({
      success: false,
      code: 500,
      message: "Failed to retrieve portfolios",
    });
  }

}
