import Navbar from "../components/Navbar";
import ReportForm from "../components/ReportForm";
import Footer from "../components/Footer";

export const metadata = {
  title: "Report an issue - CivicSense",
  description: "Report a local issue in your neighborhood.",
};

export default function ReportPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#fafaf9]">
      <Navbar />
      <main className="flex-1 py-12 border-b border-stone-200">
        <div className="max-w-[600px] mx-auto px-6">
          <h1 className="text-3xl font-bold mb-2 text-stone-900">Report an issue</h1>
          <p className="text-stone-600 mb-4">
            Please provide detail to help us locate and address the problem.
          </p>
        </div>
        <div className="bg-white border-y sm:border sm:rounded-lg border-stone-200 max-w-[600px] mx-auto sm:mb-12">
          <ReportForm fullPage />
        </div>
      </main>
      <Footer />
    </div>
  );
}
