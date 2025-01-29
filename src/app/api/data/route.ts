import { NextResponse } from "next/server";
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export async function GET() {
    const alldata = await prisma.data.findMany();
    console.log('alldata',alldata);
    
    return NextResponse.json(alldata);
}

export async function POST(req:NextResponse) {
    const { title , description } = await req.json();

    const newPost = await prisma.data.create({
      data: { title , description },
    });
  
    return NextResponse.json(newPost);
}
export async function PUT(req:NextResponse) {
    
}
export async function DELETE(req:NextResponse) {
    
}