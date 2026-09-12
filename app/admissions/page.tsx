"use client";

import React from "react";
import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { AnnouncementTicker } from "@/components/AnnouncementTicker";
import { 
  CheckCircle2, 
  FileCheck, 
  ArrowRight
} from "lucide-react";

export default function AdmissionsPage() {
  return (
    <div className="min-h-screen flex flex-col bg-slate-50 font-sans">
      <Navbar />
      <AnnouncementTicker />

      <section className="bg-ui-navy-950 text-white py-16 px-4 sm:px-6 lg:px-8 border-b-4 border-ui-gold-500 relative">
        <div className="max-w-7xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 bg-ui-gold-500/10 text-ui-gold-300 border border-ui-gold-500/30 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest">
            Admission Guidelines
          </div>
          <h1 className="font-serif text-3xl sm:text-5xl font-bold text-white">
            Entry Requirements & Qualifications
          </h1>
          <p className="text-slate-300 text-sm sm:text-base max-w-3xl leading-relaxed">
            Review detailed admission requirements for Executive Diplomas, Higher Diplomas (HD), and Professional Diplomas across all departments.
          </p>
        </div>
      </section>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 flex-grow w-full space-y-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          <div className="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm space-y-6 hover:shadow-lg transition-all">
            <div className="space-y-2">
              <span className="bg-ui-navy-900 text-white text-[10px] font-bold px-2.5 py-1 rounded uppercase">
                Executive Level
              </span>
              <h3 className="font-serif font-bold text-xl text-ui-navy-900">
                Executive Diploma
              </h3>
              <p className="text-slate-500 text-xs">
                Designed for First Degree and HND holders seeking specialized executive mastery and practical skills.
              </p>
            </div>

            <div className="space-y-3 pt-4 border-t border-slate-100 text-xs text-slate-700">
              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span><strong>First Degree:</strong> B.Sc, B.Tech, B.A or B.Ed from a recognized university with Third Class, Pass, or above.</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span><strong>Polytechnic HND:</strong> Higher National Diploma (Lower Credit, Upper Credit, or Distinction) in a relevant discipline.</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span><strong>O'Level Credits:</strong> Minimum of 5 O'Level credit passes in WAEC/NECO/NABTEB including English Language & Mathematics.</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span><strong>NYSC:</strong> Discharge Certificate or Official Exemption Certificate required for Nigerian citizens.</span>
              </div>
            </div>

            <div className="pt-4 border-t border-slate-100">
              <Link
                href="/apply?level=Executive"
                className="w-full bg-ui-navy-900 hover:bg-ui-navy-950 text-white text-xs font-bold py-3 rounded-xl flex items-center justify-center gap-2"
              >
                Apply For Executive Diploma Entry <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm space-y-6 hover:shadow-lg transition-all">
            <div className="space-y-2">
              <span className="bg-ui-gold-600 text-ui-navy-950 text-[10px] font-bold px-2.5 py-1 rounded uppercase">
                Higher Executive Level
              </span>
              <h3 className="font-serif font-bold text-xl text-ui-navy-900">
                Higher Diploma (HD)
              </h3>
              <p className="text-slate-500 text-xs">
                Ideal for OND/ND holders, NCE graduates, or experienced personnel seeking higher practical management status.
              </p>
            </div>

            <div className="space-y-3 pt-4 border-t border-slate-100 text-xs text-slate-700">
              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-ui-gold-600 shrink-0 mt-0.5" />
                <span><strong>National Diploma (ND/OND):</strong> Lower Credit pass or above from an accredited polytechnic or monotechnic.</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-ui-gold-600 shrink-0 mt-0.5" />
                <span><strong>NCE / Professional Diploma:</strong> Nigeria Certificate in Education or recognized institutional diploma.</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-ui-gold-600 shrink-0 mt-0.5" />
                <span><strong>O'Level Credits:</strong> At least 4 to 5 O'Level credit passes including English Language.</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-ui-gold-600 shrink-0 mt-0.5" />
                <span><strong>Work Experience:</strong> Minimum of 1 year post-ND relevant workplace experience.</span>
              </div>
            </div>

            <div className="pt-4 border-t border-slate-100">
              <Link
                href="/apply?level=HD"
                className="w-full bg-ui-navy-900 hover:bg-ui-navy-950 text-white text-xs font-bold py-3 rounded-xl flex items-center justify-center gap-2"
              >
                Apply For Higher Diploma <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm space-y-6 hover:shadow-lg transition-all">
            <div className="space-y-2">
              <span className="bg-slate-800 text-white text-[10px] font-bold px-2.5 py-1 rounded uppercase">
                Professional Level
              </span>
              <h3 className="font-serif font-bold text-xl text-ui-navy-900">
                Professional Ordinary Diploma
              </h3>
              <p className="text-slate-500 text-xs">
                Geared towards high school graduates and working technicians aiming for specialized certified skills.
              </p>
            </div>

            <div className="space-y-3 pt-4 border-t border-slate-100 text-xs text-slate-700">
              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-sky-600 shrink-0 mt-0.5" />
                <span><strong>SSCE / O'Level:</strong> Minimum of 3 to 5 credit passes in WAEC/NECO/GCE/NABTEB at not more than two sittings.</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-sky-600 shrink-0 mt-0.5" />
                <span><strong>Core Subjects:</strong> Credit pass in English Language and relevant science/commercial subject.</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-sky-600 shrink-0 mt-0.5" />
                <span><strong>Mature Entry Route:</strong> Candidates over 25 years with relevant vocational certificates and 2+ years field experience.</span>
              </div>
            </div>

            <div className="pt-4 border-t border-slate-100">
              <Link
                href="/apply?level=PD"
                className="w-full bg-ui-navy-900 hover:bg-ui-navy-950 text-white text-xs font-bold py-3 rounded-xl flex items-center justify-center gap-2"
              >
                Apply For Professional Diploma <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

        </div>

        <div className="bg-ui-navy-900 text-white rounded-2xl p-8 border-2 border-ui-gold-500 shadow-xl space-y-6">
          <div className="flex items-center gap-3 border-b border-slate-800 pb-4">
            <FileCheck className="w-7 h-7 text-ui-gold-400" />
            <div>
              <h3 className="font-serif font-bold text-2xl text-white">Document Checklist For Online Application</h3>
              <p className="text-xs text-slate-300">Ensure you have clear scanned PDF/JPEG copies of the following before commencing your application:</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-xs text-slate-200">
            <div className="p-4 bg-ui-navy-950/80 rounded-xl border border-slate-800 space-y-1">
              <span className="font-bold text-ui-gold-400">1. O'Level Statement / Certificate</span>
              <p className="text-slate-400 text-[11px]">WAEC, NECO, or NABTEB certificate showing subject grades.</p>
            </div>

            <div className="p-4 bg-ui-navy-950/80 rounded-xl border border-slate-800 space-y-1">
              <span className="font-bold text-ui-gold-400">2. Degree / HND Certificate</span>
              <p className="text-slate-400 text-[11px]">Official statement of result or degree certificate from accredited institution.</p>
            </div>

            <div className="p-4 bg-ui-navy-950/80 rounded-xl border border-slate-800 space-y-1">
              <span className="font-bold text-ui-gold-400">3. NYSC Certificate</span>
              <p className="text-slate-400 text-[11px]">Discharge certificate or official exemption certificate (for Executive Diploma applicants).</p>
            </div>

            <div className="p-4 bg-ui-navy-950/80 rounded-xl border border-slate-800 space-y-1">
              <span className="font-bold text-ui-gold-400">4. Passport Photo & ID</span>
              <p className="text-slate-400 text-[11px]">Recent white-background passport photo and valid photo identity card.</p>
            </div>
          </div>
        </div>

      </main>

      <Footer />
    </div>
  );
}
