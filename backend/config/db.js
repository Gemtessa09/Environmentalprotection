import mongoose from "mongoose";

const connectDB = async (uri) => {
  if (!uri) {
    throw new Error("MONGO_URI is missing");
  }

  mongoose.set("strictQuery", true);

  mongoose.connection.on("connected", () => {
    console.log("MongoDB connected");
  });

  mongoose.connection.on("error", (err) => {
    console.error("MongoDB connection error:", err?.message || err);
  });

  mongoose.connection.on("disconnected", () => {
    console.log("MongoDB disconnected");
  });

  // Mongoose (MongoDB driver v4+) no longer needs useNewUrlParser/useUnifiedTopology.
  await mongoose.connect(uri);
};

export default connectDB;
