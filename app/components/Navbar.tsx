"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  return (
    <header className="border-b bg-white border-stone-200">
      <div className="max-w-[1000px] mx-auto flex items-center justify-between p-4 px-6 md:px-8">
        <Link href="/" className="font-semibold text-lg tracking-tight text-stone-900">
          CivicSense
        </Link>
        
        <nav className="flex items-center gap-6">
          <Link href="/" className={`text-sm ${pathname === "/" ? "text-sky-700 font-medium" : "text-stone-600 hover:text-stone-900"}`}>
            Home
          </Link>
          <Link href="/issues" className={`text-sm ${pathname === "/issues" ? "text-sky-700 font-medium" : "text-stone-600 hover:text-stone-900"}`}>
            Recent reports
          </Link>
          <Link href="/report" className="text-sm bg-sky-600 text-white px-4 py-2 rounded-md hover:bg-sky-700 transition font-medium">
            Report a problem
          </Link>
        </nav>
      </div>
    </header>
  );
}
