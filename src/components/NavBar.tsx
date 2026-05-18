"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AuthHeader } from "./AuthHeader";

export function NavBar() {
  const pathname = usePathname();

  const linkClasses = (href: string) =>
    `px-3 py-2 text-xs font-black uppercase tracking-[0.12em] transition-colors ${
      pathname === href
        ? "bg-[#18355f] text-white"
        : "text-[#3e71b8] hover:bg-[#eff5fd]"
    }`;

  return (
    <div className="border-b border-[#d9e2ef] bg-white">
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between gap-6 px-5 py-4 sm:px-8 lg:px-10">
        <Link href="/" aria-label="All In Advertising audit portal">
          <Image
            src="/all-in-advertising-logo.svg"
            alt="All In Advertising"
            width={260}
            height={53}
            priority
            className="h-auto w-48 max-w-[68vw] sm:w-56"
          />
        </Link>

        <nav className="hidden items-center gap-1 sm:flex">
          <Link className={linkClasses("/")} href="/">
            Dashboard
          </Link>
          <Link className={linkClasses("/enhance")} href="/enhance">
            Enhance
          </Link>
        </nav>

        <div className="flex items-center gap-3">
          <nav className="flex items-center gap-1 sm:hidden">
            <Link className={linkClasses("/")} href="/">
              Dashboard
            </Link>
            <Link className={linkClasses("/enhance")} href="/enhance">
              Enhance
            </Link>
          </nav>
          <AuthHeader />
        </div>
      </div>
    </div>
  );
}
