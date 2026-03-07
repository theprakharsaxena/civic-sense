"use client";

import { useState } from "react";
import Link from "next/link";

export default function ReportForm({ fullPage = false }: { fullPage?: boolean }) {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    title: "",
    category: "Roads & Sidewalks",
    location: "",
    description: "",
    reporterName: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    // simulate network
    setTimeout(() => {
      // save to local storage so it shows up
      const issues = JSON.parse(localStorage.getItem("civicpulse_issues") || "[]");
      const newIssue = {
        id: Date.now().toString(),
        ...formData,
        status: "Open",
        date: "Just now",
        author: formData.reporterName || "Anonymous"
      };
      issues.unshift(newIssue);
      localStorage.setItem("civicpulse_issues", JSON.stringify(issues));

      setLoading(false);
      setSubmitted(true);
    }, 800);
  };

  if (submitted) {
    return (
      <div className="max-w-[600px] mx-auto py-24 px-6 text-center">
        <div className="w-12 h-12 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4 text-xl">
          ✓
        </div>
        <h2 className="text-2xl font-semibold mb-2 text-stone-900">Report submitted</h2>
        <p className="text-stone-600 mb-8 max-w-[400px] mx-auto">
          Thanks for letting us know. We've recorded the issue and it will appear on the recent reports board.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button 
            onClick={() => {
              setSubmitted(false);
              setFormData({ title: "", category: "Roads & Sidewalks", location: "", description: "", reporterName: "" });
            }}
            className="text-sky-600 font-medium hover:underline text-sm px-4 py-2"
          >
            Submit another report
          </button>
          <Link href="/issues" className="bg-stone-100 text-stone-700 px-4 py-2 rounded-md font-medium text-sm hover:bg-stone-200 transition">
            View recent reports
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-[600px] mx-auto py-12 px-6">
      {!fullPage && <h2 className="text-2xl font-semibold mb-8 text-stone-900">Report an issue</h2>}
      
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-stone-900 mb-1">What's the issue?</label>
          <input 
            required
            type="text" 
            value={formData.title}
            onChange={(e) => setFormData({...formData, title: e.target.value})}
            placeholder="Brief title, e.g. Pothole on Main St" 
            className="w-full border border-stone-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-sky-500"
          />
        </div>

        <div>
           <label className="block text-sm font-medium text-stone-900 mb-1">Category</label>
           <select 
             className="w-full border border-stone-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-sky-500 bg-white"
             value={formData.category}
             onChange={(e) => setFormData({...formData, category: e.target.value})}
           >
             <option>Roads & Sidewalks</option>
             <option>Sanitation & Trash</option>
             <option>Parks & Public Spaces</option>
             <option>Streetlights & Signs</option>
             <option>Other</option>
           </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-stone-900 mb-1">Location</label>
          <input 
            required
            type="text" 
            value={formData.location}
            onChange={(e) => setFormData({...formData, location: e.target.value})}
            placeholder="Street address or nearest intersection" 
            className="w-full border border-stone-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-sky-500"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-stone-900 mb-1">More details</label>
          <textarea 
            required
            rows={4}
            value={formData.description}
            onChange={(e) => setFormData({...formData, description: e.target.value})}
            className="w-full border border-stone-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-sky-500"
            placeholder="Any other helpful information..."
          ></textarea>
        </div>

        <div className="border-t border-stone-200 mt-6 pt-6 pt-6">
          <label className="block text-sm font-medium text-stone-900 mb-1">Your Name (optional)</label>
          <input 
            type="text" 
            value={formData.reporterName}
            onChange={(e) => setFormData({...formData, reporterName: e.target.value})}
            placeholder="Anonymous" 
            className="w-full border border-stone-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-sky-500"
          />
        </div>

        <div className="pt-2">
          <button 
            type="submit" 
            disabled={loading}
            className="w-full bg-sky-600 text-white rounded-md py-2.5 font-medium hover:bg-sky-700 transition disabled:opacity-70 disabled:cursor-not-allowed"
          >
            {loading ? "Submitting..." : "Submit report"}
          </button>
        </div>
      </form>
    </div>
  );
}
