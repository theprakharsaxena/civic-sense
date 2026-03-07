"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function IssuesFeed({ fullPage = false }: { fullPage?: boolean }) {
  const [issues, setIssues] = useState<any[]>([]);
  const [filter, setFilter] = useState("All");
  const [upvotedIds, setUpvotedIds] = useState<Set<string>>(new Set());

  useEffect(() => {
    const initialData = [
      {
        id: "1",
        title: "Big pothole forming on Elm St",
        description: "Right in front of the bakery, there's a pothole that's getting pretty deep. Hard to avoid when cars are parked on the other side.",
        location: "Elm St, near 5th Ave",
        category: "Roads & Sidewalks",
        status: "Open",
        date: "2 days ago",
        author: "Sarah M.",
        upvotes: 12
      },
      {
        id: "2",
        title: "Streetlight out",
        description: "The streetlight on the corner has been completely dark for a week.",
        location: "Corner of Maple and Oak",
        category: "Streetlights & Signs",
        status: "Fixed",
        date: "1 week ago",
        author: "Dave",
        upvotes: 5
      },
      {
        id: "3",
        title: "Trash bags piled up next to the park bin",
        description: "Looks like someone dumped their house trash here over the weekend. The bin is full and there are bags piled next to it.",
        location: "North entrance of City Park",
        category: "Sanitation & Trash",
        status: "Open",
        date: "Just now",
        author: "Anonymous",
        upvotes: 1
      }
    ];
    
    try {
      const stored = JSON.parse(localStorage.getItem("civicpulse_issues") || "[]");
      setIssues([...stored, ...initialData]);
      const storedUpvotes = JSON.parse(localStorage.getItem("civicpulse_upvotes") || "[]");
      setUpvotedIds(new Set(storedUpvotes));
    } catch {
      setIssues(initialData);
    }
  }, []);

  const handleUpvote = (id: string) => {
    if (upvotedIds.has(id)) return;
    
    const newUpvoted = new Set(upvotedIds);
    newUpvoted.add(id);
    setUpvotedIds(newUpvoted);
    localStorage.setItem("civicpulse_upvotes", JSON.stringify(Array.from(newUpvoted)));

    setIssues(issues.map(issue => 
      issue.id === id ? { ...issue, upvotes: (issue.upvotes || 0) + 1 } : issue
    ));
  };

  const filtered = filter === "All" ? issues : issues.filter(i => i.category === filter);
  const display = fullPage ? filtered : filtered.slice(0, 3);

  const categories = ["All", "Roads & Sidewalks", "Sanitation & Trash", "Parks & Public Spaces", "Streetlights & Signs", "Other"];

  return (
    <div className={`max-w-[800px] mx-auto py-16 px-6 md:px-8 ${fullPage ? "" : "border-t border-stone-200"}`}>
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end mb-8 gap-4">
        <div>
          <h2 className="text-2xl font-semibold text-stone-900">Recent reports</h2>
          {!fullPage && (
            <Link href="/issues" className="text-sm font-medium text-sky-600 hover:text-sky-700 hover:underline mt-1 inline-block">
              View all &rarr;
            </Link>
          )}
        </div>
        
        {fullPage && (
          <select 
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            className="border border-stone-300 rounded-md px-3 py-1.5 text-sm focus:outline-none focus:ring-2 focus:ring-sky-500 bg-white min-w-[180px]"
          >
            {categories.map(c => <option key={c} value={c}>{c}</option>)}
          </select>
        )}
      </div>

      <div className="space-y-4">
        {display.map(issue => (
          <div key={issue.id} className="bg-white border border-stone-200 p-5 rounded-lg shadow-[0_1px_3px_rgba(0,0,0,0.05)] flex gap-4">
            
            {/* Upvote Button */}
            <div className="flex flex-col items-center pt-1">
              <button 
                onClick={() => handleUpvote(issue.id)}
                disabled={upvotedIds.has(issue.id)}
                className={`p-1.5 rounded-md transition flex flex-col items-center min-w-[40px] ${
                  upvotedIds.has(issue.id) 
                    ? "text-sky-600 bg-sky-50" 
                    : "text-stone-400 hover:bg-stone-100 hover:text-stone-700"
                }`}
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="m18 15-6-6-6 6"/>
                </svg>
                <span className="text-sm font-medium mt-1">{issue.upvotes || 0}</span>
              </button>
            </div>

            <div className="flex-1">
              <div className="flex flex-wrap justify-between items-start mb-2 gap-2">
                <h3 className="font-medium text-stone-900 leading-tight">{issue.title}</h3>
                <div className="flex items-center gap-2">
                  <span className="text-xs px-2 py-0.5 rounded-md bg-stone-100 text-stone-600 border border-stone-200">
                    {issue.category}
                  </span>
                  <span className={`text-xs px-2 py-0.5 rounded-md font-medium border ${
                    issue.status === 'Fixed' || issue.status === 'Resolved' 
                      ? 'bg-emerald-50 text-emerald-700 border-emerald-200' 
                      : 'bg-amber-50 text-amber-700 border-amber-200'
                  }`}>
                    {issue.status}
                  </span>
                </div>
              </div>
              
              <p className="text-sm text-stone-600 mb-4">{issue.description}</p>
              
              <div className="text-xs text-stone-500 flex flex-wrap items-center gap-x-3 gap-y-1">
                <span className="flex items-center gap-1">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
                  {issue.location}
                </span>
                <span className="hidden sm:inline">•</span>
                <span>By {issue.reporterName || issue.author || "Anonymous"}</span>
                <span className="hidden sm:inline">•</span>
                <span>{issue.date || "Just now"}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      {display.length === 0 && (
        <div className="text-center py-12 text-stone-500 bg-stone-50 rounded-lg border border-stone-200 border-dashed">
          No issues found in this category.
        </div>
      )}
    </div>
  );
}
