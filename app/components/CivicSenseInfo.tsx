"use client";

import { useState } from "react";

const categories = [
    {
        icon: "🤝",
        title: "Public Conduct & Etiquette",
        color: "#10b981",
        description:
            "Respectful behavior in shared spaces — offering seats to elderly, maintaining silence in hospitals, queuing patiently, and being considerate to others.",
        examples: ["Queue jumping", "Loud music in public", "Spitting in public", "Rude behavior to service workers"],
    },
    {
        icon: "🌿",
        title: "Environmental Responsibility",
        color: "#06d6a0",
        description:
            "Keeping our environment clean and green — proper waste disposal, preventing pollution, conserving water & electricity, and planting trees.",
        examples: ["Littering", "Illegal dumping", "Water wastage", "Burning waste openly"],
    },
    {
        icon: "🚦",
        title: "Traffic & Road Safety",
        color: "#3b82f6",
        description:
            "Following traffic rules for everyone's safety — obeying signals, using crosswalks, wearing helmets/seatbelts, and not honking unnecessarily.",
        examples: ["Signal jumping", "Wrong-side driving", "No helmet/seatbelt", "Blocking emergency vehicles"],
    },
    {
        icon: "🏛️",
        title: "Public Property Care",
        color: "#8b5cf6",
        description:
            "Treating shared infrastructure with respect — parks, bus stops, monuments, public washrooms. Report vandalism, broken lights, and damaged roads.",
        examples: ["Vandalism & graffiti", "Broken streetlights", "Potholes", "Damaged park equipment"],
    },
    {
        icon: "🗳️",
        title: "Community Engagement",
        color: "#f59e0b",
        description:
            "Active participation in your community — voting, volunteering, attending local meetings, and engaging with local governance.",
        examples: ["Low voter turnout", "Inactive neighborhood watch", "No community clean-ups", "Ignoring local issues"],
    },
    {
        icon: "💻",
        title: "Digital Civic Sense",
        color: "#ec4899",
        description:
            "Responsible online behavior — not spreading misinformation, avoiding cyberbullying, respecting privacy, and being a positive digital citizen.",
        examples: ["Fake news sharing", "Cyberbullying", "Online harassment", "Privacy violations"],
    },
];

export default function CivicSenseInfo() {
    const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

    return (
        <section id="civic-sense" className="section">
            <div style={{ textAlign: "center", marginBottom: 56 }}>
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
                    📖 LEARN
                </div>
                <h2 className="section-title" style={{ textAlign: "center" }}>
                    What is <span className="gradient-text">Civic Sense</span>?
                </h2>
                <p className="section-subtitle" style={{ margin: "0 auto 16px", textAlign: "center" }}>
                    Civic sense is the responsibility of each citizen towards their community — a set of ethics, values, and behaviors that make society harmonious, safe, and livable.
                </p>
            </div>

            <div
                style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fill, minmax(350px, 1fr))",
                    gap: 20,
                }}
            >
                {categories.map((cat, i) => (
                    <div
                        key={cat.title}
                        className="card"
                        style={{
                            cursor: "pointer",
                            borderLeft: `3px solid ${cat.color}`,
                            animationDelay: `${i * 0.1}s`,
                        }}
                        onClick={() => setExpandedIndex(expandedIndex === i ? null : i)}
                    >
                        <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 12 }}>
                            <div
                                style={{
                                    width: 46,
                                    height: 46,
                                    borderRadius: "var(--radius-md)",
                                    background: `${cat.color}15`,
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    fontSize: "1.5rem",
                                    flexShrink: 0,
                                }}
                            >
                                {cat.icon}
                            </div>
                            <h3 style={{ fontWeight: 700, fontSize: "1.05rem" }}>{cat.title}</h3>
                        </div>

                        <p style={{ color: "var(--text-secondary)", fontSize: "0.9rem", lineHeight: 1.7 }}>
                            {cat.description}
                        </p>

                        {expandedIndex === i && (
                            <div
                                style={{
                                    marginTop: 16,
                                    paddingTop: 16,
                                    borderTop: "1px solid var(--border-color)",
                                }}
                                className="animate-fade-in"
                            >
                                <p style={{ fontSize: "0.8rem", fontWeight: 600, color: cat.color, marginBottom: 10, textTransform: "uppercase", letterSpacing: "0.05em" }}>
                                    Common Issues to Report:
                                </p>
                                <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                                    {cat.examples.map((ex) => (
                                        <span
                                            key={ex}
                                            style={{
                                                padding: "6px 14px",
                                                borderRadius: "var(--radius-full)",
                                                background: `${cat.color}12`,
                                                border: `1px solid ${cat.color}30`,
                                                fontSize: "0.8rem",
                                                color: "var(--text-secondary)",
                                            }}
                                        >
                                            {ex}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        )}

                        <div
                            style={{
                                marginTop: 14,
                                fontSize: "0.8rem",
                                color: cat.color,
                                fontWeight: 600,
                                display: "flex",
                                alignItems: "center",
                                gap: 6,
                            }}
                        >
                            {expandedIndex === i ? "Show less ▲" : "Learn more ▼"}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
