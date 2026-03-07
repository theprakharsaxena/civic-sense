"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function IssuesFeed({ fullPage = false }: { fullPage?: boolean }) {
  const [issues, setIssues] = useState<any[]>([]);

  useEffect(() => {
    // Realistic dummy data
    const initialData = [
      {
        id: "1",
        title: "Big pothole forming on Elm St",
        description: "Right in front of the bakery, there's a pothole that's getting pretty deep. Hard to avoid when cars are parked on the other side.",
        location: "Elm St, near 5th Ave",
        status: "Open",
        date: "2 days ago",
        author: "Sarah M."
      },
      {
        id: "2",
        title: "Streetlight out",
        description: "The streetlight on the corner has been completely dark for a week.",
        location: "Corner of Maple and Oak",
        status: "Fixed",
        date: "1 week ago",
        author: "Dave"
      },
      {
        id: "3",
        title: "Trash bags piled up next to the park bin",
        description: "Looks like someone dumped their house trash here over the weekend. The bin is full and there are bags piled next to it.",
        location: "North entrance of City Park",
        status: "Open",
        date: "Just now",
        author: "Anonymous"
      }
    ];
    
    // Add any from local storage (submitted in this session)
    try {
      const stored = JSON.parse(localStorage.getItem("civicpulse_issues") || "[]");
      setIssues([...stored, ...initialData]);
    } catch {
      setIssues(initialData);
    }
  }, []);

  const display = fullPage ? issues : issues.slice(0, 3);

  return (
    <div className={`max-w-[800px] mx-auto py-16 px-6 md:px-8 ${fullPage ? "" : "border-t border-stone-200"}`}>
      <div className="flex justify-between items-end mb-8">
        <h2 className="text-2xl font-semibold text-stone-900">Recent reports</h2>
        {!fullPage && (
          <Link href="/issues" className="text-sm font-medium text-sky-600 hover:text-sky-700 hover:underline">
            View all &rarr;
          </Link>
        )}
      </div>

      <div className="space-y-4">
        {display.map(issue => (
          <div key={issue.id} className="bg-white border border-stone-200 p-5 rounded-lg shadow-[0_1px_3px_rgba(0,0,0,0.05)]">
            <div className="flex justify-between items-start mb-2">
              <h3 className="font-medium text-stone-900">{issue.title}</h3>
              <span className={`text-xs px-2 py-1 rounded-full font-medium ${
                issue.status === 'Fixed' || issue.status === 'Resolved' 
                  ? 'bg-emerald-100 text-emerald-800' 
                  : 'bg-stone-100 text-stone-600'
              }`}>
                {issue.status}
              </span>
            </div>
            <p className="text-sm text-stone-600 mb-4">{issue.description}</p>
            <div className="text-xs text-stone-500 flex flex-wrap items-center gap-2 sm:gap-4">
              <span>📍 {issue.location}</span>
              <span className="hidden sm:inline">•</span>
              <span>Reported by {issue.reporterName || issue.author || "Anonymous"}</span>
              <span className="hidden sm:inline">•</span>
              <span>{issue.date || "Just now"}</span>
            </div>
          </div>
        ))}
      </div>
      
      {fullPage && issues.length === 0 && (
        <div className="text-center py-12 text-stone-500">
          No issues have been reported yet.
        </div>
      )}
    </div>
  );
}
