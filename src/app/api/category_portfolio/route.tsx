import { NextResponse } from "next/server";
import prisma from "@/libs/db";

export async function GET() {
  try {
    const categoryPortfolios = await prisma.category_Portfolio.findMany({
        orderBy: {
            name: "asc",
        },
    });
    return NextResponse.json({ 
        success: true, 
        message: "Category portfolios fetched successfully", 
        data: categoryPortfolios,
        code: 200 
    });
  } catch (error) {
    return NextResponse.json({ success: false, message: "Failed to fetch category portfolios" });
  }
}
