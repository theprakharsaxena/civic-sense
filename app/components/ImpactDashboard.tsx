"use client";

import { useEffect, useState, useRef } from "react";

function AnimatedCounter({ end, duration = 2000 }: { end: number; duration?: number }) {
    const [count, setCount] = useState(0);
    const ref = useRef<HTMLDivElement>(null);
    const started = useRef(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting && !started.current) {
                    started.current = true;
                    const start = 0;
                    const startTime = performance.now();

                    const animate = (currentTime: number) => {
                        const elapsed = currentTime - startTime;
                        const progress = Math.min(elapsed / duration, 1);
                        const easeOut = 1 - Math.pow(1 - progress, 3);
                        setCount(Math.floor(start + (end - start) * easeOut));
                        if (progress < 1) requestAnimationFrame(animate);
                    };

                    requestAnimationFrame(animate);
                }
            },
            { threshold: 0.3 }
        );

        if (ref.current) observer.observe(ref.current);
        return () => observer.disconnect();
    }, [end, duration]);

    return <div ref={ref}>{count.toLocaleString()}</div>;
}

const stats = [
    { value: 2847, label: "Issues Reported", icon: "📝", color: "#3b82f6" },
    { value: 1523, label: "Issues Resolved", icon: "✅", color: "#10b981" },
    { value: 12400, label: "Active Citizens", icon: "👥", color: "#8b5cf6" },
    { value: 48, label: "Cities Covered", icon: "🏙️", color: "#f59e0b" },
];

const leaderboard = [
    { name: "Rahul S.", score: 156, avatar: "👨‍💻" },
    { name: "Priya P.", score: 142, avatar: "👩‍🔬" },
    { name: "Amit K.", score: 128, avatar: "👨‍🏫" },
    { name: "Sunita D.", score: 115, avatar: "👩‍⚕️" },
    { name: "Vikram M.", score: 103, avatar: "👨‍🎓" },
];

const categoryBreakdown = [
    { name: "Environment", count: 856, percent: 30, color: "#06d6a0" },
    { name: "Public Property", count: 742, percent: 26, color: "#8b5cf6" },
    { name: "Traffic Safety", count: 571, percent: 20, color: "#3b82f6" },
    { name: "Public Conduct", count: 342, percent: 12, color: "#10b981" },
    { name: "Community", count: 228, percent: 8, color: "#f59e0b" },
    { name: "Digital Civics", count: 108, percent: 4, color: "#ec4899" },
];

