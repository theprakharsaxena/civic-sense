"use client";

import { useState, useEffect } from "react";

const tips = [
    {
        icon: "🗑️",
        title: "Carry a Small Bag",
        description:
            "Always carry a small bag for your waste. Never litter on roads or public spaces. If you can't find a dustbin, hold onto your trash until you do.",
        category: "Environment",
        color: "#06d6a0",
    },
    {
        icon: "🚦",
        title: "Follow Traffic Signals",
        description:
            "Always stop at red lights and use pedestrian crossings. A few seconds of impatience can cause accidents that affect lives forever.",
        category: "Traffic Safety",
        color: "#3b82f6",
    },
    {
        icon: "🔊",
        title: "Keep Noise Down",
        description:
            "Avoid playing loud music, honking unnecessarily, or talking loudly on phone calls in public transport, hospitals, and libraries.",
        category: "Public Conduct",
        color: "#10b981",
    },
    {
        icon: "💧",
        title: "Save Water",
        description:
            "Turn off taps when not in use, fix leaking pipes promptly, and avoid wasting water. Every drop counts for our future.",
        category: "Environment",
        color: "#06d6a0",
    },
    {
        icon: "🏛️",
        title: "Respect Public Property",
        description:
            "Treat buses, park benches, public walls, and monuments as your own. Report any vandalism you see instead of ignoring it.",
        category: "Public Property",
        color: "#8b5cf6",
    },
    {
        icon: "🗳️",
        title: "Exercise Your Vote",
        description:
            "Your vote is your voice. Research candidates, participate in local governance, and encourage others to vote in every election.",
        category: "Community",
        color: "#f59e0b",
    },
    {
        icon: "📱",
        title: "Think Before You Share",
        description:
            "Verify news before sharing on social media. Misinformation spreads faster than truth and can cause real harm to communities.",
        category: "Digital Civics",
        color: "#ec4899",
    },
    {
        icon: "🌳",
        title: "Plant & Protect Trees",
        description:
            "Plant a tree on special occasions. Protect existing greenery in your neighbourhood. Trees are our best defense against pollution.",
        category: "Environment",
        color: "#06d6a0",
    },
];

export default function CivicTips() {
    const [activeIndex, setActiveIndex] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setActiveIndex((prev) => (prev + 1) % tips.length);
        }, 5000);
        return () => clearInterval(timer);
    }, []);

    return (
        <section id="tips" className="section">
            <div style={{ textAlign: "center", marginBottom: 48 }}>
                <div
                    style={{
                        display: "inline-flex",
                        alignItems: "center",
                        gap: 8,
                        padding: "6px 16px",
                        borderRadius: "var(--radius-full)",
                        background: "rgba(16, 185, 129, 0.1)",
                        border: "1px solid rgba(16, 185, 129, 0.2)",
                        marginBottom: 16,
                        fontSize: "0.8rem",
                        color: "var(--accent-primary)",
                        fontWeight: 600,
                    }}
                >
                    💡 CIVIC TIPS
                </div>
                <h2 className="section-title" style={{ textAlign: "center" }}>
                    Daily <span className="gradient-text">Civic Tips</span>
                </h2>
                <p className="section-subtitle" style={{ margin: "0 auto", textAlign: "center" }}>
                    Small actions create big change. Here are practical tips to be a better citizen every day.
                </p>
            </div>

            {/* Featured tip */}
            <div
                className="card animate-fade-in"
                key={activeIndex}
                style={{
                    maxWidth: 700,
                    margin: "0 auto 36px",
                    padding: 36,
                    borderLeft: `4px solid ${tips[activeIndex].color}`,
                    textAlign: "center",
                }}
            >
                <div style={{ fontSize: "3rem", marginBottom: 16 }}>{tips[activeIndex].icon}</div>
                <h3 style={{ fontWeight: 700, fontSize: "1.3rem", marginBottom: 10 }}>
                    {tips[activeIndex].title}
                </h3>
                <p style={{ color: "var(--text-secondary)", fontSize: "1rem", lineHeight: 1.7, maxWidth: 520, margin: "0 auto" }}>
                    {tips[activeIndex].description}
                </p>
                <span
                    className="badge"
                    style={{
                        marginTop: 16,
                        background: `${tips[activeIndex].color}15`,
                        color: tips[activeIndex].color,
                    }}
                >
                    {tips[activeIndex].category}
                </span>
            </div>

            {/* Dot indicators */}
            <div style={{ display: "flex", justifyContent: "center", gap: 8, marginBottom: 40 }}>
                {tips.map((_, i) => (
                    <button
                        key={i}
                        onClick={() => setActiveIndex(i)}
                        style={{
                            width: activeIndex === i ? 24 : 8,
                            height: 8,
                            borderRadius: "var(--radius-full)",
                            background: activeIndex === i ? "var(--accent-primary)" : "var(--bg-card)",
                            border: "none",
                            cursor: "pointer",
                            transition: "all 0.3s ease",
                        }}
                    />
                ))}
            </div>

            {/* All tips grid */}
            <div
                style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
                    gap: 16,
                }}
            >
                {tips.map((tip, i) => (
                    <div
                        key={tip.title}
                        className="card"
                        style={{
                            padding: 20,
                            cursor: "pointer",
                            borderColor: activeIndex === i ? tip.color : undefined,
                            boxShadow: activeIndex === i ? `0 0 20px ${tip.color}20` : undefined,
                        }}
                        onClick={() => setActiveIndex(i)}
                    >
                        <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 8 }}>
                            <span style={{ fontSize: "1.5rem" }}>{tip.icon}</span>
                            <h4 style={{ fontWeight: 700, fontSize: "0.9rem" }}>{tip.title}</h4>
                        </div>
                        <p style={{ color: "var(--text-muted)", fontSize: "0.8rem", lineHeight: 1.6 }}>
                            {tip.description.substring(0, 80)}...
                        </p>
                    </div>
                ))}
            </div>
        </section>
    );
}
