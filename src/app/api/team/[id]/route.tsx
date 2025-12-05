import { NextResponse } from "next/server";
import prisma from "@/libs/db";
import { fileToBuffer } from "@/libs/file";
import cloudinary from "@/libs/cloudinary";


export async function PUT(req: Request, context: { params: Promise<{ id: string }> }) {
  try {
    const params = await context.params;
    const body = await req.formData();
    const rawData = {
      name: body.get("name"),
      role_id: Number(body.get("role_id")),
      image: body.get("image"),
    }
    const existingMember = await prisma.team.findUnique({
      where: { id: Number(params.id) },
    });
    let imageUrl = existingMember?.image_url;
    let imageId = existingMember?.image_id;
    if (rawData.image) {
      // Delete old image from Cloudinary
      if (imageId) {
        await cloudinary.uploader.destroy(imageId);
      }
        const buffer = await fileToBuffer(rawData.image as File);
        const uploadResult : any = await new Promise((resolve, reject) => {
          cloudinary.uploader.upload_stream({
            folder: "team_members",
            public_id: `${Date.now()}_${rawData.name?.toString().replace(/\s+/g, "_")}`,
            resource_type: "image",
          }, (error, result) => {
            if (error) return reject(error);
            resolve(result);
          }
        ).end(buffer);
      });
      imageUrl = uploadResult.secure_url;
      imageId = uploadResult.public_id;
    }
    const updatedMember = await prisma.team.update({
      where: { id: Number(params.id) },
      data: {
        name: rawData.name?.toString(),
        role_id: rawData.role_id,
        image_url: imageUrl,
        image_id: imageId,
      },
      include: { role: true },
    });
    return NextResponse.json({ 
        success: true,
        message: "Team member updated successfully",
        code: 200,
        data: updatedMember
     });
    } catch (error) {
        return NextResponse.json({ error: error }, { status: 500 });
    }
}

export async function DELETE(req: Request, context : { params: Promise<{ id: string }> }) {
  try {
    const params = await context.params;
    const existingMember = await prisma.team.findUnique({
        where: { id: Number(params.id) },
        });
    if (existingMember?.image_id) {
        await cloudinary.uploader.destroy(existingMember.image_id);
    }
    await prisma.team.delete({
        where: { id: Number(params.id) },
    });
    return NextResponse.json({
        success: true,
        code: 200,
        message: "Team member deleted successfully",
    });
  } catch (error) {
    return NextResponse.json({ error: "Failed to delete team member" }, { status: 500 });
  }
}