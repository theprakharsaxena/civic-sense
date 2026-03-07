import Link from "next/link";

export default function HeroSection() {
  return (
    <div className="max-w-[800px] mx-auto py-20 px-6 md:px-8 text-center sm:text-left">
      <h1 className="text-4xl sm:text-5xl font-bold tracking-tight mb-6 text-stone-900">
        Help fix your neighborhood.
      </h1>
      <p className="text-lg text-stone-600 mb-8 max-w-[600px] leading-relaxed mx-auto sm:mx-0">
        Notice a pothole, a broken streetlight, or illegal dumping? Report it here so the community and local council can track and address it together.
      </p>
      
      <div className="flex flex-col sm:flex-row gap-4 justify-center sm:justify-start">
        <Link href="/report" className="bg-sky-600 text-white px-5 py-2.5 rounded-md font-medium hover:bg-sky-700 transition shadow-sm text-center">
          Report an issue
        </Link>
        <Link href="/issues" className="bg-white border border-stone-300 text-stone-700 px-5 py-2.5 rounded-md font-medium hover:bg-stone-50 transition shadow-sm text-center">
          Browse reports
        </Link>
      </div>
    </div>
  );
}
