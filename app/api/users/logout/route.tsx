import { NextResponse } from "next/server";

export async function GET() {
  try {
    const response = NextResponse.json({
      message: "Logout Success",
      success: true,
    });
    response.cookies.set("token", "", {
      maxAge: 0,
      httpOnly: true,
      path: "/",
    });
    return { response };
  } catch (error) {
    return NextResponse.json({ message: "An error occured", staus: 500 });
  }
}
