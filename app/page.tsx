import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import CivicSenseInfo from "./components/CivicSenseInfo";
import IssuesFeed from "./components/IssuesFeed";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-[#fafaf9]">
      <Navbar />
      <main className="flex-1">
        <HeroSection />
        <IssuesFeed />
        <CivicSenseInfo />
      </main>
      <Footer />
    </div>
  );
}
