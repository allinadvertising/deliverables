"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useAuth } from "./AuthProvider";

export function AuthHeader() {
  const router = useRouter();
  const { user, loading, signOut } = useAuth();

  if (loading) {
    return <div className="h-8 w-8" />;
  }

  if (user) {
    async function handleSignOut() {
      await signOut();
      router.push("/login");
      router.refresh();
    }

    return (
      <div className="flex items-center gap-3">
        <span className="hidden text-xs font-medium text-[#65718a] sm:inline">
          {user.email}
        </span>
        <button
          className="border border-[#c9d7e9] bg-[#eff5fd] px-3 py-2 text-xs font-black uppercase tracking-[0.12em] text-[#b91c1c] transition-colors hover:bg-white"
          onClick={handleSignOut}
          type="button"
        >
          Sign Out
        </button>
      </div>
    );
  }

  return (
    <Link
      className="border border-[#c9d7e9] bg-[#eff5fd] px-3 py-2 text-xs font-black uppercase tracking-[0.12em] text-[#3e71b8] transition-colors hover:bg-white"
      href="/login"
    >
      Sign In
    </Link>
  );
}
