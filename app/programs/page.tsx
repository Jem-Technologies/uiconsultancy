"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { AnnouncementTicker } from "@/components/AnnouncementTicker";
import { PROGRAMS, DEPARTMENTS } from "@/data/programs";
import { 
  Search, 
  Clock, 
  ArrowRight, 
  GraduationCap, 
  Layers, 
  CheckCircle
} from "lucide-react";

export default function ProgramsPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedDept, setSelectedDept] = useState("All Departments");
  const [selectedLevel, setSelectedLevel] = useState("All Qualifications");

  const filtered = PROGRAMS.filter((p) => {
    const matchesSearch =
      p.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      p.code.toLowerCase().includes(searchTerm.toLowerCase()) ||
      p.description.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesDept =
      selectedDept === "All Departments" || p.department === selectedDept;

    const matchesLevel =
      selectedLevel === "All Qualifications" || p.level === selectedLevel;

    return matchesSearch && matchesDept && matchesLevel;
  });

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 font-sans">
      <Navbar />
      <AnnouncementTicker />

      <section className="bg-ui-navy-950 text-white py-16 px-4 sm:px-6 lg:px-8 border-b-4 border-ui-gold-500 relative">
        <div className="max-w-7xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 bg-ui-gold-500/10 text-ui-gold-300 border border-ui-gold-500/30 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest">
            Academic Directory
          </div>
          <h1 className="font-serif text-3xl sm:text-5xl font-bold text-white">
            Postgraduate & Executive Diploma Programs
          </h1>
          <p className="text-slate-300 text-sm sm:text-base max-w-3xl leading-relaxed">
            Choose from specialized postgraduate diplomas, higher diplomas, and professional certifications recognized globally and approved by the University of Ibadan Senate.
          </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 relative z-10 w-full">
        <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-xl space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
            
            <div className="md:col-span-6 relative">
              <Search className="w-5 h-5 absolute left-3.5 top-3.5 text-slate-400" />
              <input
                type="text"
                placeholder="Search by program name, course code (e.g., CSIT, BMA, Safety)..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-11 pr-4 py-3 bg-slate-50 border border-slate-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-ui-navy-900 focus:bg-white text-slate-900"
              />
            </div>

            <div className="md:col-span-3">
              <select
                value={selectedDept}
                onChange={(e) => setSelectedDept(e.target.value)}
                className="w-full px-4 py-3 bg-slate-50 border border-slate-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-ui-navy-900 text-slate-900 font-medium"
              >
                {DEPARTMENTS.map((dept) => (
                  <option key={dept} value={dept}>{dept}</option>
                ))}
              </select>
            </div>

            <div className="md:col-span-3">
              <select
                value={selectedLevel}
                onChange={(e) => setSelectedLevel(e.target.value)}
                className="w-full px-4 py-3 bg-slate-50 border border-slate-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-ui-navy-900 text-slate-900 font-medium"
              >
                <option value="All Qualifications">All Qualifications</option>
                <option value="Postgraduate Diploma (PGD)">Postgraduate Diploma (PGD)</option>
                <option value="Higher Diploma">Higher Diploma</option>
                <option value="Professional Diploma">Professional Diploma</option>
              </select>
            </div>

          </div>

          <div className="flex items-center justify-between text-xs text-slate-500 border-t border-slate-100 pt-3">
            <span>Showing <strong className="text-ui-navy-900">{filtered.length}</strong> available diploma program(s)</span>
            {(searchTerm || selectedDept !== "All Departments" || selectedLevel !== "All Qualifications") && (
              <button
                onClick={() => {
                  setSearchTerm("");
                  setSelectedDept("All Departments");
                  setSelectedLevel("All Qualifications");
                }}
                className="text-ui-gold-700 font-semibold hover:underline"
              >
                Reset Filters
              </button>
            )}
          </div>
        </div>
      </section>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 flex-grow w-full">
        {filtered.length === 0 ? (
          <div className="bg-white rounded-2xl p-12 text-center border border-slate-200 shadow-sm space-y-4">
            <GraduationCap className="w-12 h-12 text-slate-400 mx-auto" />
            <h3 className="font-serif text-xl font-bold text-slate-800">No Programs Matched Your Search</h3>
            <p className="text-slate-500 text-sm max-w-md mx-auto">
              Try adjusting your search terms or filter selections to browse our full list of diploma programs.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filtered.map((program) => (
              <div
                key={program.id}
                className="bg-white rounded-2xl border border-slate-200 shadow-sm hover:shadow-xl transition-all flex flex-col justify-between overflow-hidden group hover:border-ui-navy-900/30"
              >
                <div className="p-6 space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="bg-ui-navy-900 text-white text-[10px] font-bold px-2.5 py-1 rounded">
                      {program.level}
                    </span>
                    <span className="text-xs font-mono font-bold text-ui-gold-700">
                      {program.code}
                    </span>
                  </div>

                  <h3 className="font-serif font-bold text-xl text-ui-navy-900 group-hover:text-ui-gold-700 transition-colors leading-snug">
                    {program.title}
                  </h3>

                  <p className="text-slate-600 text-xs leading-relaxed line-clamp-3">
                    {program.description}
                  </p>

                  <div className="space-y-1.5 pt-2 border-t border-slate-100">
                    <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block">Key Modules</span>
                    <ul className="text-xs text-slate-600 space-y-1">
                      {program.modules.slice(0, 3).map((mod, idx) => (
                        <li key={idx} className="flex items-center gap-1.5">
                          <CheckCircle className="w-3.5 h-3.5 text-ui-gold-600 shrink-0" />
                          <span className="truncate">{mod}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-3 border-t border-slate-100 grid grid-cols-2 gap-2 text-xs text-slate-600">
                    <div className="flex items-center gap-1.5">
                      <Clock className="w-4 h-4 text-ui-gold-600 shrink-0" />
                      <span>{program.duration}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Layers className="w-4 h-4 text-ui-gold-600 shrink-0" />
                      <span>{program.mode}</span>
                    </div>
                  </div>
                </div>

                <div className="p-6 bg-slate-50 border-t border-slate-100 flex items-center justify-between">
                  <div>
                    <span className="text-[10px] uppercase font-bold text-slate-400 block">Admissions</span>
                    <span className="text-xs font-bold text-emerald-700 bg-emerald-100/80 px-2 py-0.5 rounded border border-emerald-200 inline-block mt-0.5">
                      Applications Active
                    </span>
                  </div>

                  <div className="flex items-center gap-2">
                    <Link
                      href={`/programs/${program.id}`}
                      className="bg-ui-navy-900 hover:bg-ui-navy-950 text-white font-semibold text-xs px-4 py-2.5 rounded-lg transition-all flex items-center gap-1"
                    >
                      <span>Program Details</span>
                      <ArrowRight className="w-3.5 h-3.5 text-ui-gold-400" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
}
