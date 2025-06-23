import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config()

const uri = process.env.MONGO_URI;

export const connectMongo = async () => {
      try {
            await mongoose.connect(uri);
            console.log("MongoDB Connected Successfully! ✅");
          } catch (error) {
              console.error("MongoDB Connection Failed ❌" , error);
              process.exit(1); // Exit process if connection fails
            }
      }
