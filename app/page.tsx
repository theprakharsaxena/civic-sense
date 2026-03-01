import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import CivicSenseInfo from "./components/CivicSenseInfo";
import ReportForm from "./components/ReportForm";
import IssuesFeed from "./components/IssuesFeed";
import ImpactDashboard from "./components/ImpactDashboard";
import CivicTips from "./components/CivicTips";
import WhyDifferent from "./components/WhyDifferent";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <CivicSenseInfo />
        <ReportForm />
        <IssuesFeed />
        <ImpactDashboard />
        <CivicTips />
        <WhyDifferent />
      </main>
      <Footer />
    </>
  );
}
