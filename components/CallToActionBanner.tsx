"use client";

import React from "react";
import Link from "next/link";
import { Download, FileText } from "lucide-react";

export const CallToActionBanner: React.FC = () => {
  return (
    <section className="py-16 bg-ui-navy-900 border-t-4 border-ui-gold-500 text-white relative overflow-hidden font-sans">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-ui-navy-950 border border-ui-gold-500/40 rounded-3xl p-8 sm:p-12 shadow-2xl flex flex-col lg:flex-row items-center justify-between gap-8">
          
          <div className="space-y-4 max-w-2xl text-center lg:text-left">
            <div className="inline-flex items-center gap-2 bg-ui-gold-500/10 text-ui-gold-300 border border-ui-gold-500/30 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest">
              Take The Next Academic Step
            </div>
            
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-white leading-tight">
              Download the 2024/2025 Academic Prospectus & Handbook
            </h2>

            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              Get complete details on program structures, semester course codes, faculty credentials, delivery schedules, and entry prerequisites.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-4 shrink-0 w-full lg:w-auto">
            <a
              href="/resources"
              className="w-full sm:w-auto bg-ui-gold-500 hover:bg-ui-gold-400 text-ui-navy-950 font-bold px-7 py-4 rounded-xl text-sm transition-all shadow-lg flex items-center justify-center gap-2"
            >
              <Download className="w-5 h-5" />
              Download Prospectus PDF
            </a>

            <Link
              href="/apply"
              className="w-full sm:w-auto bg-white hover:bg-slate-100 text-ui-navy-950 font-bold px-7 py-4 rounded-xl text-sm transition-all shadow-md flex items-center justify-center gap-2"
            >
              <FileText className="w-5 h-5 text-ui-navy-900" />
              Apply Online Now
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
};
