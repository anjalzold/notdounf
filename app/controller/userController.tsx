// controllers/signupController.ts
import connectDb from "@/app/lib/db";
import User from "@/app/lib/users";
import exp from "constants";
import { NextResponse } from "next/server";
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

export async function createUser(
  email: string,
  username: string,
  password: string
) {
  connectDb();
  try {
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    const user = await User.create({
      email,
      username,
      password: hashedPassword,
    });
    return { user, success: true };
  } catch (error) {
    return { error, success: false };
  }
}

export async function getUserByEmail(email: string, password: string) {
  try {
    const user = await User.findOne({ email });
    if (!user) {
      return { error: "User not found", success: false };
    }
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return { error: "Invalid credentials", success: false };
    }
    const tokenData = {
      id: user._id,
      email: user.email,
      username: user.username,
    };
    const token = await jwt.sign(tokenData, "tokensecretkey", {
      expiresIn: "1h",
    });

    const response = NextResponse.json({
      message: "Login Success",
      success: true,
    });
    response.cookies.set("token", token, {
      httpOnly: true,
      maxAge: 60 * 60 * 24 * 7,
    });
    return { response };
  } catch (error) {
    return { error, success: false };
  }
}
