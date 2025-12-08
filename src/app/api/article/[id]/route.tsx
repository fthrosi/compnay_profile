import { NextResponse } from "next/server";
import prisma from "@/libs/db";
import cloudinary from "@/libs/cloudinary";
import { fileToBuffer } from "@/libs/file";

export async function PUT(req:Request, params : {params: Promise<{id: string}>}) {
    try {
        const body = await req.formData();
        const articleId = (await params.params).id;
        const currentArticle =  await prisma.article.findUnique({
            where: {
                id: Number(articleId),
            },
            include: {
                category: true,
            }
        });
        const rawData = {
            title: body.get("title") as string,
            category_id: Number(body.get("category_id")),
            content: body.get("content"),
        };
        const imageFile = body.get("image");
        let newImageUrl;
        let newImageId;
        if(imageFile && imageFile instanceof File && imageFile.size > 0){
            await cloudinary.uploader.destroy(currentArticle?.image_id || "");
            const buffer = await fileToBuffer(imageFile);
            const uploadResult : any = await new Promise((resolve, reject) => {
                cloudinary.uploader.upload_stream({
                    folder: "articles",
                    public_id: `${Date.now()}_${rawData.title.replace(/\s+/g, "_")}`,
                    resource_type: "image",
                }, (error, result) => {
                    if (error) return reject(error);
                    resolve(result);
                }).end(buffer);
            })
            newImageUrl = uploadResult.secure_url;
            newImageId = uploadResult.public_id;
        }
        const updatedArticle = await prisma.article.update({
            where: {
                id: Number(articleId),
            },
            data: {
                title: rawData.title,
                category_id: rawData.category_id,
                content: rawData.content as string,
                image_url: newImageUrl || currentArticle?.image_url,
                image_id: newImageId || currentArticle?.image_id,
            },
        });
        return NextResponse.json({
            success: true,
            message: "Article updated successfully",
            data: updatedArticle,
            code: 200,
        });
    } catch (error) {
        console.error("Error updating article:", error);
        return NextResponse.json({ success: false, message: "Failed to update article" });
    }
}

export async function DELETE(req: Request, params : {params: Promise<{id: string}>}) {
    try {
        const articleId = (await params.params).id;
        const articleToDelete = await prisma.article.findUnique({
            where: {
                id: Number(articleId),
            },
        });
        if(articleToDelete){
            await cloudinary.uploader.destroy(articleToDelete.image_id);
            await prisma.article.delete({
                where: {
                    id: Number(articleId),
                },
            });
            return NextResponse.json({ 
                success: true, 
                message: "Article deleted successfully" ,
                code: 200,
            });
        } else {
            return NextResponse.json({ success: false, message: "Article not found" });
        }
    } catch (error) {
        console.error("Error deleting article:", error);
        return NextResponse.json({ success: false, message: "Failed to delete article" });
    }
}