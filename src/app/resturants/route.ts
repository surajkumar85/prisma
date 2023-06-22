import { NextResponse } from "next/server";
import prisma from "../../../connection";

export async function GET(request: Request) {
  const resturants = await prisma.resturant.findMany();
  return NextResponse.json(resturants);
}

// export async function POST(request: Request) {
//   const data = await request.json();
//   await prisma.resturant.create({
//     data: data,
//   });
//   return NextResponse.json({ message: "Successfully Created!!!!" });
// }

export async function POST(request: Request, params: { id: string }) {
  const resturant = await prisma.resturant.create({
    data: {
      title: "New eNTRY",
      address: "dfjhks",
      description: "dfhjsdfh",
      lat: 1213.12312,
      long: 234123.21321,
      rating: 5,
      categoryId: "f0bc4cce-8cd7-4a87-a299-d10f00513a3e",
    },
  });
  return NextResponse.json(resturant);
}
