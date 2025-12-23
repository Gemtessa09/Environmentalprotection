import mongoose from "mongoose";
import dotenv from "dotenv";
import Member from "./models/Member.js";

dotenv.config();

const createAdmin = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("Connected to MongoDB");

    // Check if admin already exists
    const existingAdmin = await Member.findOne({ role: "Admin" });
    if (existingAdmin) {
      console.log("Admin user already exists:", existingAdmin.email);
      return;
    }

    // Create admin user
    const admin = new Member({
      name: "System Administrator",
      email: "admin@haramaya.edu.et",
      password: "admin123", // Change this in production!
      role: "Admin",
      department: "IT Administration",
      phone: "+251-XXX-XXXX",
      joinReason: "System Administrator",
      active: true
    });

    await admin.save();
    console.log("Admin user created successfully!");
    console.log("Email: admin@haramaya.edu.et");
    console.log("Password: admin123");
    console.log("⚠️  IMPORTANT: Change the default password after first login!");

  } catch (error) {
    console.error("Error creating admin:", error);
  } finally {
    await mongoose.disconnect();
    console.log("Disconnected from MongoDB");
  }
};

createAdmin();