export default function ImpactDashboard() {
    return (
        <section
            id="impact"
            style={{
                padding: "80px 24px",
                background:
                    "linear-gradient(180deg, var(--bg-primary) 0%, var(--bg-secondary) 50%, var(--bg-primary) 100%)",
            }}
        >
            <div style={{ maxWidth: 1280, margin: "0 auto" }}>
                <div style={{ textAlign: "center", marginBottom: 56 }}>
                    <div
                        style={{
                            display: "inline-flex",
                            alignItems: "center",
                            gap: 8,
                            padding: "6px 16px",
                            borderRadius: "var(--radius-full)",
                            background: "rgba(139, 92, 246, 0.1)",
                            border: "1px solid rgba(139, 92, 246, 0.2)",
                            marginBottom: 16,
                            fontSize: "0.8rem",
                            color: "var(--accent-purple)",
                            fontWeight: 600,
                        }}
                    >
                        📊 COMMUNITY IMPACT
                    </div>
                    <h2 className="section-title" style={{ textAlign: "center" }}>
                        Together We&apos;re Making a{" "}
                        <span className="gradient-text">Difference</span>
                    </h2>
                    <p className="section-subtitle" style={{ margin: "0 auto", textAlign: "center" }}>
                        See the real impact our community is making. Every report counts.
                    </p>
                </div>

                {/* Stats Row */}
                <div
                    style={{
                        display: "grid",
                        gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
                        gap: 20,
                        marginBottom: 48,
                    }}
                >
                    {stats.map((stat) => (
                        <div
                            key={stat.label}
                            className="card"
                            style={{
                                textAlign: "center",
                                padding: "30px 20px",
                                borderTop: `3px solid ${stat.color}`,
                            }}
                        >
                            <div style={{ fontSize: "2rem", marginBottom: 10 }}>{stat.icon}</div>
                            <div
                                style={{
                                    fontSize: "2.2rem",
                                    fontWeight: 800,
                                    color: stat.color,
                                    marginBottom: 4,
                                }}
                            >
                                <AnimatedCounter end={stat.value} />
                            </div>
                            <div style={{ fontSize: "0.85rem", color: "var(--text-muted)" }}>
                                {stat.label}
                            </div>
                        </div>
                    ))}
                </div>

                {/* Two columns: Leaderboard + Category Breakdown */}
                <div
                    style={{
                        display: "grid",
                        gridTemplateColumns: "repeat(auto-fit, minmax(350px, 1fr))",
                        gap: 24,
                    }}
                >
                    {/* Leaderboard */}
                    <div className="card" style={{ padding: 28 }}>
                        <h3
                            style={{
                                fontWeight: 700,
                                fontSize: "1.1rem",
                                marginBottom: 20,
                                display: "flex",
                                alignItems: "center",
                                gap: 8,
                            }}
                        >
                            🏆 Top Contributors
                        </h3>
                        <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                            {leaderboard.map((user, i) => (
                                <div
                                    key={user.name}
                                    style={{
                                        display: "flex",
                                        alignItems: "center",
                                        gap: 14,
                                        padding: "12px 16px",
                                        borderRadius: "var(--radius-md)",
                                        background:
                                            i === 0
                                                ? "rgba(245, 158, 11, 0.08)"
                                                : "var(--bg-secondary)",
                                        border: i === 0 ? "1px solid rgba(245, 158, 11, 0.2)" : "1px solid transparent",
                                        transition: "all 0.2s",
                                    }}
                                >
                                    <div
                                        style={{
                                            width: 28,
                                            height: 28,
                                            borderRadius: "50%",
                                            background:
                                                i === 0
                                                    ? "linear-gradient(135deg, #f59e0b, #fbbf24)"
                                                    : i === 1
                                                        ? "linear-gradient(135deg, #94a3b8, #cbd5e1)"
                                                        : i === 2
                                                            ? "linear-gradient(135deg, #b45309, #d97706)"
                                                            : "var(--bg-card)",
                                            display: "flex",
                                            alignItems: "center",
                                            justifyContent: "center",
                                            fontSize: "0.75rem",
                                            fontWeight: 800,
                                            color: i < 3 ? "var(--bg-primary)" : "var(--text-muted)",
                                            flexShrink: 0,
                                        }}
                                    >
                                        {i + 1}
                                    </div>
                                    <span style={{ fontSize: "1.3rem" }}>{user.avatar}</span>
                                    <span style={{ fontWeight: 600, fontSize: "0.9rem", flex: 1 }}>{user.name}</span>
                                    <span
                                        style={{
                                            fontWeight: 700,
                                            fontSize: "0.9rem",
                                            color: "var(--accent-primary)",
                                        }}
                                    >
                                        {user.score} pts
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Category Breakdown */}
                    <div className="card" style={{ padding: 28 }}>
                        <h3
                            style={{
                                fontWeight: 700,
                                fontSize: "1.1rem",
                                marginBottom: 20,
                                display: "flex",
                                alignItems: "center",
                                gap: 8,
                            }}
                        >
                            📊 Issues by Category
                        </h3>
                        <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                            {categoryBreakdown.map((cat) => (
                                <div key={cat.name}>
                                    <div
                                        style={{
                                            display: "flex",
                                            justifyContent: "space-between",
                                            marginBottom: 6,
                                            fontSize: "0.85rem",
                                        }}
                                    >
                                        <span style={{ fontWeight: 600 }}>{cat.name}</span>
                                        <span style={{ color: "var(--text-muted)" }}>
                                            {cat.count} ({cat.percent}%)
                                        </span>
                                    </div>
                                    <div
                                        style={{
                                            width: "100%",
                                            height: 8,
                                            borderRadius: "var(--radius-full)",
                                            background: "var(--bg-secondary)",
                                            overflow: "hidden",
                                        }}
                                    >
                                        <div
                                            style={{
                                                width: `${cat.percent}%`,
                                                height: "100%",
                                                borderRadius: "var(--radius-full)",
                                                background: cat.color,
                                                transition: "width 1s ease",
                                            }}
                                        />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
