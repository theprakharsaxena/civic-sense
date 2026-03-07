import Navbar from "../components/Navbar";
import IssuesFeed from "../components/IssuesFeed";
import Footer from "../components/Footer";

export const metadata = {
  title: "Recent reports - CivicSense",
  description: "Browse recent issues reported in the community.",
};

export default function IssuesPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#fafaf9]">
      <Navbar />
      <main className="flex-1 pt-12 pb-16">
        <div className="max-w-[800px] mx-auto px-6 mb-2">
          <h1 className="text-3xl font-bold text-stone-900">Recent reports</h1>
          <p className="text-stone-600 mt-2">See what's being reported in the community.</p>
        </div>
        <IssuesFeed fullPage />
      </main>
      <Footer />
    </div>
  );
}
