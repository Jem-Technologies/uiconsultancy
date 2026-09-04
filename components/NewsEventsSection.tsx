"use client";

import React from "react";
import Link from "next/link";
import { NEWS_ARTICLES, ACADEMIC_CALENDAR } from "@/data/news";
import { formatDate } from "@/lib/utils";
import { Calendar, Bell, ArrowRight } from "lucide-react";

export const NewsEventsSection: React.FC = () => {
  return (
    <section className="py-20 bg-slate-50 border-b border-slate-200 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          <div className="lg:col-span-7 space-y-6">
            <div className="flex items-center justify-between border-b border-slate-200 pb-4">
              <div className="flex items-center gap-2">
                <Bell className="w-5 h-5 text-ui-gold-600" />
                <h2 className="font-serif text-2xl font-bold text-ui-navy-900">
                  Latest Institutional Bulletins
                </h2>
              </div>
              <Link href="/admissions" className="text-xs font-bold text-ui-navy-900 hover:text-ui-gold-600 flex items-center gap-1">
                All Bulletins <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            <div className="space-y-4">
              {NEWS_ARTICLES.map((article) => (
                <div
                  key={article.id}
                  className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow space-y-3"
                >
                  <div className="flex items-center justify-between text-xs text-slate-500">
                    <span className="bg-ui-gold-500/15 text-ui-gold-800 border border-ui-gold-400 font-bold px-2.5 py-0.5 rounded">
                      {article.category}
                    </span>
                    <span>{formatDate(article.date)}</span>
                  </div>

                  <h3 className="font-serif font-bold text-lg text-ui-navy-900 hover:text-ui-gold-700 transition-colors">
                    {article.title}
                  </h3>

                  <p className="text-slate-600 text-xs leading-relaxed">
                    {article.summary}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-5 space-y-6">
            <div className="flex items-center justify-between border-b border-slate-200 pb-4">
              <div className="flex items-center gap-2">
                <Calendar className="w-5 h-5 text-ui-gold-600" />
                <h2 className="font-serif text-2xl font-bold text-ui-navy-900">
                  2024/2025 Session Schedule
                </h2>
              </div>
            </div>

            <div className="bg-ui-navy-900 text-white rounded-2xl p-6 border border-ui-navy-800 space-y-4 shadow-xl">
              {ACADEMIC_CALENDAR.map((event, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-xl bg-ui-navy-950/70 border border-slate-800 space-y-1.5"
                >
                  <div className="flex items-center justify-between text-[11px]">
                    <span className="font-mono text-ui-gold-400 font-bold">
                      {event.date}
                    </span>
                    <span className="bg-slate-800 text-slate-300 px-2 py-0.5 rounded font-semibold">
                      {event.category}
                    </span>
                  </div>
                  <h4 className="font-serif font-bold text-sm text-white">
                    {event.title}
                  </h4>
                  <p className="text-xs text-slate-400">
                    {event.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
