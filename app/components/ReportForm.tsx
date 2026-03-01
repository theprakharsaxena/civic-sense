"use client";

import { useState, useRef } from "react";

const issueCategories = [
    "Public Conduct",
    "Environment",
    "Traffic Safety",
    "Public Property",
    "Community",
    "Digital Civics",
];

const severityLevels = [
    { label: "Low", color: "#34d399", icon: "🟢" },
    { label: "Medium", color: "#fbbf24", icon: "🟡" },
    { label: "High", color: "#f87171", icon: "🔴" },
    { label: "Critical", color: "#f472b6", icon: "🚨" },
];

interface ReportFormProps {
    onSubmit?: () => void;
    fullPage?: boolean;
}

export default function ReportForm({ onSubmit, fullPage = false }: ReportFormProps) {
    const [step, setStep] = useState(1);
    const [formData, setFormData] = useState({
        category: "",
        title: "",
        description: "",
        location: "",
        severity: "",
        photo: null as string | null,
        reporterName: "",
    });
    const [submitted, setSubmitted] = useState(false);
    const fileInputRef = useRef<HTMLInputElement>(null);

    const handlePhotoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setFormData({ ...formData, photo: reader.result as string });
            };
            reader.readAsDataURL(file);
        }
    };

    const handleSubmit = () => {
        const issues = JSON.parse(localStorage.getItem("civicpulse_issues") || "[]");
        const newIssue = {
            id: Date.now().toString(),
            ...formData,
            timestamp: new Date().toISOString(),
            status: "Open",
            upvotes: 0,
            comments: [],
        };
        issues.unshift(newIssue);
        localStorage.setItem("civicpulse_issues", JSON.stringify(issues));
        setSubmitted(true);
        onSubmit?.();
    };

    if (submitted) {
        return (
            <section className="section" style={{ textAlign: "center" }}>
                <div
                    style={{
                        maxWidth: 500,
                        margin: "0 auto",
                        padding: 48,
                        background: "var(--gradient-card)",
                        borderRadius: "var(--radius-xl)",
                        border: "1px solid var(--border-glow)",
                    }}
                >
                    <div style={{ fontSize: "4rem", marginBottom: 20 }}>✅</div>
                    <h2 style={{ fontSize: "1.8rem", fontWeight: 800, marginBottom: 12 }}>
                        Issue Reported!
                    </h2>
                    <p style={{ color: "var(--text-secondary)", marginBottom: 24 }}>
                        Thank you for being a responsible citizen. Your report has been saved
                        and is now visible on the Issues Board.
                    </p>
                    <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
                        <button
                            className="btn-primary"
                            onClick={() => {
                                setSubmitted(false);
                                setStep(1);
                                setFormData({
                                    category: "",
                                    title: "",
                                    description: "",
                                    location: "",
                                    severity: "",
                                    photo: null,
                                    reporterName: "",
                                });
                            }}
                        >
                            Report Another
                        </button>
                        <a href="/issues" className="btn-secondary">
                            View Issues Board →
                        </a>
                    </div>
                </div>
            </section>
        );
    }

    return (
        <section id="report-issue" className="section">
            {!fullPage && (
                <div style={{ textAlign: "center", marginBottom: 48 }}>
                    <div
                        style={{
                            display: "inline-flex",
                            alignItems: "center",
                            gap: 8,
                            padding: "6px 16px",
                            borderRadius: "var(--radius-full)",
                            background: "rgba(239, 68, 68, 0.1)",
                            border: "1px solid rgba(239, 68, 68, 0.2)",
                            marginBottom: 16,
                            fontSize: "0.8rem",
                            color: "var(--accent-red)",
                            fontWeight: 600,
                        }}
                    >
                        🚨 REPORT
                    </div>
                    <h2 className="section-title" style={{ textAlign: "center" }}>
                        Report a <span className="gradient-text">Civic Issue</span>
                    </h2>
                    <p className="section-subtitle" style={{ margin: "0 auto", textAlign: "center" }}>
                        Spotted a problem in your neighborhood? Report it here and help make your community better.
                    </p>
                </div>
            )}

            <div
                style={{
                    maxWidth: 680,
                    margin: "0 auto",
                    background: "var(--gradient-card)",
                    borderRadius: "var(--radius-xl)",
                    border: "1px solid var(--border-color)",
                    overflow: "hidden",
                }}
            >
                {/* Progress bar */}
                <div style={{ display: "flex", background: "var(--bg-secondary)" }}>
                    {[1, 2, 3].map((s) => (
                        <div
                            key={s}
                            style={{
                                flex: 1,
                                height: 4,
                                background: step >= s ? "var(--accent-primary)" : "var(--bg-card)",
                                transition: "background 0.4s ease",
                            }}
                        />
                    ))}
                </div>

                <div style={{ padding: "32px 32px 36px" }}>
                    {/* Step indicators */}
                    <div style={{ display: "flex", justifyContent: "center", gap: 24, marginBottom: 32 }}>
                        {["Category & Title", "Details & Photo", "Location & Submit"].map(
                            (label, i) => (
                                <div
                                    key={label}
                                    style={{
                                        display: "flex",
                                        alignItems: "center",
                                        gap: 8,
                                        fontSize: "0.8rem",
                                        color: step > i + 1 ? "var(--accent-primary)" : step === i + 1 ? "var(--text-primary)" : "var(--text-muted)",
                                        fontWeight: step === i + 1 ? 700 : 400,
                                    }}
                                >
                                    <div
                                        style={{
                                            width: 26,
                                            height: 26,
                                            borderRadius: "50%",
                                            background: step > i + 1 ? "var(--accent-primary)" : step === i + 1 ? "rgba(16,185,129,0.15)" : "var(--bg-secondary)",
                                            border: step === i + 1 ? "2px solid var(--accent-primary)" : "1px solid var(--border-color)",
                                            display: "flex",
                                            alignItems: "center",
                                            justifyContent: "center",
                                            fontSize: "0.7rem",
                                            fontWeight: 700,
                                            color: step > i + 1 ? "var(--bg-primary)" : "inherit",
                                        }}
                                    >
                                        {step > i + 1 ? "✓" : i + 1}
                                    </div>
                                    <span className="step-label">{label}</span>
                                </div>
                            )
                        )}
                    </div>

                    {/* Step 1 */}
                    {step === 1 && (
                        <div className="animate-fade-in">
                            <label style={{ display: "block", marginBottom: 6, fontSize: "0.85rem", fontWeight: 600, color: "var(--text-secondary)" }}>
                                Category *
                            </label>
                            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(140px, 1fr))", gap: 10, marginBottom: 24 }}>
                                {issueCategories.map((cat) => (
                                    <button
                                        key={cat}
                                        onClick={() => setFormData({ ...formData, category: cat })}
                                        style={{
                                            padding: "12px 16px",
                                            borderRadius: "var(--radius-md)",
                                            background: formData.category === cat ? "rgba(16,185,129,0.15)" : "var(--bg-secondary)",
                                            border: formData.category === cat ? "2px solid var(--accent-primary)" : "1px solid var(--border-color)",
                                            color: formData.category === cat ? "var(--accent-primary)" : "var(--text-secondary)",
                                            cursor: "pointer",
                                            fontSize: "0.85rem",
                                            fontWeight: 600,
                                            transition: "all 0.2s",
                                            fontFamily: "inherit",
                                        }}
                                    >
                                        {cat}
                                    </button>
                                ))}
                            </div>

                            <label style={{ display: "block", marginBottom: 6, fontSize: "0.85rem", fontWeight: 600, color: "var(--text-secondary)" }}>
                                Issue Title *
                            </label>
                            <input
                                className="input-field"
                                placeholder="e.g. Large pothole on Main Street"
                                value={formData.title}
                                onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                                style={{ marginBottom: 24 }}
                            />

                            <label style={{ display: "block", marginBottom: 6, fontSize: "0.85rem", fontWeight: 600, color: "var(--text-secondary)" }}>
                                Your Name
                            </label>
                            <input
                                className="input-field"
                                placeholder="Anonymous (optional)"
                                value={formData.reporterName}
                                onChange={(e) => setFormData({ ...formData, reporterName: e.target.value })}
                            />
                        </div>
                    )}

                    {/* Step 2 */}
                    {step === 2 && (
                        <div className="animate-fade-in">
                            <label style={{ display: "block", marginBottom: 6, fontSize: "0.85rem", fontWeight: 600, color: "var(--text-secondary)" }}>
                                Description *
                            </label>
                            <textarea
                                className="input-field"
                                placeholder="Describe the issue in detail — what you saw, how severe it is, and any other relevant information..."
                                value={formData.description}
                                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                                style={{ marginBottom: 24 }}
                            />

                            <label style={{ display: "block", marginBottom: 6, fontSize: "0.85rem", fontWeight: 600, color: "var(--text-secondary)" }}>
                                Severity Level *
                            </label>
                            <div style={{ display: "flex", gap: 10, marginBottom: 24, flexWrap: "wrap" }}>
                                {severityLevels.map((sev) => (
                                    <button
                                        key={sev.label}
                                        onClick={() => setFormData({ ...formData, severity: sev.label })}
                                        style={{
                                            padding: "10px 20px",
                                            borderRadius: "var(--radius-full)",
                                            background: formData.severity === sev.label ? `${sev.color}20` : "var(--bg-secondary)",
                                            border: formData.severity === sev.label ? `2px solid ${sev.color}` : "1px solid var(--border-color)",
                                            color: formData.severity === sev.label ? sev.color : "var(--text-secondary)",
                                            cursor: "pointer",
                                            fontSize: "0.85rem",
                                            fontWeight: 600,
                                            fontFamily: "inherit",
                                            display: "flex",
                                            alignItems: "center",
                                            gap: 6,
                                            transition: "all 0.2s",
                                        }}
                                    >
                                        {sev.icon} {sev.label}
                                    </button>
                                ))}
                            </div>

                            <label style={{ display: "block", marginBottom: 6, fontSize: "0.85rem", fontWeight: 600, color: "var(--text-secondary)" }}>
                                Upload Photo
                            </label>
                            <div
                                onClick={() => fileInputRef.current?.click()}
                                style={{
                                    border: "2px dashed var(--border-color)",
                                    borderRadius: "var(--radius-md)",
                                    padding: formData.photo ? 0 : "40px 20px",
                                    textAlign: "center",
                                    cursor: "pointer",
                                    transition: "all 0.3s",
                                    overflow: "hidden",
                                    position: "relative",
                                }}
                                onMouseEnter={(e) => (e.currentTarget.style.borderColor = "var(--accent-primary)")}
                                onMouseLeave={(e) => (e.currentTarget.style.borderColor = "var(--border-color)")}
                            >
                                {formData.photo ? (
                                    <img
                                        src={formData.photo}
                                        alt="Preview"
                                        style={{ width: "100%", maxHeight: 200, objectFit: "cover", borderRadius: "var(--radius-md)" }}
                                    />
                                ) : (
                                    <>
                                        <div style={{ fontSize: "2rem", marginBottom: 8 }}>📷</div>
                                        <p style={{ color: "var(--text-muted)", fontSize: "0.85rem" }}>
                                            Click to upload a photo of the issue
                                        </p>
                                    </>
                                )}
                                <input
                                    ref={fileInputRef}
                                    type="file"
                                    accept="image/*"
                                    onChange={handlePhotoUpload}
                                    style={{ display: "none" }}
                                />
                            </div>
                        </div>
                    )}

                    {/* Step 3 */}
                    {step === 3 && (
                        <div className="animate-fade-in">
                            <label style={{ display: "block", marginBottom: 6, fontSize: "0.85rem", fontWeight: 600, color: "var(--text-secondary)" }}>
                                Location / Address *
                            </label>
                            <input
                                className="input-field"
                                placeholder="e.g. 123 Main Street, Downtown, City"
                                value={formData.location}
                                onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                                style={{ marginBottom: 32 }}
                            />

                            {/* Review summary */}
                            <div
                                style={{
                                    background: "var(--bg-secondary)",
                                    borderRadius: "var(--radius-md)",
                                    padding: 20,
                                    marginBottom: 24,
                                    border: "1px solid var(--border-color)",
                                }}
                            >
                                <h4 style={{ fontWeight: 700, marginBottom: 14, fontSize: "0.9rem", color: "var(--accent-primary)" }}>
                                    📋 Review Your Report
                                </h4>
                                <div style={{ display: "grid", gap: 10, fontSize: "0.85rem" }}>
                                    <div style={{ display: "flex", gap: 8 }}>
                                        <span style={{ color: "var(--text-muted)", minWidth: 90 }}>Category:</span>
                                        <span style={{ fontWeight: 600 }}>{formData.category || "—"}</span>
                                    </div>
                                    <div style={{ display: "flex", gap: 8 }}>
                                        <span style={{ color: "var(--text-muted)", minWidth: 90 }}>Title:</span>
                                        <span style={{ fontWeight: 600 }}>{formData.title || "—"}</span>
                                    </div>
                                    <div style={{ display: "flex", gap: 8 }}>
                                        <span style={{ color: "var(--text-muted)", minWidth: 90 }}>Severity:</span>
                                        <span style={{ fontWeight: 600 }}>{formData.severity || "—"}</span>
                                    </div>
                                    <div style={{ display: "flex", gap: 8 }}>
                                        <span style={{ color: "var(--text-muted)", minWidth: 90 }}>Location:</span>
                                        <span style={{ fontWeight: 600 }}>{formData.location || "—"}</span>
                                    </div>
                                    <div style={{ display: "flex", gap: 8 }}>
                                        <span style={{ color: "var(--text-muted)", minWidth: 90 }}>Reporter:</span>
                                        <span style={{ fontWeight: 600 }}>{formData.reporterName || "Anonymous"}</span>
                                    </div>
                                    <div style={{ display: "flex", gap: 8 }}>
                                        <span style={{ color: "var(--text-muted)", minWidth: 90 }}>Photo:</span>
                                        <span style={{ fontWeight: 600 }}>{formData.photo ? "✅ Attached" : "None"}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}

                    {/* Navigation buttons */}
                    <div style={{ display: "flex", justifyContent: "space-between", marginTop: 28, gap: 12 }}>
                        {step > 1 ? (
                            <button className="btn-secondary" onClick={() => setStep(step - 1)}>
                                ← Back
                            </button>
                        ) : (
                            <div />
                        )}

                        {step < 3 ? (
                            <button
                                className="btn-primary"
                                onClick={() => setStep(step + 1)}
                                disabled={
                                    (step === 1 && (!formData.category || !formData.title)) ||
                                    (step === 2 && (!formData.description || !formData.severity))
                                }
                                style={{
                                    opacity:
                                        (step === 1 && (!formData.category || !formData.title)) ||
                                            (step === 2 && (!formData.description || !formData.severity))
                                            ? 0.5
                                            : 1,
                                }}
                            >
                                Next →
                            </button>
                        ) : (
                            <button
                                className="btn-primary"
                                onClick={handleSubmit}
                                disabled={!formData.location}
                                style={{
                                    opacity: !formData.location ? 0.5 : 1,
                                    padding: "12px 32px",
                                }}
                            >
                                🚀 Submit Report
                            </button>
                        )}
                    </div>
                </div>
            </div>

            <style jsx global>{`
        @media (max-width: 640px) {
          .step-label {
            display: none;
          }
        }
      `}</style>
        </section>
    );
}
