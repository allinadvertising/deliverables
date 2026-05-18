import { createServerClient } from "@supabase/ssr";
import { cookies } from "next/headers";

/**
 * Supabase client for Next.js middleware and server components.
 * Uses cookie-based session handling via @supabase/ssr.
 *
 * Usage in middleware.ts:
 *   const supabase = createClient()
 *   const { data: { session } } = await supabase.auth.getSession()
 *
 * Usage in server components:
 *   const supabase = createClient()
 *   const { data: { user } } = await supabase.auth.getUser()
 */
export async function createClient() {
  const cookieStore = await cookies();

  return createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        getAll() {
          return cookieStore.getAll();
        },
        setAll(cookiesToSet) {
          for (const { name, value, options } of cookiesToSet) {
            try {
              cookieStore.set(name, value, options);
            } catch {
              // In middleware, setAll may be called from a Server Component context
              // where cookies() is read-only. This is expected — the cookie will
              // be set on the response via middleware's cookie management.
            }
          }
        },
      },
    },
  );
}
