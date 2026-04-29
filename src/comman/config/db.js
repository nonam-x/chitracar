import mongoose from "mongoose";
import "dotenv/config";

const connectDB = async () => {
  const connection = await mongoose.connect(process.env.MONGODB_URI);

  console.log("MongoDb Connected", connection.connection.host);
};

export default connectDB;
