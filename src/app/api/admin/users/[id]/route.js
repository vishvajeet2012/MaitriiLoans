import { NextResponse } from "next/server";
import connectToDatabase from "@/lib/db";
import User from "@/models/User";

export async function PUT(req, { params }) {
  try {
    await connectToDatabase();
    const { id } = params;
    const { role, permissions } = await req.json();

    const updatedUser = await User.findByIdAndUpdate(
      id,
      { role, permissions },
      { new: true, runValidators: true }
    ).select("-password");

    if (!updatedUser) {
        return NextResponse.json({ error: "User not found" }, { status: 404 });
    }

    return NextResponse.json({ user: updatedUser }, { status: 200 });
  } catch (error) {
    console.error("Update User Error:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}

export async function DELETE(req, { params }) {
    try {
      await connectToDatabase();
      const { id } = params;
  
      const deletedUser = await User.findByIdAndDelete(id);
  
      if (!deletedUser) {
          return NextResponse.json({ error: "User not found" }, { status: 404 });
      }
  
      return NextResponse.json({ message: "User deleted successfully" }, { status: 200 });
    } catch (error) {
      console.error("Delete User Error:", error);
      return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
    }
}
