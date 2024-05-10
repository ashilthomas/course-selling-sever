
import mongoose from "mongoose"
import "dotenv/config"

const connectDb = async ()=>{
    try {
        await mongoose.connect("mongodb+srv://ashilthomas31:2222233555@cluster0.l1m5hnq.mongodb.net/course-selling")
        console.log("MongoDB connected successfully");
    } catch (error) {
        console.log(error);
        
    }
}

export default connectDb