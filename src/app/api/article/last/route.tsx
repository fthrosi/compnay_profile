import { NextResponse } from "next/server";
import prisma from "@/libs/db";

export async function GET() {
  try {
    const articles = await prisma.article.findMany({
      include: {
        category: true,
      },
      orderBy: {
        created_at: "desc",
      },
      take: 1,
    });
    return NextResponse.json({
      success: true,
      message: "Articles fetched successfully",
      data: articles,
      code: 200,
    });
  } catch (error) {
    return NextResponse.json({
      success: false,
      message: "Failed to fetch articles",
    });
  }
}
