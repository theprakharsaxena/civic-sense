"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function HeroSection() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setIsVisible(true);
    }, []);

    return (
        <section
            id="hero"
            style={{
                minHeight: "100vh",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                position: "relative",
                overflow: "hidden",
                padding: "120px 24px 80px",
            }}
        >
            {/* Animated background */}
            <div
                style={{
                    position: "absolute",
                    inset: 0,
                    background:
                        "radial-gradient(ellipse at 20% 50%, rgba(16, 185, 129, 0.08) 0%, transparent 50%), radial-gradient(ellipse at 80% 20%, rgba(59, 130, 246, 0.06) 0%, transparent 50%), radial-gradient(ellipse at 50% 80%, rgba(139, 92, 246, 0.04) 0%, transparent 50%)",
                    pointerEvents: "none",
                }}
            />

            {/* Floating particles */}
            {[...Array(6)].map((_, i) => (
                <div
                    key={i}
                    style={{
                        position: "absolute",
                        width: 4 + i * 2,
                        height: 4 + i * 2,
                        borderRadius: "50%",
                        background: `rgba(16, 185, 129, ${0.1 + i * 0.05})`,
                        top: `${15 + i * 14}%`,
                        left: `${10 + i * 15}%`,
                        animation: `float ${3 + i * 0.5}s ease-in-out infinite`,
                        animationDelay: `${i * 0.4}s`,
                    }}
                />
            ))}

            {/* Grid pattern */}
            <div
                style={{
                    position: "absolute",
                    inset: 0,
                    backgroundImage:
                        "linear-gradient(rgba(148,163,184,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(148,163,184,0.03) 1px, transparent 1px)",
                    backgroundSize: "60px 60px",
                    pointerEvents: "none",
                }}
            />

            <div
                style={{
                    position: "relative",
                    zIndex: 1,
                    textAlign: "center",
                    maxWidth: 800,
                    opacity: isVisible ? 1 : 0,
                    transform: isVisible ? "translateY(0)" : "translateY(40px)",
                    transition: "all 0.8s ease",
                }}
            >
                {/* Badge */}
                <div
                    style={{
                        display: "inline-flex",
                        alignItems: "center",
                        gap: 8,
                        padding: "8px 20px",
                        borderRadius: "var(--radius-full)",
                        background: "rgba(16, 185, 129, 0.1)",
                        border: "1px solid rgba(16, 185, 129, 0.2)",
                        marginBottom: 28,
                        fontSize: "0.85rem",
                        color: "var(--accent-tertiary)",
                        fontWeight: 600,
                    }}
                >
                    <span style={{ fontSize: "1rem" }}>🌍</span>
                    Building Better Communities Together
                </div>

                <h1
                    style={{
                        fontSize: "clamp(2.5rem, 6vw, 4.2rem)",
                        fontWeight: 900,
                        lineHeight: 1.1,
                        letterSpacing: "-0.03em",
                        marginBottom: 24,
                    }}
                >
                    Your City.{" "}
                    <span className="gradient-text">Your Voice.</span>
                    <br />
                    Your{" "}
                    <span
                        style={{
                            position: "relative",
                            display: "inline-block",
                        }}
                    >
                        Impact
                        <svg
                            viewBox="0 0 200 12"
                            style={{
                                position: "absolute",
                                bottom: -4,
                                left: 0,
                                width: "100%",
                                height: 12,
                            }}
                        >
                            <path
                                d="M2 8 Q 50 2, 100 6 Q 150 10, 198 4"
                                stroke="url(#underline-gradient)"
                                strokeWidth="3"
                                fill="none"
                                strokeLinecap="round"
                            />
                            <defs>
                                <linearGradient id="underline-gradient">
                                    <stop offset="0%" stopColor="#10b981" />
                                    <stop offset="100%" stopColor="#3b82f6" />
                                </linearGradient>
                            </defs>
                        </svg>
                    </span>
                    .
                </h1>

                <p
                    style={{
                        fontSize: "1.2rem",
                        color: "var(--text-secondary)",
                        maxWidth: 600,
                        margin: "0 auto 40px",
                        lineHeight: 1.7,
                    }}
                >
                    Report civic issues, learn about civic sense, and join a community of
                    citizens making their neighborhoods safer, cleaner, and better — all
                    in one platform.
                </p>

                <div
                    style={{
                        display: "flex",
                        gap: 16,
                        justifyContent: "center",
                        flexWrap: "wrap",
                    }}
                >
                    <Link href="/report" className="btn-primary" style={{ padding: "14px 32px", fontSize: "1rem" }}>
                        🚨 Report an Issue
                    </Link>
                    <Link href="#civic-sense" className="btn-secondary" style={{ padding: "14px 32px", fontSize: "1rem" }}>
                        📚 Learn Civic Sense
                    </Link>
                </div>

                {/* Stats row */}
                <div
                    style={{
                        display: "flex",
                        justifyContent: "center",
                        gap: 48,
                        marginTop: 56,
                        flexWrap: "wrap",
                    }}
                >
                    {[
                        { value: "2,847", label: "Issues Reported" },
                        { value: "1,523", label: "Issues Resolved" },
                        { value: "12,400+", label: "Active Citizens" },
                    ].map((stat) => (
                        <div key={stat.label} style={{ textAlign: "center" }}>
                            <div
                                className="gradient-text"
                                style={{ fontSize: "1.8rem", fontWeight: 800 }}
                            >
                                {stat.value}
                            </div>
                            <div
                                style={{
                                    fontSize: "0.85rem",
                                    color: "var(--text-muted)",
                                    marginTop: 4,
                                }}
                            >
                                {stat.label}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
