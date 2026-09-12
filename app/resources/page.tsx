"use client";

import React from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { AnnouncementTicker } from "@/components/AnnouncementTicker";
import { Download, FileText, BookOpen, ShieldCheck } from "lucide-react";

export default function ResourcesPage() {
  const downloads = [
    { title: "2026/2027 Academic Session Prospectus", desc: "Comprehensive course descriptions, department profiles, and fee schedules.", file: "UI_Consultancy_Prospectus_2026.pdf", size: "3.2 MB" },
    { title: "Student Handbook & Code of Conduct", desc: "Academic policies, examination rules, grading system, and campus guidelines.", file: "UI_Consultancy_Student_Handbook.pdf", size: "2.1 MB" },
    { title: "Executive Diploma Research Project Manual", desc: "Formatting guidelines, citation standards, and submission protocols for final project dissertations.", file: "Executive_Diploma_Research_Guidelines.pdf", size: "1.8 MB" },
    { title: "Transcript & Certificate Verification Request Form", desc: "Official application form for academic transcript dispatch and certificate verification.", file: "UI_Transcript_Request_Form.pdf", size: "850 KB" }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 font-sans">
      <Navbar />
      <AnnouncementTicker />

      {/* Hero Header */}
      <section className="bg-ui-navy-950 text-white py-16 px-4 sm:px-6 lg:px-8 border-b-4 border-ui-gold-500 relative">
        <div className="max-w-7xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 bg-ui-gold-500/10 text-ui-gold-300 border border-ui-gold-500/30 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest">
            Downloads & E-Library
          </div>
          <h1 className="font-serif text-3xl sm:text-5xl font-bold text-white">
            Academic Resources & Handbooks
          </h1>
          <p className="text-slate-300 text-sm sm:text-base max-w-3xl leading-relaxed">
            Download official University of Ibadan Consultancy Service prospectuses, student handbooks, research manuals, and academic forms.
          </p>
        </div>
      </section>

      <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 flex-grow w-full space-y-8">
        <div className="bg-white rounded-2xl border border-slate-200 shadow-xl p-8 space-y-6">
          <div className="flex items-center gap-3 border-b border-slate-200 pb-4">
            <BookOpen className="w-6 h-6 text-ui-navy-900" />
            <h2 className="font-serif font-bold text-2xl text-ui-navy-900">
              Official Downloadable Documents
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {downloads.map((item, idx) => (
              <div
                key={idx}
                className="p-6 rounded-xl bg-slate-50 border border-slate-200 flex flex-col justify-between space-y-4 hover:border-ui-navy-900/30 transition-all"
              >
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <FileText className="w-6 h-6 text-ui-navy-900" />
                    <span className="text-[10px] font-mono font-bold bg-slate-200 text-slate-700 px-2 py-0.5 rounded">
                      {item.size}
                    </span>
                  </div>
                  <h3 className="font-serif font-bold text-lg text-ui-navy-900">
                    {item.title}
                  </h3>
                  <p className="text-slate-600 text-xs leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                <a
                  href={`#download-${idx}`}
                  onClick={(e) => {
                    e.preventDefault();
                    alert(`Downloading ${item.title}...`);
                  }}
                  className="bg-ui-navy-900 hover:bg-ui-navy-950 text-white font-bold px-4 py-2.5 rounded-xl text-xs flex items-center justify-center gap-2 transition-colors"
                >
                  <Download className="w-4 h-4 text-ui-gold-400" /> Download Document (PDF)
                </a>
              </div>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
