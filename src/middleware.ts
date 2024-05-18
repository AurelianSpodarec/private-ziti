import { NextRequest, NextResponse } from "next/server"
import { auth } from "./auth"

export async function middleware (request: NextRequest) {
  const session = await auth()
  if (!session?.user?.token) {
    return NextResponse.redirect(new URL("/signin", request.url))
  }
}

export const config = {
  matcher: '/protected/:path*',
}
