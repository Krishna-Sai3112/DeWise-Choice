import mongoose from "mongoose";

const connectMongoDB = async()=>{
    try {
        await mongoose.connect(process.env.mongodb_URI);
        console.log("connected to db mowa")
    } catch (error) {
        console.log("fail iga...");
    }
};

export default connectMongoDB;