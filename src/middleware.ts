import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
export { default } from "next-auth/middleware";
import { getToken } from "next-auth/jwt";
// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
  // const token = await getToken({
  //   req: request,
  // });
  // console.log({ token });
  // // check not logged in
  // if (!token) {
  //   const url = new URL(`/api/auth/signin`, request.url);
  //   url.searchParams.set("callbackUrl", encodeURI(request.url));
  //   return NextResponse.redirect(url);
  // }
  // // check if not authorized
  // if (token.role !== "admin") {
  //   const url = new URL(`/403`, request.url);
  //   return NextResponse.rewrite(url);
  // }

  //   console.log(request.headers.get("user-agent"));
  //   if (request.headers.get("user-agent")?.includes("Instagram")) {
  //     return NextResponse.redirect(new URL("/home", request.url));
  //   }

  return NextResponse.next();
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    "/admin",
    //   '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
};
