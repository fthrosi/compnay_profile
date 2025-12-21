import { NextResponse } from "next/server";
import prisma from "@/libs/db";

export async function GET() {
  const role = await prisma.role.findMany();

  const roleDTO = role.map((role) => ({
    id: role.id,
    name: role.name,
  }));
  return NextResponse.json({
    success: true,
    message: "Roles retrieved successfully",
    code: 200,
    data: roleDTO,
  });
}