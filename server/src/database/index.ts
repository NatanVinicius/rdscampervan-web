import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

export const connectDB = async () => {
	try {
		await mongoose.connect(process.env.MONGO_URL as string);
		console.log("✅ MongoDB Connected");
	} catch (error) {
		console.error("❌ Error conecting to MongoDB", error);
		process.exit(1);
	}
};
