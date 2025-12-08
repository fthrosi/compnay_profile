import { NextResponse } from "next/server";
import prisma from "@/libs/db";

export async function GET() {
  try {
    const categoryArticle = await prisma.category_Article.findMany({
        orderBy: {
            name: "asc",
        },
    });
    return NextResponse.json({ 
        success: true, 
        message: "Category articles fetched successfully", 
        data: categoryArticle,
        code: 200 
    });
  } catch (error) {
    return NextResponse.json({ success: false, message: "Failed to fetch category articles" });
  }
}
