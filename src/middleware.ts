import { type NextRequest, NextResponse } from "next/server"
import { cookies } from "next/headers"

const PUBLIC_PATHS = ["/", "/login"] as const

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl
  const isPublic = PUBLIC_PATHS.some((path) => pathname.startsWith(path))
  
  if (isPublic) {
    return NextResponse.next()
  }

  const cookieStore = await cookies()
  const token = cookieStore.get("privy_token")
  
  if (!token) {
    return NextResponse.redirect(new URL("/login", request.url))
  }

  return NextResponse.next()
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
}