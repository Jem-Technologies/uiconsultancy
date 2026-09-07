"use client";

import React from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { AnnouncementTicker } from "@/components/AnnouncementTicker";
import { ACADEMIC_CALENDAR } from "@/data/news";
import { Calendar } from "lucide-react";

export default function CalendarPage() {
  return (
    <div className="min-h-screen flex flex-col bg-slate-50 font-sans">
      <Navbar />
      <AnnouncementTicker />

      <section className="bg-ui-navy-950 text-white py-16 px-4 sm:px-6 lg:px-8 border-b-4 border-ui-gold-500 relative">
        <div className="max-w-7xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 bg-ui-gold-500/10 text-ui-gold-300 border border-ui-gold-500/30 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest">
            Academic Schedule
          </div>
          <h1 className="font-serif text-3xl sm:text-5xl font-bold text-white">
            2026/2027 Academic Calendar & Key Dates
          </h1>
          <p className="text-slate-300 text-sm sm:text-base max-w-3xl leading-relaxed">
            Stay informed on application deadlines, orientation, lecture timetables, semester examination schedules, and convocation dates.
          </p>
        </div>
      </section>

      <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 flex-grow w-full space-y-8">
        <div className="bg-white rounded-2xl border border-slate-200 shadow-xl p-8 space-y-6">
          <div className="flex items-center gap-3 border-b border-slate-200 pb-4">
            <Calendar className="w-6 h-6 text-ui-navy-900" />
            <h2 className="font-serif font-bold text-2xl text-ui-navy-900">
              Session Schedule Timeline
            </h2>
          </div>

          <div className="space-y-4">
            {ACADEMIC_CALENDAR.map((event, idx) => (
              <div
                key={idx}
                className="p-5 rounded-xl bg-slate-50 border border-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-4 hover:border-ui-navy-900/30 transition-colors"
              >
                <div className="space-y-1">
                  <span className="bg-ui-navy-900 text-white font-mono text-[10px] font-bold px-2.5 py-0.5 rounded uppercase">
                    {event.category}
                  </span>
                  <h3 className="font-serif font-bold text-base text-ui-navy-900">
                    {event.title}
                  </h3>
                  <p className="text-slate-600 text-xs">
                    {event.description}
                  </p>
                </div>

                <div className="shrink-0 bg-ui-gold-500/20 text-ui-gold-900 border border-ui-gold-400 font-mono font-bold text-xs px-4 py-2 rounded-xl text-center">
                  {event.date}
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
