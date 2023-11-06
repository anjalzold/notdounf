import { createUser } from "@/app/controller/userController";
import connectDb from "@/app/lib/db";
import User from "@/app/lib/users";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const reqBody = await request.json();
    const { email, username, password } = reqBody;
    const result = await createUser(email, username, password);
    console.log(reqBody);
    if (result.success) {
      return NextResponse.json(
        { message: "User created successfully" },
        { status: 201 }
      );
    } else {
      return NextResponse.json({ error: "Could not create user" });
    }
  } catch (error: any) {
    return NextResponse.json({ error: "An error occured" });
  }
}
