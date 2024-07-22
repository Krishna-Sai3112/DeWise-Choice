import mongoose, {Schema} from "mongoose";

const deviceSchema = new Schema(
    {
        name: String,
        brand: String,
        price: String,
        imageurl: String,
        ramrom: String,
        display: String,
        processor: String,
        camera: String,
        battery: String,
        os: String,
        softwaresupport: String,
        iprating: String,
        build: String,
        dimensions: String,
        speakers: String,
        network: String,
        fingerprintsensor: String,
        audiojack: String,
        devclass: String,
        camrat: Number,
        perfrat: Number,
        designrat: Number,
        mediarat: Number,
        softwarerat: Number,
    }
);

const Device = mongoose.models.Device || mongoose.model("Device", deviceSchema)

export default Device;