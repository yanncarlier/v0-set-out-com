import type { NextRequest } from "next/server"
import { NextResponse } from "next/server"
import { defaultLanguage, isValidLanguage } from "@/lib/site"

export function middleware(request: NextRequest) {
  const requestHeaders = new Headers(request.headers)
  const [, maybeLanguage] = request.nextUrl.pathname.split("/")
  const language = maybeLanguage && isValidLanguage(maybeLanguage) ? maybeLanguage : defaultLanguage

  requestHeaders.set("x-locale", language)

  return NextResponse.next({
    request: {
      headers: requestHeaders,
    },
  })
}

export const config = {
  matcher: ["/((?!_next|favicon.ico|robots.txt|sitemap.xml).*)"],
}
