"use client";

import React from "react";
import Link from "next/link";
import { 
  GraduationCap, 
  ArrowRight, 
  ShieldCheck, 
  BookOpen, 
  CheckCircle2
} from "lucide-react";

export const HeroSection: React.FC = () => {
  return (
    <section className="relative bg-ui-navy-950 text-white overflow-hidden border-b-4 border-ui-gold-500 font-sans">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 bg-ui-gold-500/10 border border-ui-gold-500/30 px-3.5 py-1.5 rounded-full text-ui-gold-300 text-xs font-semibold tracking-wide">
              <ShieldCheck className="w-4 h-4 text-ui-gold-400" />
              <span>Official University of Ibadan Consultancy Services Unit</span>
            </div>

            <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight">
              Premier Postgraduate & Higher Diplomas For <span className="text-ui-gold-400 font-serif italic">Career Leadership</span>
            </h1>

            <p className="text-slate-300 text-base sm:text-lg leading-relaxed max-w-2xl">
              Advance your professional standing with flexible, Senate-approved postgraduate diplomas from Nigeria’s premier university. Designed for working professionals, HND holders, and Third Class graduates seeking Master’s degree entry and career acceleration.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-sm text-slate-200">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-ui-gold-400 shrink-0" />
                <span>100% University Senate Approved Diplomas</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-ui-gold-400 shrink-0" />
                <span>Weekend Blended & Distance Online Tracks</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-ui-gold-400 shrink-0" />
                <span>Bridge HND & 3rd Class to M.Sc Eligibility</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-ui-gold-400 shrink-0" />
                <span>Flexible Installment Tuition Options</span>
              </div>
            </div>

            <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <Link
                href="/apply"
                className="bg-ui-gold-500 hover:bg-ui-gold-400 text-ui-navy-950 font-bold px-8 py-4 rounded-md text-base transition-all shadow-lg hover:shadow-xl text-center flex items-center justify-center gap-2"
              >
                Apply For Admission <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                href="/programs"
                className="bg-ui-navy-900 hover:bg-ui-navy-800 border border-slate-700 text-white font-semibold px-7 py-4 rounded-md text-base transition-all text-center flex items-center justify-center gap-2"
              >
                <BookOpen className="w-5 h-5 text-ui-gold-400" />
                Explore All Diplomas
              </Link>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="bg-ui-navy-900/90 border border-ui-gold-500/30 rounded-2xl p-6 sm:p-8 shadow-2xl backdrop-blur-sm space-y-6">
              <div className="flex items-center justify-between border-b border-slate-800 pb-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-ui-gold-500/20 border border-ui-gold-400 flex items-center justify-center">
                    <GraduationCap className="w-6 h-6 text-ui-gold-400" />
                  </div>
                  <div>
                    <h3 className="font-serif font-bold text-lg text-white">2024/2025 Admissions</h3>
                    <p className="text-xs text-ui-gold-400 font-medium">Postgraduate & Executive Diplomas</p>
                  </div>
                </div>
                <span className="bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 text-[10px] font-bold uppercase px-2.5 py-1 rounded-full">
                  Applications Active
                </span>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="bg-ui-navy-950/80 p-4 rounded-xl border border-slate-800">
                  <div className="text-2xl font-serif font-bold text-ui-gold-400">15,000+</div>
                  <div className="text-xs text-slate-400">Alumni Graduates</div>
                </div>
                <div className="bg-ui-navy-950/80 p-4 rounded-xl border border-slate-800">
                  <div className="text-2xl font-serif font-bold text-ui-gold-400">12 Months</div>
                  <div className="text-xs text-slate-400">PGD Program Duration</div>
                </div>
                <div className="bg-ui-navy-950/80 p-4 rounded-xl border border-slate-800">
                  <div className="text-2xl font-serif font-bold text-ui-gold-400">100%</div>
                  <div className="text-xs text-slate-400">Verified Credentials</div>
                </div>
                <div className="bg-ui-navy-950/80 p-4 rounded-xl border border-slate-800">
                  <div className="text-2xl font-serif font-bold text-ui-gold-400">5 Major</div>
                  <div className="text-xs text-slate-400">Academic Faculties</div>
                </div>
              </div>

              <div className="pt-2 border-t border-slate-800">
                <Link
                  href="/verify"
                  className="w-full bg-slate-800/80 hover:bg-slate-800 text-slate-200 text-xs font-medium py-3 px-4 rounded-lg flex items-center justify-between border border-slate-700 transition-colors"
                >
                  <span className="flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-ui-gold-400" />
                    Verify Admission or Diploma Certificate Online
                  </span>
                  <ArrowRight className="w-3.5 h-3.5 text-slate-400" />
                </Link>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
