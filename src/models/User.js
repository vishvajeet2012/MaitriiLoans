import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
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
    isActive: {
      type: Boolean,
      default: true,
    },
  },
  { timestamps: true }
);

const User = mongoose.models.User || mongoose.model("User", userSchema);

export default User;
