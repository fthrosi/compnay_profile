import { NextResponse } from "next/server";
import prisma from "@/libs/db";

export async function GET() {
  try {
    const techStacks = await prisma.techStack.findMany({
      orderBy: {
        name: "asc",
      },
    });
    return NextResponse.json({
        message: "Tech stacks fetched successfully",
        data: techStacks,
        code: 200,
    });
  } catch (error) {
    console.error("Error fetching tech stacks:", error);
    return NextResponse.json(
      { message: "Internal Server Error" },
      { status: 500 }
    );
  }
}