import { NextResponse } from "next/server";
import prisma from "../../../../connection";

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  console.log(params.id);
  console.log(params);
  const resturant = await prisma.resturant.findUnique({
    where: {
      id: params.id,
    },
  });
  console.log(resturant);
  return NextResponse.json(resturant);
}
