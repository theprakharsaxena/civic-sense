"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navLinks = [
        { label: "Home", href: "/" },
        { label: "Report Issue", href: "/report" },
        { label: "Issues Board", href: "/issues" },
        { label: "About", href: "#about" },
    ];

    return (
        <nav
            id="main-navbar"
            style={{
                position: "fixed",
                top: 0,
                left: 0,
                right: 0,
                zIndex: 1000,
                padding: scrolled ? "12px 24px" : "16px 24px",
                transition: "all 0.3s ease",
                background: scrolled
                    ? "rgba(10, 15, 26, 0.9)"
                    : "rgba(10, 15, 26, 0.4)",
                backdropFilter: "blur(20px)",
                WebkitBackdropFilter: "blur(20px)",
                borderBottom: scrolled
                    ? "1px solid rgba(148, 163, 184, 0.12)"
                    : "1px solid transparent",
            }}
        >
            <div
                style={{
                    maxWidth: 1280,
                    margin: "0 auto",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                }}
            >
                {/* Logo */}
                <Link
                    href="/"
                    style={{
                        textDecoration: "none",
                        display: "flex",
                        alignItems: "center",
                        gap: 10,
                    }}
                >
                    <div
                        style={{
                            width: 38,
                            height: 38,
                            borderRadius: "50%",
                            background: "linear-gradient(135deg, #10b981, #3b82f6)",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            fontSize: "1.2rem",
                            boxShadow: "0 0 20px rgba(16, 185, 129, 0.3)",
                        }}
                    >
                        🏛️
                    </div>
                    <span
                        style={{
                            fontSize: "1.3rem",
                            fontWeight: 800,
                            letterSpacing: "-0.02em",
                        }}
                        className="gradient-text"
                    >
                        CivicPulse
                    </span>
                </Link>

                {/* Desktop Links */}
                <div
                    style={{
                        display: "flex",
                        alignItems: "center",
                        gap: 32,
                    }}
                    className="desktop-nav"
                >
                    {navLinks.map((link) => (
                        <Link
                            key={link.label}
                            href={link.href}
                            style={{
                                textDecoration: "none",
                                color: "var(--text-secondary)",
                                fontSize: "0.9rem",
                                fontWeight: 500,
                                transition: "color 0.3s ease",
                                position: "relative",
                            }}
                            onMouseEnter={(e) =>
                                (e.currentTarget.style.color = "var(--accent-primary)")
                            }
                            onMouseLeave={(e) =>
                                (e.currentTarget.style.color = "var(--text-secondary)")
                            }
                        >
                            {link.label}
                        </Link>
                    ))}
                    <Link href="/report" className="btn-primary" style={{ padding: "10px 22px", fontSize: "0.85rem" }}>
                        🚨 Report Now
                    </Link>
                </div>

                {/* Mobile Hamburger */}
                <button
                    className="mobile-hamburger"
                    onClick={() => setMobileOpen(!mobileOpen)}
                    aria-label="Toggle menu"
                    style={{
                        display: "none",
                        background: "none",
                        border: "none",
                        cursor: "pointer",
                        padding: 8,
                    }}
                >
                    <div
                        style={{
                            width: 24,
                            height: 2,
                            background: "var(--text-primary)",
                            marginBottom: 6,
                            borderRadius: 2,
                            transition: "all 0.3s ease",
                            transform: mobileOpen ? "rotate(45deg) translate(5px, 6px)" : "none",
                        }}
                    />
                    <div
                        style={{
                            width: 24,
                            height: 2,
                            background: "var(--text-primary)",
                            marginBottom: 6,
                            borderRadius: 2,
                            opacity: mobileOpen ? 0 : 1,
                            transition: "all 0.3s ease",
                        }}
                    />
                    <div
                        style={{
                            width: 24,
                            height: 2,
                            background: "var(--text-primary)",
                            borderRadius: 2,
                            transition: "all 0.3s ease",
                            transform: mobileOpen ? "rotate(-45deg) translate(5px, -6px)" : "none",
                        }}
                    />
                </button>
            </div>

            {/* Mobile Menu */}
            {mobileOpen && (
                <div
                    className="mobile-menu"
                    style={{
                        padding: "20px 0",
                        display: "flex",
                        flexDirection: "column",
                        gap: 16,
                        maxWidth: 1280,
                        margin: "0 auto",
                    }}
                >
                    {navLinks.map((link) => (
                        <Link
                            key={link.label}
                            href={link.href}
                            onClick={() => setMobileOpen(false)}
                            style={{
                                textDecoration: "none",
                                color: "var(--text-secondary)",
                                fontSize: "1rem",
                                fontWeight: 500,
                                padding: "8px 0",
                            }}
                        >
                            {link.label}
                        </Link>
                    ))}
                    <Link href="/report" className="btn-primary" onClick={() => setMobileOpen(false)} style={{ textAlign: "center", justifyContent: "center" }}>
                        🚨 Report Now
                    </Link>
                </div>
            )}

            <style jsx global>{`
        @media (max-width: 768px) {
          .desktop-nav {
            display: none !important;
          }
          .mobile-hamburger {
            display: block !important;
          }
        }
      `}</style>
        </nav>
    );
}
