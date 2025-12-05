// app/api/team/route.ts
import { NextResponse } from "next/server";
import prisma from "@/libs/db";
import { z } from "zod";
import { teamApiSchema } from "@/schema/teamSchema";
import cloudinary from "@/libs/cloudinary";  
import { fileToBuffer } from "@/libs/file";
export async function GET() {
  const team = await prisma.team.findMany({
    include: {
      role: true,
    },
  });

  const teamDTO = team.map((member) => ({
    id: member.id,
    name: member.name,
    foto: member.image_url,
    jabatan: member.role.name,
    jabatanId: member.role.id,
  }));
  return NextResponse.json({
    success: true,
    message: "Team members retrieved successfully",
    code: 200,
    data: teamDTO,
  });
}

export async function POST(req: Request) {
  try {
    const body = await req.formData();
    const rawData = {
      name: body.get("name"),
      role_id: Number(body.get("role_id")),
      image: body.get("image"),
    }
    const validatedData = teamApiSchema.parse(rawData);
    const buffer = validatedData.image ? await fileToBuffer(validatedData.image as File) : null;

    const uploadResult : any = await new Promise((resolve, reject) => {
      cloudinary.uploader.upload_stream({
        folder: "team_members",
        public_id: `${Date.now()}_${validatedData.name.replace(/\s+/g, "_")}`,
        resource_type: "image",
      }, (error, result) => {
        if (error) return reject(error);
        resolve(result);
      }).end(buffer);
    }) 


    const newTeamMember = await prisma.team.create({
        data: {
          name: validatedData.name,
          role_id: validatedData.role_id,
          image_url: uploadResult.secure_url,
          image_id: uploadResult.public_id,
        },
        include:{
            role: true
        }
    });
    return NextResponse.json({
        success: true,
        code: 201,
        message: "Team member created successfully",
        data: {
            id: newTeamMember.id,
            name: newTeamMember.name,
            foto: newTeamMember.image_url,
            jabatan: newTeamMember.role.name,
        }
    });
  } catch (error) {
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
