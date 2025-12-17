import { NextResponse } from "next/server";
import connectToDatabase from "@/lib/db";
import User from "@/models/User";
import bcrypt from "bcryptjs";
import { generateOTP } from "@/utils/otp";
import { sendEmail } from "@/utils/email";

export async function POST(req) {
  try {
    await connectToDatabase();
    const { name, username, email, password } = await req.json();

    if (!name || !username || !email || !password) {
        return NextResponse.json({ error: "Please provide all fields" }, { status: 400 });
    }

    const existingUser = await User.findOne({ $or: [{ email }, { username }] });
    
    if (existingUser) {
        if (existingUser.isVerified) {
             return NextResponse.json({ error: "User already exists" }, { status: 400 });
        } else {
            // User exists but not verified -> Resend OTP
            const hashedPassword = await bcrypt.hash(password, 10);
            const otp = generateOTP();
            const otpExpiry = new Date(Date.now() + 10 * 60 * 1000);

            existingUser.password = hashedPassword;
            existingUser.name = name; // Update name if changed
            existingUser.username = username; // Update username if changed (careful with uniqueness but here we found by OR logic)
            existingUser.otp = otp;
            existingUser.otpExpiry = otpExpiry;
            
            await existingUser.save();
            await sendEmail(email, "Verify your account - Maitrii Loans", `<p>Your OTP is: <b>${otp}</b></p>`);

            return NextResponse.json({ message: "User detailed updated. OTP sent again. Please verify." }, { status: 200 });
        }
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const otp = generateOTP();
    const otpExpiry = new Date(Date.now() + 10 * 60 * 1000); // 10 minutes

    const newUser = new User({
        name,
        username,
        email,
        password: hashedPassword,
        otp,
        otpExpiry,
        isVerified: false
    });

    await newUser.save();

    await sendEmail(email, "Verify your account - Maitrii Loans", `<p>Your OTP is: <b>${otp}</b></p>`);

    return NextResponse.json({ message: "User registered successfully. Please verify your email." }, { status: 201 });

  } catch (error) {
    console.error("Registration Error:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
