"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState, type FormEvent } from "react";
import { supabase } from "@/lib/supabase";
import { useAuth } from "@/components/AuthProvider";

export default function LoginPage() {
  const router = useRouter();
  const { user, loading } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [submitting, setSubmitting] = useState(false);

  async function handleSubmit(event: FormEvent) {
    event.preventDefault();
    setError("");

    if (!email.trim() || !password) {
      setError("Enter your email and password.");
      return;
    }

    setSubmitting(true);

    try {
      const { error: signInError } = await supabase.auth.signInWithPassword({
        email: email.trim(),
        password,
      });

      if (signInError) {
        setError(signInError.message);
        return;
      }

      router.push("/");
      router.refresh();
    } finally {
      setSubmitting(false);
    }
  }

  if (loading) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-[linear-gradient(180deg,#ffffff_0,#f6f8fb_42%,#eef3fa_100%)]">
        <div className="h-8 w-8 animate-spin rounded-full border-2 border-[#3e71b8] border-t-transparent" />
      </main>
    );
  }

  if (user) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-[linear-gradient(180deg,#ffffff_0,#f6f8fb_42%,#eef3fa_100%)]">
        <div className="border border-[#d9e2ef] bg-white px-8 py-10 text-center shadow-[0_18px_45px_rgba(30,62,108,0.09)]">
          <p className="text-lg font-bold text-[#16243d]">
            You are already signed in.
          </p>
          <Link
            href="/"
            className="mt-4 inline-block border border-[#c9d7e9] bg-[#eff5fd] px-5 py-2 text-sm font-black uppercase tracking-[0.12em] text-[#3e71b8] transition-colors hover:bg-white"
          >
            Go to Dashboard
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-[linear-gradient(180deg,#ffffff_0,#f6f8fb_42%,#eef3fa_100%)] px-5">
      <div className="w-full max-w-md">
        <div className="mb-8 text-center">
          <div className="mb-6 flex justify-center">
            <Image
              src="/all-in-advertising-logo.svg"
              alt="All In Advertising"
              width={220}
              height={45}
              priority
              className="h-auto w-44"
            />
          </div>
          <p className="text-sm font-bold uppercase tracking-[0.16em] text-[#3e71b8]">
            Client Portal
          </p>
        </div>

        <div className="border border-[#d9e2ef] bg-white shadow-[0_18px_45px_rgba(30,62,108,0.09)]">
          <div className="border-b border-[#d9e2ef] bg-[#18355f] px-6 py-4">
            <h1 className="text-lg font-black uppercase tracking-[0.08em] text-white">
              Sign In
            </h1>
          </div>

          <form className="px-6 py-6" onSubmit={handleSubmit} noValidate>
            {error && (
              <div className="mb-5 border border-[#f1c7c7] bg-[#fff7f7] px-4 py-3 text-sm font-medium text-[#b91c1c]">
                {error}
              </div>
            )}

            <div className="mb-4">
              <label
                className="mb-1.5 block text-xs font-bold uppercase tracking-[0.12em] text-[#65718a]"
                htmlFor="email"
              >
                Email
              </label>
              <input
                autoComplete="email"
                className="w-full border border-[#c9d7e9] bg-white px-4 py-2.5 text-sm text-[#16243d] outline-none transition-colors placeholder:text-[#99a8c0] focus:border-[#3e71b8] focus:ring-1 focus:ring-[#3e71b8]"
                disabled={submitting}
                id="email"
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@allinadvertising.com"
                type="email"
                value={email}
              />
            </div>

            <div className="mb-6">
              <label
                className="mb-1.5 block text-xs font-bold uppercase tracking-[0.12em] text-[#65718a]"
                htmlFor="password"
              >
                Password
              </label>
              <input
                autoComplete="current-password"
                className="w-full border border-[#c9d7e9] bg-white px-4 py-2.5 text-sm text-[#16243d] outline-none transition-colors placeholder:text-[#99a8c0] focus:border-[#3e71b8] focus:ring-1 focus:ring-[#3e71b8]"
                disabled={submitting}
                id="password"
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                type="password"
                value={password}
              />
            </div>

            <button
              className="w-full bg-[#3e71b8] py-3 text-sm font-black uppercase tracking-[0.12em] text-white transition-colors hover:bg-[#18355f] disabled:cursor-not-allowed disabled:opacity-60"
              disabled={submitting}
              type="submit"
            >
              {submitting ? "Signing in..." : "Sign In"}
            </button>
          </form>
        </div>

        <p className="mt-6 text-center text-xs text-[#65718a]">
          <Link
            href="/"
            className="font-bold uppercase tracking-[0.08em] text-[#3e71b8] transition-colors hover:text-[#18355f]"
          >
            ← Back to Portal
          </Link>
        </p>
      </div>
    </main>
  );
}
