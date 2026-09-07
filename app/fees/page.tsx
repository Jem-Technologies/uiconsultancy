"use client";

import React from "react";
import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { AnnouncementTicker } from "@/components/AnnouncementTicker";
import { FEE_GUIDELINES, GENERAL_BANK_ACCOUNTS } from "@/data/fees";
import {
  ShieldCheck,
  CreditCard,
  Building2,
  CheckCircle2,
  HelpCircle,
  ArrowRight,
  FileText
} from "lucide-react";

export default function FeesPage() {
  return (
    <div className="min-h-screen flex flex-col bg-slate-50 font-sans">
      <Navbar />
      <AnnouncementTicker />

      <section className="bg-ui-navy-950 text-white py-16 px-4 sm:px-6 lg:px-8 border-b-4 border-ui-gold-500 relative">
        <div className="max-w-7xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 bg-ui-gold-500/20 text-ui-gold-300 border border-ui-gold-500/40 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest">
            Tuition & Financial Policy Guidelines
          </div>
          <h1 className="font-serif text-3xl sm:text-5xl font-bold text-white">
            Flexible Financial Payment Options
          </h1>
          <p className="text-slate-200 text-sm sm:text-base max-w-3xl leading-relaxed">
            At University of Ibadan Consultancy Services Unit, we ensure that higher postgraduate education remains accessible and affordable for every motivated adult through flexible installment structures.
          </p>
        </div>
      </section>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 flex-grow w-full space-y-12">
        
        {/* Policy Overview Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm space-y-4">
            <div className="w-12 h-12 rounded-xl bg-ui-navy-900 text-ui-gold-400 flex items-center justify-center">
              <CreditCard className="w-6 h-6" />
            </div>
            <h3 className="font-serif font-bold text-xl text-ui-navy-900">Installment Structure</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Pay 60% of your academic fees at initial session registration, with the remaining 40% balance payable before the commencement of second-semester examinations.
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm space-y-4">
            <div className="w-12 h-12 rounded-xl bg-ui-gold-500 text-ui-navy-950 flex items-center justify-center">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <h3 className="font-serif font-bold text-xl text-ui-navy-900">Transparent & No Hidden Fees</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              All tuition, e-library access, portal activation, and examination processing charges are clearly outlined prior to matriculation with zero surprise levies.
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm space-y-4">
            <div className="w-12 h-12 rounded-xl bg-slate-900 text-white flex items-center justify-center">
              <Building2 className="w-6 h-6" />
            </div>
            <h3 className="font-serif font-bold text-xl text-ui-navy-900">Corporate & Employer Sponsorship</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Direct invoicing and customized corporate sponsorship schedules are available for organizationally backed applicants and civil servants.
            </p>
          </div>
        </div>

        {/* Breakdown Guidelines per Program */}
        <div className="bg-white rounded-2xl p-8 border border-slate-200 shadow-lg space-y-8">
          <div className="border-b border-slate-200 pb-4">
            <h2 className="font-serif font-bold text-2xl text-ui-navy-900">Program Tuition & Coverage Breakdown</h2>
            <p className="text-xs text-slate-500">Coverage and itemized components across major PGD tracks.</p>
          </div>

          <div className="space-y-8">
            {FEE_GUIDELINES.map((guide, idx) => (
              <div key={idx} className="p-6 bg-slate-50 rounded-xl border border-slate-200 space-y-4">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-200 pb-3">
                  <h3 className="font-serif font-bold text-lg text-ui-navy-900">{guide.programTitle}</h3>
                  <span className="text-xs font-bold text-emerald-700 bg-emerald-100 px-3 py-1 rounded-full border border-emerald-200 w-fit">
                    Installments Available
                  </span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
                  {guide.breakdown.map((item, bIdx) => (
                    <div key={bIdx} className="bg-white p-4 rounded-lg border border-slate-200 space-y-1">
                      <div className="font-bold text-ui-navy-900 flex items-center gap-1.5">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                        <span>{item.category}</span>
                      </div>
                      <p className="text-slate-600 text-[11px] leading-relaxed pl-5">{item.description}</p>
                    </div>
                  ))}
                </div>

                <div className="p-4 bg-ui-gold-500/10 border border-ui-gold-400/40 rounded-xl text-xs text-ui-navy-950 flex items-center justify-between gap-4">
                  <div>
                    <span className="font-bold">Payment Plan: </span>
                    <span>{guide.paymentOptions.installmentPlan}</span>
                  </div>
                  <Link
                    href={`/apply?program=${guide.programId}`}
                    className="bg-ui-navy-900 hover:bg-ui-navy-950 text-white font-bold px-4 py-2 rounded-lg text-xs shrink-0 flex items-center gap-1.5"
                  >
                    Apply Now <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bank Account Verification & Instructions */}
        <div className="bg-ui-navy-900 text-white rounded-2xl p-8 border-2 border-ui-gold-500 shadow-xl space-y-6">
          <div className="border-b border-slate-800 pb-4">
            <h3 className="font-serif font-bold text-2xl text-white">Official Bank Accounts & Remita Direct Pay</h3>
            <p className="text-xs text-slate-300">All tuition and application payments must be made strictly to designated University of Ibadan Consultancy accounts.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs">
            {GENERAL_BANK_ACCOUNTS.map((bank, bIdx) => (
              <div key={bIdx} className="bg-ui-navy-950 p-6 rounded-xl border border-slate-800 space-y-2">
                <div className="text-ui-gold-400 font-bold text-sm">{bank.bankName}</div>
                <div className="space-y-1 text-slate-300">
                  <div><span className="text-slate-500">Account Name:</span> <strong className="text-white">{bank.accountName}</strong></div>
                  <div><span className="text-slate-500">Account Number:</span> <strong className="text-ui-gold-300 font-mono text-base">{bank.accountNumber}</strong></div>
                  <div><span className="text-slate-500">Sort Code:</span> <span className="font-mono text-slate-300">{bank.sortCode}</span></div>
                </div>
              </div>
            ))}
          </div>

          <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-slate-800 text-xs">
            <div className="flex items-center gap-2 text-slate-300">
              <HelpCircle className="w-4 h-4 text-ui-gold-400 shrink-0" />
              <span>Need payment assistance or employer invoicing? Contact Bursary Desk: <strong>info@uiconsultancy.org | 0705 947 6180</strong></span>
            </div>
            <Link
              href="/portal"
              className="bg-ui-gold-500 hover:bg-ui-gold-400 text-ui-navy-950 font-bold px-6 py-2.5 rounded-lg shrink-0 flex items-center gap-1.5"
            >
              <FileText className="w-4 h-4" /> Go To Student Portal Receipts
            </Link>
          </div>
        </div>

      </main>

      <Footer />
    </div>
  );
}
