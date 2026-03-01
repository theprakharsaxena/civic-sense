"use client";

import { useState, useEffect } from "react";

interface Issue {
    id: string;
    category: string;
    title: string;
    description: string;
    location: string;
    severity: string;
    photo: string | null;
    reporterName: string;
    timestamp: string;
    status: string;
    upvotes: number;
    comments: string[];
}

const sampleIssues: Issue[] = [
    {
        id: "sample-1",
        category: "Public Property",
        title: "Large Pothole on MG Road Near Signal",
        description:
            "A dangerous pothole has formed near the traffic signal on MG Road. It's about 2 feet wide and 6 inches deep. Multiple vehicles have been damaged. Urgent repair needed.",
        location: "MG Road, Near City Mall Signal",
        severity: "High",
        photo: null,
        reporterName: "Rahul Sharma",
        timestamp: "2026-02-28T10:30:00Z",
        status: "In Progress",
        upvotes: 42,
        comments: ["I also saw this!", "Very dangerous at night"],
    },
    {
        id: "sample-2",
        category: "Environment",
        title: "Illegal Garbage Dumping Near Park",
        description:
            "Someone has been dumping construction waste and household garbage near the children's park. It's attracting stray animals and causing a terrible smell.",
        location: "Green Park Colony, Sector 7",
        severity: "Medium",
        photo: null,
        reporterName: "Priya Patel",
        timestamp: "2026-02-27T15:45:00Z",
        status: "Open",
        upvotes: 28,
        comments: ["This has been going on for weeks"],
    },
    {
        id: "sample-3",
        category: "Traffic Safety",
        title: "Broken Traffic Signal at Main Intersection",
        description:
            "The traffic signal at the main intersection has been malfunctioning for 3 days. It stays red in all directions causing massive congestion during peak hours.",
        location: "Station Road & Ring Road Intersection",
        severity: "Critical",
        photo: null,
        reporterName: "Amit Kumar",
        timestamp: "2026-02-26T08:20:00Z",
        status: "Open",
        upvotes: 67,
        comments: [
            "Almost had an accident here yesterday",
            "Traffic police should be deployed",
            "This needs immediate attention",
        ],
    },
    {
        id: "sample-4",
        category: "Public Property",
        title: "Broken Streetlights on Residential Road",
        description:
            "Five consecutive streetlights are not working on the main residential road. It becomes completely dark at night, making it unsafe for pedestrians.",
        location: "Lakeview Colony, Road No. 12",
        severity: "Medium",
        photo: null,
        reporterName: "Anonymous",
        timestamp: "2026-02-25T20:15:00Z",
        status: "Resolved",
        upvotes: 35,
        comments: ["Finally fixed! Thank you"],
    },
    {
        id: "sample-5",
        category: "Environment",
        title: "Open Drain Overflowing Near School",
        description:
            "The drain near ABC Public School has been overflowing for the past week. Dirty water is entering the school premises and nearby houses. Health hazard for children.",
        location: "Near ABC Public School, Civil Lines",
        severity: "Critical",
        photo: null,
        reporterName: "Sunita Devi",
        timestamp: "2026-02-24T09:10:00Z",
        status: "In Progress",
        upvotes: 89,
        comments: [
            "Kids are getting sick",
            "Municipal corporation was notified",
        ],
    },
    {
        id: "sample-6",
        category: "Public Conduct",
        title: "Loud Music from Events Late at Night",
        description:
            "A banquet hall plays extremely loud music past midnight every weekend, disturbing hundreds of residents. Noise pollution norms are being violated regularly.",
        location: "Star Banquet Hall, Highway Road",
        severity: "Low",
        photo: null,
        reporterName: "Dr. R. Verma",
        timestamp: "2026-02-23T23:30:00Z",
        status: "Open",
        upvotes: 19,
        comments: ["Happens every Saturday night"],
    },
];

const severityColors: Record<string, string> = {
    Low: "#34d399",
    Medium: "#fbbf24",
    High: "#f87171",
    Critical: "#f472b6",
};

const statusColors: Record<string, string> = {
    Open: "#3b82f6",
    "In Progress": "#f59e0b",
    Resolved: "#10b981",
};

interface IssuesFeedProps {
    fullPage?: boolean;
}

