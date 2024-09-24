import mongoose from "mongoose";
import { ENV_VARS } from "./envVars.js";

export const connectDB = async () => {
  try {
    await mongoose.connect(ENV_VARS.MONGODB_URI);
    console.log("MongoDB connected");
  } catch (error) {
    console.log("Error connecting to mongodb " || error.message);
    process.exit(1); // 1 means there was an error. 0 means success
  }
};
