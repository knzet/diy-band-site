import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// This function can be marked `async` if using `await` inside
// export function middleware(request: NextRequest) {
// //   console.log(request.headers.get("user-agent"));
// //   if (request.headers.get("user-agent")?.includes("Instagram")) {
// //     return NextResponse.redirect(new URL("/home", request.url));
// //   }
//   return NextResponse.next();
// }

// export const config = {
//     matcher: [
//       /*
//        * Match all request paths except for the ones starting with:
//        * - api (API routes)
//        * - _next/static (static files)
//        * - _next/image (image optimization files)
//        * - favicon.ico (favicon file)
//        */
//       '/((?!api|_next/static|_next/image|favicon.ico).*)',
//     ],
//   }