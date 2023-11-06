import { createUser, getUserByEmail } from "@/app/controller/userController";
import connectDb from "@/app/lib/db";
import User from "@/app/lib/users";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const reqBody = await request.json();
    const { email, password } = reqBody;
    const result = await getUserByEmail(email, password);
    console.log(reqBody);
    if (result.success) {
      return NextResponse.json(
        { message: "User Logged in successfully" },
        { status: 200 }
      );
    } else {
      return NextResponse.json({ error: "Cannot Sign In" });
    }
  } catch (error: any) {
    return NextResponse.json({ error: "An error occured" });
  }
}
