import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

const connectDB = async () => {
  try {
    const connection = await mongoose.connect(
      `${process.env.MONGO_URL}/${DB_NAME}`
    );
    console.log(connection.connection.host);
  } catch (err) {
    console.log("MongoDB connection error", err);
    throw err;
  }
};

export default connectDB;
