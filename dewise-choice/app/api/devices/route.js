import connectMongoDB from "@/libs/mongodb"
import Device from "@/models/device"
import { NextResponse } from "next/server";

export async function POST(request){
    const { name, brand, price, imageurl, ramrom, display, processor, camera, battery, os, softwaresupport, iprating, build, dimensions, speakers, network, fingerprintsensor, audiojack, devclass, camrat, perfrat, designrat, mediarat, softwarerat } = await request.json();
    await connectMongoDB();
    await Device.create({ name, brand, price, imageurl, ramrom, display, processor, camera, battery, os, softwaresupport, iprating, build, dimensions, speakers, network, fingerprintsensor, audiojack, devclass, camrat, perfrat, designrat, mediarat, softwarerat });
    return NextResponse.json({message: "Device added"})
}

export async function GET() {
    await connectMongoDB();
    const devices = await Device.find();
    return NextResponse.json({devices})
}

export async function DELETE(request) {
    const id = request.nextUrl.searchParams.get("id");
    await connectMongoDB();
    await Device.findByIdAndDelete(id);
    return NextResponse.json({message: "Device Deleted"})
}