"use client";

import Link from "next/link";

export default function Footer() {
    return (
        <footer
            style={{
                background: "var(--bg-secondary)",
                borderTop: "1px solid var(--border-color)",
                padding: "60px 24px 30px",
            }}
        >
            <div
                style={{
                    maxWidth: 1280,
                    margin: "0 auto",
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
                    gap: 40,
                }}
            >
                {/* Brand */}
                <div>
                    <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 16 }}>
                        <div
                            style={{
                                width: 36,
                                height: 36,
                                borderRadius: "50%",
                                background: "linear-gradient(135deg, #10b981, #3b82f6)",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                fontSize: "1.1rem",
                            }}
                        >
                            🏛️
                        </div>
                        <span className="gradient-text" style={{ fontSize: "1.2rem", fontWeight: 800 }}>
                            CivicPulse
                        </span>
                    </div>
                    <p style={{ color: "var(--text-muted)", fontSize: "0.9rem", lineHeight: 1.7 }}>
                        Empowering citizens to build better communities through awareness, education, and collective action.
                    </p>
                </div>

                {/* Quick Links */}
                <div>
                    <h4 style={{ color: "var(--text-primary)", fontWeight: 700, marginBottom: 16, fontSize: "0.95rem" }}>
                        Quick Links
                    </h4>
                    {[
                        { label: "Home", href: "/" },
                        { label: "Report Issue", href: "/report" },
                        { label: "Issues Board", href: "/issues" },
                        { label: "About Civic Sense", href: "#civic-sense" },
                    ].map((l) => (
                        <Link
                            key={l.label}
                            href={l.href}
                            style={{
                                display: "block",
                                color: "var(--text-muted)",
                                textDecoration: "none",
                                fontSize: "0.9rem",
                                padding: "6px 0",
                                transition: "color 0.3s",
                            }}
                            onMouseEnter={(e: React.MouseEvent<HTMLAnchorElement>) =>
                                (e.currentTarget.style.color = "var(--accent-primary)")
                            }
                            onMouseLeave={(e: React.MouseEvent<HTMLAnchorElement>) =>
                                (e.currentTarget.style.color = "var(--text-muted)")
                            }
                        >
                            {l.label}
                        </Link>
                    ))}
                </div>

                {/* Civic Categories */}
                <div>
                    <h4 style={{ color: "var(--text-primary)", fontWeight: 700, marginBottom: 16, fontSize: "0.95rem" }}>
                        Civic Categories
                    </h4>
                    {["Public Conduct", "Environment", "Traffic Safety", "Public Property", "Community", "Digital Civics"].map(
                        (c) => (
                            <p
                                key={c}
                                style={{
                                    color: "var(--text-muted)",
                                    fontSize: "0.9rem",
                                    padding: "6px 0",
                                }}
                            >
                                {c}
                            </p>
                        )
                    )}
                </div>

                {/* Contact */}
                <div>
                    <h4 style={{ color: "var(--text-primary)", fontWeight: 700, marginBottom: 16, fontSize: "0.95rem" }}>
                        Stay Connected
                    </h4>
                    <p style={{ color: "var(--text-muted)", fontSize: "0.9rem", marginBottom: 12 }}>
                        Join the movement for better civic sense.
                    </p>
                    <div style={{ display: "flex", gap: 12 }}>
                        {["𝕏", "📘", "📸", "🔗"].map((icon, i) => (
                            <div
                                key={i}
                                style={{
                                    width: 38,
                                    height: 38,
                                    borderRadius: "50%",
                                    background: "var(--bg-card)",
                                    border: "1px solid var(--border-color)",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    cursor: "pointer",
                                    transition: "all 0.3s",
                                    fontSize: "0.9rem",
                                }}
                            >
                                {icon}
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Bottom bar */}
            <div
                style={{
                    maxWidth: 1280,
                    margin: "40px auto 0",
                    paddingTop: 24,
                    borderTop: "1px solid var(--border-color)",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    flexWrap: "wrap",
                    gap: 12,
                }}
            >
                <p style={{ color: "var(--text-muted)", fontSize: "0.8rem" }}>
                    © 2026 CivicPulse. Building better communities together.
                </p>
                <p style={{ color: "var(--text-muted)", fontSize: "0.8rem" }}>
                    Made with 💚 for civic-minded citizens
                </p>
            </div>
        </footer>
    );
}
