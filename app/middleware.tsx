import { url } from "inspector";
import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
  const path = request.nextUrl.pathname;
  const isPath = path === "/login" || path === "/signup";

  const token = request.cookies.get("token")?.value || "";

  if (!isPath && !token) {
    return NextResponse.redirect(new URL("/login", request.nextUrl));
  }
  if (isPath && token) {
    return NextResponse.redirect(new URL("/", request.nextUrl));
  } else if (!isPath && token) {
    return request.nextUrl;
  } else {
    return NextResponse.redirect(new URL("/login", request.nextUrl));
  }
}

export const config = {
  matcher: ["/", "/login", "/signup"], // update matcher to include /signup
};