export default function IssuesFeed({ fullPage = false }: IssuesFeedProps) {
    const [issues, setIssues] = useState<Issue[]>([]);
    const [filter, setFilter] = useState("All");
    const [severityFilter, setSeverityFilter] = useState("All");
    const [statusFilter, setStatusFilter] = useState("All");

    useEffect(() => {
        const stored = JSON.parse(localStorage.getItem("civicpulse_issues") || "[]");
        setIssues([...stored, ...sampleIssues]);
    }, []);

    const filteredIssues = issues.filter((issue) => {
        if (filter !== "All" && issue.category !== filter) return false;
        if (severityFilter !== "All" && issue.severity !== severityFilter) return false;
        if (statusFilter !== "All" && issue.status !== statusFilter) return false;
        return true;
    });

    const handleUpvote = (id: string) => {
        setIssues((prev) =>
            prev.map((issue) =>
                issue.id === id ? { ...issue, upvotes: issue.upvotes + 1 } : issue
            )
        );
    };

    const formatTime = (ts: string) => {
        const d = new Date(ts);
        const now = new Date();
        const diff = Math.floor((now.getTime() - d.getTime()) / 1000);
        if (diff < 3600) return `${Math.floor(diff / 60)}m ago`;
        if (diff < 86400) return `${Math.floor(diff / 3600)}h ago`;
        return `${Math.floor(diff / 86400)}d ago`;
    };

    const displayIssues = fullPage ? filteredIssues : filteredIssues.slice(0, 4);

    return (
        <section id="issues" className="section">
            <div style={{ textAlign: "center", marginBottom: 40 }}>
                <div
                    style={{
                        display: "inline-flex",
                        alignItems: "center",
                        gap: 8,
                        padding: "6px 16px",
                        borderRadius: "var(--radius-full)",
                        background: "rgba(59, 130, 246, 0.1)",
                        border: "1px solid rgba(59, 130, 246, 0.2)",
                        marginBottom: 16,
                        fontSize: "0.8rem",
                        color: "var(--accent-blue)",
                        fontWeight: 600,
                    }}
                >
                    📋 ISSUES BOARD
                </div>
                <h2 className="section-title" style={{ textAlign: "center" }}>
                    Community <span className="gradient-text">Reported Issues</span>
                </h2>
                <p className="section-subtitle" style={{ margin: "0 auto", textAlign: "center" }}>
                    See what your fellow citizens are reporting. Upvote issues that matter to you.
                </p>
            </div>

            {/* Filters */}
            <div
                style={{
                    display: "flex",
                    gap: 12,
                    marginBottom: 32,
                    flexWrap: "wrap",
                    justifyContent: "center",
                }}
            >
                {/* Category Filter */}
                <select
                    className="input-field"
                    style={{ width: "auto", padding: "8px 40px 8px 14px", fontSize: "0.85rem" }}
                    value={filter}
                    onChange={(e) => setFilter(e.target.value)}
                >
                    <option value="All">All Categories</option>
                    {["Public Conduct", "Environment", "Traffic Safety", "Public Property", "Community", "Digital Civics"].map(
                        (c) => (
                            <option key={c} value={c}>
                                {c}
                            </option>
                        )
                    )}
                </select>

                <select
                    className="input-field"
                    style={{ width: "auto", padding: "8px 40px 8px 14px", fontSize: "0.85rem" }}
                    value={severityFilter}
                    onChange={(e) => setSeverityFilter(e.target.value)}
                >
                    <option value="All">All Severities</option>
                    {["Low", "Medium", "High", "Critical"].map((s) => (
                        <option key={s} value={s}>{s}</option>
                    ))}
                </select>

                <select
                    className="input-field"
                    style={{ width: "auto", padding: "8px 40px 8px 14px", fontSize: "0.85rem" }}
                    value={statusFilter}
                    onChange={(e) => setStatusFilter(e.target.value)}
                >
                    <option value="All">All Statuses</option>
                    {["Open", "In Progress", "Resolved"].map((s) => (
                        <option key={s} value={s}>{s}</option>
                    ))}
                </select>
            </div>

            {/* Results count */}
            <p style={{ color: "var(--text-muted)", fontSize: "0.85rem", marginBottom: 20, textAlign: "center" }}>
                Showing {displayIssues.length} of {filteredIssues.length} issues
            </p>

            {/* Issues Grid */}
            <div
                style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fill, minmax(340px, 1fr))",
                    gap: 20,
                }}
            >
                {displayIssues.map((issue) => (
                    <div key={issue.id} className="card" style={{ position: "relative" }}>
                        {/* photo */}
                        {issue.photo && (
                            <div
                                style={{
                                    marginBottom: 16,
                                    borderRadius: "var(--radius-md)",
                                    overflow: "hidden",
                                    maxHeight: 180,
                                }}
                            >
                                <img
                                    src={issue.photo}
                                    alt={issue.title}
                                    style={{ width: "100%", height: 180, objectFit: "cover" }}
                                />
                            </div>
                        )}

                        {/* Badges row */}
                        <div style={{ display: "flex", gap: 8, marginBottom: 12, flexWrap: "wrap" }}>
                            <span
                                className="badge"
                                style={{
                                    background: `${severityColors[issue.severity]}15`,
                                    color: severityColors[issue.severity],
                                }}
                            >
                                {issue.severity}
                            </span>
                            <span
                                className="badge"
                                style={{
                                    background: `${statusColors[issue.status]}15`,
                                    color: statusColors[issue.status],
                                }}
                            >
                                {issue.status}
                            </span>
                            <span
                                className="badge"
                                style={{
                                    background: "rgba(148,163,184,0.1)",
                                    color: "var(--text-muted)",
                                }}
                            >
                                {issue.category}
                            </span>
                        </div>

                        <h3 style={{ fontWeight: 700, fontSize: "1rem", marginBottom: 8 }}>
                            {issue.title}
                        </h3>
                        <p
                            style={{
                                color: "var(--text-secondary)",
                                fontSize: "0.85rem",
                                lineHeight: 1.6,
                                marginBottom: 14,
                                display: "-webkit-box",
                                WebkitLineClamp: 3,
                                WebkitBoxOrient: "vertical",
                                overflow: "hidden",
                            }}
                        >
                            {issue.description}
                        </p>

                        <div
                            style={{
                                display: "flex",
                                alignItems: "center",
                                gap: 6,
                                fontSize: "0.8rem",
                                color: "var(--text-muted)",
                                marginBottom: 16,
                            }}
                        >
                            <span>📍</span>
                            <span>{issue.location}</span>
                        </div>

                        {/* Footer */}
                        <div
                            style={{
                                display: "flex",
                                justifyContent: "space-between",
                                alignItems: "center",
                                paddingTop: 14,
                                borderTop: "1px solid var(--border-color)",
                            }}
                        >
                            <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
                                <button
                                    onClick={() => handleUpvote(issue.id)}
                                    style={{
                                        background: "none",
                                        border: "1px solid var(--border-color)",
                                        borderRadius: "var(--radius-full)",
                                        padding: "6px 14px",
                                        cursor: "pointer",
                                        display: "flex",
                                        alignItems: "center",
                                        gap: 6,
                                        color: "var(--text-secondary)",
                                        fontSize: "0.8rem",
                                        transition: "all 0.2s",
                                        fontFamily: "inherit",
                                    }}
                                    onMouseEnter={(e) => {
                                        e.currentTarget.style.borderColor = "var(--accent-primary)";
                                        e.currentTarget.style.color = "var(--accent-primary)";
                                    }}
                                    onMouseLeave={(e) => {
                                        e.currentTarget.style.borderColor = "var(--border-color)";
                                        e.currentTarget.style.color = "var(--text-secondary)";
                                    }}
                                >
                                    ▲ {issue.upvotes}
                                </button>
                                <span style={{ fontSize: "0.8rem", color: "var(--text-muted)" }}>
                                    💬 {issue.comments.length}
                                </span>
                            </div>

                            <div style={{ fontSize: "0.75rem", color: "var(--text-muted)" }}>
                                {issue.reporterName || "Anonymous"} · {formatTime(issue.timestamp)}
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {!fullPage && filteredIssues.length > 4 && (
                <div style={{ textAlign: "center", marginTop: 36 }}>
                    <a href="/issues" className="btn-secondary">
                        View All Issues →
                    </a>
                </div>
            )}
        </section>
    );
}
