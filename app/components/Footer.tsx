import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-stone-200 py-12 mt-auto bg-[#fafaf9]">
      <div className="max-w-[1000px] mx-auto px-6 md:px-8 text-sm text-stone-500 flex flex-col sm:flex-row justify-between items-center gap-4">
        <div>
          CivicSense — A community reporting tool.
        </div>
        <div className="flex gap-6">
          <Link href="/" className="hover:text-stone-900 transition">Home</Link>
          <Link href="/issues" className="hover:text-stone-900 transition">Recent reports</Link>
          <Link href="/report" className="hover:text-stone-900 transition">Report an issue</Link>
        </div>
      </div>
    </footer>
  );
}
