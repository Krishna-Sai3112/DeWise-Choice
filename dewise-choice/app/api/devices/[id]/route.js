import connectMongoDB from "@/libs/mongodb";
import Device from "@/models/device";
import { NextResponse } from "next/server";

export async function PUT(request, {params}) {
    const {id} = params;
    const{
        newName: name, newBrand: brand, newPrice: price, newImageurl: imageurl, newRamrom: ramrom, newDisplay: display, newProcessor: processor, newCamera: camera, newBattery: battery, newOs: os, newSoftwaresupport: softwaresupport, newIprating: iprating, newBuild: build, newDimensions: dimensions, newSpeakers: speakers, newNetwork: network, newFingerprintsensor: fingerprintsensor, newAudiojack: audiojack, newDevclass: devclass, newCamrat: camrat, newPerfrat: perfrat, newDesignrat: designrat, newMediarat: mediarat, newSoftwarerat: softwarerat
    } = await request.json()
    await connectMongoDB();
    await Device.findByIdAndUpdate(id, { name, brand, price, imageurl, ramrom, display, processor, camera, battery, os, softwaresupport, iprating, build, dimensions, speakers, network, fingerprintsensor, audiojack, devclass, camrat, perfrat, designrat, mediarat, softwarerat });
    return NextResponse.json({ message:"Device Updated"});
}

export async function GET(request, {params}) {
    const {id} = params;
    await connectMongoDB();
    const device = await Device.findOne({_id: id});
    return NextResponse.json({device});
}