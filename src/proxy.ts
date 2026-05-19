import { createServerClient } from "@supabase/ssr";
import { type NextRequest, NextResponse } from "next/server";

/**
 * Route protection proxy. Runs on protected routes and /login.
 * - Protected routes (/, /enhance): redirect to /login if no user.
 * - /login: redirect to / if already authenticated.
 * - /audit, /api/*, static assets: passthrough (no auth check).
 *
 * Uses getUser() (validates JWT against Supabase) instead of getSession()
 * (which only reads the local cookie : unreliable in middleware).
 */
export async function proxy(request: NextRequest) {
  const supabaseResponse = NextResponse.next({ request });

  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        getAll() {
          return request.cookies.getAll();
        },
        setAll(cookiesToSet) {
          // Sync cookies to both the current request and the response.
          // This ensures the request sees updated cookies and the browser
          // receives them for subsequent requests.
          for (const { name, value, options } of cookiesToSet) {
            request.cookies.set(name, value);
            supabaseResponse.cookies.set(name, value, options);
          }
        },
      },
    },
  );

  // getUser() hits Supabase to validate the JWT : reliable in proxy context.
  const {
    data: { user },
  } = await supabase.auth.getUser();

  const pathname = request.nextUrl.pathname;

  // /login → redirect to / if already authenticated
  if (pathname === "/login") {
    if (user) {
      return NextResponse.redirect(new URL("/", request.url));
    }

    return supabaseResponse;
  }

  // Protected routes → redirect to /login if not authenticated
  if (!user) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  return supabaseResponse;
}

/**
 * Match only the routes that need auth gating.
 * /audit, /api/*, _next/static, _next/image, favicon, etc. all pass through.
 */
export const config = {
  matcher: ["/", "/enhance", "/login"],
};
