"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Search, X, BookOpen, ArrowRight, GraduationCap } from "lucide-react";
import { PROGRAMS } from "@/data/programs";

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const SearchModal: React.FC<SearchModalProps> = ({ isOpen, onClose }) => {
  const [query, setQuery] = useState("");

  if (!isOpen) return null;

  const results = query.trim().length > 0
    ? PROGRAMS.filter((p) =>
        p.title.toLowerCase().includes(query.toLowerCase()) ||
        p.code.toLowerCase().includes(query.toLowerCase()) ||
        p.department.toLowerCase().includes(query.toLowerCase())
      )
    : [];

  return (
    <div className="fixed inset-0 z-50 bg-ui-navy-950/80 backdrop-blur-sm flex items-start justify-center pt-20 px-4">
      <div className="bg-white rounded-2xl border border-slate-200 shadow-2xl w-full max-w-2xl overflow-hidden font-sans space-y-4 p-6 animate-fadeIn">
        <div className="flex items-center justify-between border-b border-slate-200 pb-4">
          <div className="flex items-center gap-2 flex-grow pr-4">
            <Search className="w-5 h-5 text-ui-navy-900" />
            <input
              type="text"
              autoFocus
              placeholder="Search programs, course codes (e.g. CSIT, Safety, Diploma)..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="w-full text-base font-semibold text-ui-navy-900 focus:outline-none placeholder-slate-400"
            />
          </div>
          <button onClick={onClose} className="p-2 rounded-full hover:bg-slate-100 text-slate-500">
            <X className="w-5 h-5" />
          </button>
        </div>

        {query.trim().length > 0 ? (
          <div className="max-h-80 overflow-y-auto space-y-2">
            {results.length > 0 ? (
              results.map((p) => (
                <Link
                  key={p.id}
                  href={`/programs/${p.id}`}
                  onClick={onClose}
                  className="block p-4 rounded-xl hover:bg-slate-50 border border-slate-100 transition-colors"
                >
                  <div className="flex items-center justify-between">
                    <span className="bg-ui-navy-900 text-white text-[10px] font-bold px-2 py-0.5 rounded">
                      {p.code}
                    </span>
                    <span className="text-xs text-ui-gold-700 font-bold">{p.level}</span>
                  </div>
                  <h4 className="font-serif font-bold text-sm text-ui-navy-900 mt-1">{p.title}</h4>
                  <p className="text-xs text-slate-500 line-clamp-1">{p.description}</p>
                </Link>
              ))
            ) : (
              <p className="text-xs text-slate-500 text-center py-6">No matching programs found for "{query}".</p>
            )}
          </div>
        ) : (
          <div className="text-xs text-slate-500 space-y-2 py-4">
            <span className="font-bold uppercase tracking-wider text-slate-400 block">Popular Searches</span>
            <div className="flex flex-wrap gap-2">
              {["Computer Science", "Business Management", "Applied Statistics", "HSE Safety", "Project Management"].map((term) => (
                <button
                  key={term}
                  onClick={() => setQuery(term)}
                  className="px-3 py-1 bg-slate-100 hover:bg-slate-200 rounded-full font-medium text-slate-700"
                >
                  {term}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
