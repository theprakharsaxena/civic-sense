import Navbar from "../components/Navbar";
import ReportForm from "../components/ReportForm";
import Footer from "../components/Footer";

export const metadata = {
    title: "Report an Issue — CivicPulse",
    description:
        "Report civic issues in your community — potholes, pollution, broken lights, and more. Be the change your city needs.",
};

export default function ReportPage() {
    return (
        <>
            <Navbar />
            <main style={{ paddingTop: 80 }}>
                <div style={{ textAlign: "center", padding: "60px 24px 0" }}>
                    <h1
                        style={{
                            fontSize: "2.5rem",
                            fontWeight: 900,
                            letterSpacing: "-0.02em",
                            marginBottom: 12,
                        }}
                    >
                        Report a <span className="gradient-text">Civic Issue</span>
                    </h1>
                    <p
                        style={{
                            color: "var(--text-secondary)",
                            fontSize: "1.05rem",
                            maxWidth: 560,
                            margin: "0 auto",
                        }}
                    >
                        Your report helps improve your community. Fill in the details below
                        and we&apos;ll make sure it gets noticed.
                    </p>
                </div>
                <ReportForm fullPage />
            </main>
            <Footer />
        </>
    );
}
