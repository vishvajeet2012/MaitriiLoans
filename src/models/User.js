import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please provide a name"],
    },
    username: {
      type: String,
      required: [true, "Please provide a username"],
      unique: true,
    },
    email: {
      type: String,
      required: [true, "Please provide an email"],
      unique: true,
    },
    password: {
      type: String,
      required: [true, "Please provide a password"],
    },
    role: {
      type: String,
      enum: ["superadmin", "admin", "user"],
      default: "user",
    },
    // Granular permissions for Admins
    // Example: ['contact', 'blog', 'products']
    permissions: {
      type: [String], 
      default: [], 
    },
    // Optional: Reference to specific departments or notification channels
    notifications: {
      email: { type: Boolean, default: true },
      realTime: { type: Boolean, default: true },
    },
    profilePicture: {
      type: String,
    },
    position: {
      type: String,
    },
    department: {
      type: String,
    },
    isActive: {
      type: Boolean,
      default: true,
    },
    otp: {
      type: String,
    },
    otpExpiry: {
      type: Date,
    },
    isVerified: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

const User = mongoose.models.User || mongoose.model("User", userSchema);

export default User;
