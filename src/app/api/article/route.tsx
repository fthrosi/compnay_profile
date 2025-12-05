import { NextResponse } from "next/server";
import prisma from "@/libs/db";
import cloudinary from "@/libs/cloudinary";
import { fileToBuffer } from "@/libs/file";
import { z } from "zod";
import { ArticleAPISchema } from "@/schema/articleScema";

export async function POST(req: Request) {
  try {
    const body = await req.formData();
    const rawData = {
      title: body.get("title") as string,
      category_id: Number(body.get("category_id")),
      content: body.get("content"),
      image: body.get("image"),
    }
    const validatedData = ArticleAPISchema.parse(rawData);
    const buffer = validatedData.image ? await fileToBuffer(validatedData.image as File) : null;

    const uploadResult : any = await new Promise((resolve, reject) => {
      cloudinary.uploader.upload_stream({
        folder: "articles",
        public_id: `${Date.now()}_${validatedData.title.replace(/\s+/g, "_")}`,
        resource_type: "image",
      }, (error, result) => {
        if (error) return reject(error);
        resolve(result);
      }).end(buffer);
    }) 
    const newArticle = await prisma.article.create({
        data: {
          title: validatedData.title,
          category_id: validatedData.category_id,
          content: validatedData.content,
          image_url: uploadResult.secure_url,
          image_id: uploadResult.public_id,
        },
        include:{
            category: true
        }
    });
    return NextResponse.json({
        success: true,
        code: 201,
        message: "Article created successfully",
        data: {
            id: newArticle.id,
            title: newArticle.title,
            image_url: newArticle.image_url,
            category: newArticle.category.name,
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
export async function GET() {
  try {
    const articles = await prisma.article.findMany({
        include: {
            category: true,
        },
        orderBy: {
            created_at: "desc",
        },
    });
    return NextResponse.json({ 
        success: true, 
        message: "Articles fetched successfully",
        data: articles,
        code: 200 
    });
  } catch (error) {
    return NextResponse.json({ success: false, message: "Failed to fetch articles" });
  }
}