import Navbar from "../components/Navbar";
import IssuesFeed from "../components/IssuesFeed";
import Footer from "../components/Footer";

export const metadata = {
    title: "Issues Board — CivicPulse",
    description:
        "Browse and upvote civic issues reported by your community. Filter by category, severity, and status.",
};

export default function IssuesPage() {
    return (
        <>
            <Navbar />
            <main style={{ paddingTop: 80 }}>
                <IssuesFeed fullPage />
            </main>
            <Footer />
        </>
    );
}
