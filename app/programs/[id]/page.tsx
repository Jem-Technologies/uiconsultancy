"use client";

import React from "react";
import Link from "next/link";
import { useParams } from "next/navigation";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { AnnouncementTicker } from "@/components/AnnouncementTicker";
import { PROGRAMS } from "@/data/programs";
import { FEE_STRUCTURES } from "@/data/fees";
import { formatCurrency } from "@/lib/utils";
import { 
  GraduationCap, 
  Clock, 
  CheckCircle2, 
  BookOpen, 
  FileText, 
  Briefcase, 
  ShieldCheck,
  CreditCard,
  ChevronLeft
} from "lucide-react";

export default function ProgramDetailPage() {
  const params = useParams();
  const id = params?.id as string;

  const program = PROGRAMS.find((p) => p.id === id);

  if (!program) {
    return (
      <div className="min-h-screen flex flex-col bg-slate-50">
        <Navbar />
        <div className="flex-grow flex items-center justify-center p-8">
          <div className="text-center space-y-4 max-w-md">
            <GraduationCap className="w-16 h-16 text-ui-navy-900 mx-auto" />
            <h2 className="font-serif text-2xl font-bold text-ui-navy-900">Program Not Found</h2>
            <p className="text-slate-600 text-sm">The requested diploma program could not be located in our catalog.</p>
            <Link href="/programs" className="inline-block bg-ui-navy-900 text-white text-xs font-bold px-6 py-3 rounded-md">
              Return to Programs Directory
            </Link>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  const feeStructure = FEE_STRUCTURES.find((f) => f.programId === program.id);

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 font-sans">
      <Navbar />
      <AnnouncementTicker />

      <section className="bg-ui-navy-950 text-white py-14 px-4 sm:px-6 lg:px-8 border-b-4 border-ui-gold-500 relative">
        <div className="max-w-7xl mx-auto space-y-6">
          <Link href="/programs" className="inline-flex items-center gap-1 text-xs text-ui-gold-300 hover:text-white font-semibold">
            <ChevronLeft className="w-4 h-4" /> Back to Programs Directory
          </Link>

          <div className="flex flex-wrap items-center gap-3">
            <span className="bg-ui-gold-500 text-ui-navy-950 font-bold text-xs px-3 py-1 rounded-md">
              {program.level}
            </span>
            <span className="bg-ui-navy-900 text-slate-200 border border-slate-700 text-xs font-mono font-bold px-3 py-1 rounded-md">
              {program.code}
            </span>
            <span className="text-xs text-slate-300 font-medium">
              Department of {program.department}
            </span>
          </div>

          <h1 className="font-serif text-3xl sm:text-5xl font-bold text-white leading-tight">
            {program.title}
          </h1>

          <p className="text-slate-300 text-sm sm:text-base max-w-3xl leading-relaxed">
            {program.description}
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4 border-t border-slate-800 text-xs text-slate-300">
            <div>
              <span className="block text-slate-500 text-[10px] uppercase font-bold">Duration</span>
              <span className="font-semibold text-white">{program.duration}</span>
            </div>
            <div>
              <span className="block text-slate-500 text-[10px] uppercase font-bold">Delivery Mode</span>
              <span className="font-semibold text-white">{program.mode}</span>
            </div>
            <div>
              <span className="block text-slate-500 text-[10px] uppercase font-bold">Application Fee</span>
              <span className="font-semibold text-ui-gold-400">{formatCurrency(program.applicationFee)}</span>
            </div>
            <div>
              <span className="block text-slate-500 text-[10px] uppercase font-bold">Tuition / Session</span>
              <span className="font-semibold text-ui-gold-400">{formatCurrency(program.tuition)}</span>
            </div>
          </div>
        </div>
      </section>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 flex-grow w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          <div className="lg:col-span-8 space-y-10">
            <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm space-y-6">
              <div className="flex items-center gap-3 border-b border-slate-100 pb-4">
                <BookOpen className="w-6 h-6 text-ui-navy-900" />
                <h2 className="font-serif text-2xl font-bold text-ui-navy-900">
                  Course Modules & Academic Curriculum
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {program.modules.map((mod, idx) => (
                  <div key={idx} className="p-4 rounded-xl bg-slate-50 border border-slate-200 flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full bg-ui-navy-900 text-white font-mono text-xs flex items-center justify-center shrink-0 mt-0.5">
                      {idx + 1}
                    </span>
                    <span className="text-xs font-semibold text-slate-800 leading-snug">
                      {mod}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm space-y-4">
                <div className="flex items-center gap-2 border-b border-slate-100 pb-3">
                  <ShieldCheck className="w-5 h-5 text-ui-gold-600" />
                  <h3 className="font-serif font-bold text-lg text-ui-navy-900">
                    Admission Requirements
                  </h3>
                </div>
                <ul className="space-y-2.5 text-xs text-slate-700">
                  {program.requirements.map((req, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{req}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm space-y-4">
                <div className="flex items-center gap-2 border-b border-slate-100 pb-3">
                  <Briefcase className="w-5 h-5 text-ui-gold-600" />
                  <h3 className="font-serif font-bold text-lg text-ui-navy-900">
                    Career Prospects
                  </h3>
                </div>
                <ul className="space-y-2.5 text-xs text-slate-700">
                  {program.careerProspects.map((car, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-ui-gold-600 shrink-0 mt-0.5" />
                      <span>{car}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {feeStructure && (
              <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm space-y-6">
                <div className="flex items-center gap-3 border-b border-slate-100 pb-4">
                  <CreditCard className="w-6 h-6 text-ui-navy-900" />
                  <h2 className="font-serif text-2xl font-bold text-ui-navy-900">
                    Itemized Fee Schedule
                  </h2>
                </div>

                <div className="overflow-x-auto">
                  <table className="w-full text-left border-collapse text-xs">
                    <thead>
                      <tr className="bg-slate-100 text-slate-700 border-b border-slate-200 font-bold uppercase">
                        <th className="p-3">Fee Category</th>
                        <th className="p-3">Description</th>
                        <th className="p-3 text-right">Amount (NGN)</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100 text-slate-700">
                      {feeStructure.breakdown.map((item, idx) => (
                        <tr key={idx} className="hover:bg-slate-50">
                          <td className="p-3 font-semibold text-ui-navy-900">{item.category}</td>
                          <td className="p-3 text-slate-500">{item.description}</td>
                          <td className="p-3 text-right font-mono font-bold text-slate-900">{formatCurrency(item.amount)}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                <div className="p-4 bg-ui-gold-500/10 border border-ui-gold-400/40 rounded-xl text-xs text-ui-navy-950">
                  <span className="font-bold">Flexible Installments: </span>
                  {feeStructure.paymentOptions.installmentPlan}
                </div>
              </div>
            )}
          </div>

          <div className="lg:col-span-4 space-y-6">
            <div className="bg-ui-navy-900 text-white rounded-2xl p-8 border-2 border-ui-gold-500 shadow-xl space-y-6 sticky top-28">
              <div className="text-center space-y-2 border-b border-slate-800 pb-6">
                <span className="bg-ui-gold-500 text-ui-navy-950 text-[10px] font-bold uppercase px-3 py-1 rounded-full">
                  2024/2025 Admissions
                </span>
                <h3 className="font-serif font-bold text-2xl text-white">Apply For This Program</h3>
                <p className="text-xs text-slate-300">
                  Fast-track online application process with immediate reference code generation.
                </p>
              </div>

              <div className="space-y-3">
                <Link
                  href={`/apply?program=${program.id}`}
                  className="w-full bg-ui-gold-500 hover:bg-ui-gold-400 text-ui-navy-950 font-bold py-4 rounded-xl text-sm transition-all shadow-lg flex items-center justify-center gap-2"
                >
                  <FileText className="w-5 h-5" />
                  Start Application Now
                </Link>

                <Link
                  href="/fees"
                  className="w-full bg-ui-navy-950 hover:bg-slate-900 border border-slate-700 text-slate-200 text-xs font-semibold py-3 rounded-xl flex items-center justify-center gap-2"
                >
                  Calculate Installment Plan
                </Link>
              </div>

              <div className="pt-4 border-t border-slate-800 text-[11px] text-slate-400 space-y-2">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-ui-gold-400 shrink-0" />
                  <span>University of Ibadan Senate Approved</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-ui-gold-400 shrink-0" />
                  <span>Classes starting Dec 2024</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
}
