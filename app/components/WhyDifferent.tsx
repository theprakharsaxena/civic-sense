"use client";

const comparisons = [
    {
        feature: "Civic Sense Education",
        others: false,
        us: true,
        description: "Full interactive guide to 6 categories of civic sense with examples",
        icon: "📚",
    },
    {
        feature: "Community Issue Feed",
        others: false,
        us: true,
        description: "Public feed where citizens can view, upvote, and comment on issues",
        icon: "💬",
    },
    {
        feature: "Impact Dashboard",
        others: false,
        us: true,
        description: "Real-time stats, leaderboard, and category-wise breakdown",
        icon: "📊",
    },
    {
        feature: "Gamification & Scoring",
        others: false,
        us: true,
        description: "Civic score system and contributor leaderboard to motivate participation",
        icon: "🏆",
    },
    {
        feature: "Severity Priority System",
        others: false,
        us: true,
        description: "User-assigned urgency levels (Low → Critical) for better triage",
        icon: "🚨",
    },
    {
        feature: "Knowledge Base & Tips",
        others: false,
        us: true,
        description: "Curated daily civic tips and best practices carousel",
        icon: "💡",
    },
    {
        feature: "Photo-based Reporting",
        others: true,
        us: true,
        description: "Upload photos with your report for visual evidence",
        icon: "📷",
    },
    {
        feature: "Issue Tracking",
        others: true,
        us: true,
        description: "Track reported issues from Open → In Progress → Resolved",
        icon: "📋",
    },
];

export default function WhyDifferent() {
    return (
        <section
            id="about"
            style={{
                padding: "80px 24px",
                background:
                    "linear-gradient(180deg, var(--bg-primary) 0%, var(--bg-secondary) 100%)",
            }}
        >
            <div style={{ maxWidth: 1000, margin: "0 auto" }}>
                <div style={{ textAlign: "center", marginBottom: 56 }}>
                    <div
                        style={{
                            display: "inline-flex",
                            alignItems: "center",
                            gap: 8,
                            padding: "6px 16px",
                            borderRadius: "var(--radius-full)",
                            background: "rgba(245, 158, 11, 0.1)",
                            border: "1px solid rgba(245, 158, 11, 0.2)",
                            marginBottom: 16,
                            fontSize: "0.8rem",
                            color: "var(--accent-orange)",
                            fontWeight: 600,
                        }}
                    >
                        ⚡ WHY CIVICPULSE
                    </div>
                    <h2 className="section-title" style={{ textAlign: "center" }}>
                        What Makes Us{" "}
                        <span className="gradient-text">Different</span>
                    </h2>
                    <p className="section-subtitle" style={{ margin: "0 auto", textAlign: "center" }}>
                        Existing apps like SeeClickFix and FixMyStreet only let you report. CivicPulse goes further — with education, community, gamification, and impact tracking.
                    </p>
                </div>

                {/* Comparison table */}
                <div
                    style={{
                        background: "var(--gradient-card)",
                        borderRadius: "var(--radius-xl)",
                        border: "1px solid var(--border-color)",
                        overflow: "hidden",
                    }}
                >
                    {/* Header */}
                    <div
                        style={{
                            display: "grid",
                            gridTemplateColumns: "2fr 1fr 1fr",
                            padding: "16px 24px",
                            background: "var(--bg-secondary)",
                            borderBottom: "1px solid var(--border-color)",
                            fontWeight: 700,
                            fontSize: "0.85rem",
                            color: "var(--text-secondary)",
                            textTransform: "uppercase",
                            letterSpacing: "0.05em",
                        }}
                    >
                        <div>Feature</div>
                        <div style={{ textAlign: "center" }}>Other Apps</div>
                        <div style={{ textAlign: "center" }}>
                            <span className="gradient-text" style={{ fontWeight: 800 }}>CivicPulse</span>
                        </div>
                    </div>

                    {/* Rows */}
                    {comparisons.map((item, i) => (
                        <div
                            key={item.feature}
                            style={{
                                display: "grid",
                                gridTemplateColumns: "2fr 1fr 1fr",
                                padding: "18px 24px",
                                borderBottom:
                                    i < comparisons.length - 1
                                        ? "1px solid var(--border-color)"
                                        : "none",
                                alignItems: "center",
                                transition: "background 0.2s",
                            }}
                            onMouseEnter={(e) =>
                                (e.currentTarget.style.background = "rgba(16, 185, 129, 0.03)")
                            }
                            onMouseLeave={(e) =>
                                (e.currentTarget.style.background = "transparent")
                            }
                        >
                            <div>
                                <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                                    <span style={{ fontSize: "1.2rem" }}>{item.icon}</span>
                                    <div>
                                        <div style={{ fontWeight: 600, fontSize: "0.9rem" }}>
                                            {item.feature}
                                        </div>
                                        <div
                                            style={{
                                                color: "var(--text-muted)",
                                                fontSize: "0.78rem",
                                                marginTop: 2,
                                            }}
                                        >
                                            {item.description}
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div style={{ textAlign: "center", fontSize: "1.2rem" }}>
                                {item.others ? (
                                    <span style={{ color: "var(--accent-primary)" }}>✅</span>
                                ) : (
                                    <span style={{ color: "var(--accent-red)", opacity: 0.7 }}>❌</span>
                                )}
                            </div>
                            <div style={{ textAlign: "center", fontSize: "1.2rem" }}>
                                <span style={{ color: "var(--accent-primary)" }}>✅</span>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Bottom CTA */}
                <div style={{ textAlign: "center", marginTop: 48 }}>
                    <p
                        style={{
                            color: "var(--text-secondary)",
                            fontSize: "1.05rem",
                            marginBottom: 24,
                        }}
                    >
                        Ready to make a difference in your community?
                    </p>
                    <div style={{ display: "flex", gap: 14, justifyContent: "center", flexWrap: "wrap" }}>
                        <a href="/report" className="btn-primary" style={{ padding: "14px 32px" }}>
                            🚀 Start Reporting
                        </a>
                        <a href="#civic-sense" className="btn-secondary" style={{ padding: "14px 32px" }}>
                            📖 Learn More
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}
