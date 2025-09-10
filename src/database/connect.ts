import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

const mongoConnectionString = process.env.MONGO_URL as string;

async function connectMongoDB() {
  const connection = await mongoose.connect(mongoConnectionString);
  console.log(`Mongo DB Connected Successfully`);
  return connection;
}

export default connectMongoDB;
