"use client";

import React from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { AnnouncementTicker } from "@/components/AnnouncementTicker";
import { FeeCalculator } from "@/components/FeeCalculator";
import { GENERAL_BANK_ACCOUNTS } from "@/data/fees";
import { Building2 } from "lucide-react";

export default function FeesPage() {
  return (
    <div className="min-h-screen flex flex-col bg-slate-50 font-sans">
      <Navbar />
      <AnnouncementTicker />

      <section className="bg-ui-navy-950 text-white py-16 px-4 sm:px-6 lg:px-8 border-b-4 border-ui-gold-500 relative">
        <div className="max-w-7xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 bg-ui-gold-500/10 text-ui-gold-300 border border-ui-gold-500/30 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest">
            Financial Information
          </div>
          <h1 className="font-serif text-3xl sm:text-5xl font-bold text-white">
            Tuition Fees & Payment Schedules
          </h1>
          <p className="text-slate-300 text-sm sm:text-base max-w-3xl leading-relaxed">
            Clear, transparent fee structures for all postgraduate diplomas and executive programs, with flexible installment options and approved university bank accounts.
          </p>
        </div>
      </section>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 flex-grow w-full space-y-16">
        
        <FeeCalculator />

        <div className="bg-white rounded-2xl border border-slate-200 shadow-xl p-8 space-y-6">
          <div className="flex items-center gap-3 border-b border-slate-100 pb-4">
            <Building2 className="w-6 h-6 text-ui-navy-900" />
            <div>
              <h2 className="font-serif font-bold text-2xl text-ui-navy-900">
                Official Designated University Bank Accounts
              </h2>
              <p className="text-xs text-slate-500">
                Payments must be made into the official University of Ibadan Consultancy Services Unit accounts below:
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {GENERAL_BANK_ACCOUNTS.map((bank, idx) => (
              <div
                key={idx}
                className="bg-slate-50 p-6 rounded-xl border border-slate-200 space-y-3 relative overflow-hidden"
              >
                <div className="flex items-center justify-between">
                  <span className="font-serif font-bold text-lg text-ui-navy-900">{bank.bankName}</span>
                  <span className="bg-ui-gold-500 text-ui-navy-950 font-bold text-[10px] px-2.5 py-0.5 rounded uppercase">
                    Official
                  </span>
                </div>

                <div className="space-y-1 text-xs text-slate-700">
                  <div className="flex justify-between">
                    <span className="text-slate-500">Account Name:</span>
                    <strong className="text-slate-900">{bank.accountName}</strong>
                  </div>
                  <div className="flex justify-between text-sm pt-1">
                    <span className="text-slate-500">Account Number:</span>
                    <strong className="font-mono font-extrabold text-ui-navy-900 text-base">{bank.accountNumber}</strong>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-500">Sort Code:</span>
                    <strong className="font-mono text-slate-700">{bank.sortCode}</strong>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="p-4 bg-amber-50 border border-amber-200 rounded-xl text-xs text-amber-900">
            <strong>Important Payment Notice: </strong> Always upload your bank teller / transfer payment receipt on the portal or present it to the UI Consultancy Bursary Department to receive your official electronic university receipt.
          </div>
        </div>

      </main>

      <Footer />
    </div>
  );
}
