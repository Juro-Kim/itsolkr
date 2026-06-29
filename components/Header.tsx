"use client";
import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="bg-[#1e2030] text-white sticky top-0 z-50 shadow-lg">
      <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="text-xl font-bold tracking-widest text-white hover:text-[#9f95f5] transition-colors">
          ITSOLKR
        </Link>
        <button className="md:hidden p-1" onClick={() => setOpen(!open)} aria-label="메뉴">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {open
              ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />}
          </svg>
        </button>
        <nav className={`${open ? "flex" : "hidden"} md:flex flex-col md:flex-row absolute md:static top-16 left-0 right-0 bg-[#1e2030] md:bg-transparent p-4 md:p-0 gap-1 md:gap-6 text-sm font-medium border-t border-[#2f3248] md:border-0`}>
          {[
            { href: "/", label: "홈" },
            { href: "/portfolio", label: "포트폴리오" },
            { href: "/apps/delivery", label: "배달앱" },
            { href: "/apps/dating", label: "데이팅앱" },
            { href: "/contact", label: "연락처" },
          ].map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="px-3 py-2 md:py-1 rounded hover:text-[#9f95f5] transition-colors"
              onClick={() => setOpen(false)}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
