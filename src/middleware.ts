// middleware.ts
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

// Middleware function to control search engine indexing based on deployment environment
export function middleware (req: NextRequest) {
  // Check if the deployment is actual production
  const isActualProduction = process.env.IS_ACTUAL_PRODUCTION === 'true'

  // If not in actual production, set headers to prevent search engines from indexing the pages
  if (!isActualProduction) {
    const response = NextResponse.next()
    response.headers.set('X-Robots-Tag', 'noindex, nofollow, nocache, noarchive, nosnippet, noimageindex')
    return response
  }

  // If in actual production, proceed without modifying the response
  return NextResponse.next()
}

// Configure the middleware to run on all paths except for specific static files and API routes
export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)']
}
