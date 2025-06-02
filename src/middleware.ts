import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  const token = request.cookies.get('token')?.value

  if (!token) {
    // return NextResponse.redirect(new URL('/', request.url))
    return NextResponse.redirect(new URL('/?sessionExpired=true', request.url))
  }

  return NextResponse.next()
}

export const config = {
  matcher: ['/modulo/:path*'], // aqui vai as rotas para as quais o middleware vai ser aplicado
}