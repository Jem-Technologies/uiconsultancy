"use client";

import React, { useState } from "react";
import { PROGRAMS } from "@/data/programs";
import { formatCurrency } from "@/lib/utils";
import { Calculator, ShieldCheck, ArrowRight } from "lucide-react";
import Link from "next/link";

export const FeeCalculator: React.FC = () => {
  const [selectedProgramId, setSelectedProgramId] = useState(PROGRAMS[0].id);
  const [paymentPlan, setPaymentPlan] = useState<"lumpSum" | "twoInstallments">("lumpSum");

  const program = PROGRAMS.find((p) => p.id === selectedProgramId) || PROGRAMS[0];

  const baseTuition = program.tuition;
  const applicationFee = program.applicationFee;
  const acceptanceFee = 30000;
  const registrationFee = 20000;

  const totalBase = baseTuition + applicationFee + acceptanceFee + registrationFee;

  const discountAmount = paymentPlan === "lumpSum" ? Math.round(baseTuition * 0.05) : 0;
  const finalTotal = totalBase - discountAmount;

  const installment1 = Math.round((baseTuition * 0.6) + applicationFee + acceptanceFee + registrationFee);
  const installment2 = Math.round(baseTuition * 0.4);

  return (
    <div className="bg-white rounded-2xl border border-slate-200 shadow-xl overflow-hidden font-sans">
      <div className="bg-ui-navy-900 text-white p-6 sm:p-8 border-b-4 border-ui-gold-500">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-ui-gold-500/20 border border-ui-gold-400 flex items-center justify-center">
            <Calculator className="w-5 h-5 text-ui-gold-400" />
          </div>
          <div>
            <h3 className="font-serif font-bold text-xl text-white">Interactive Tuition & Fee Calculator</h3>
            <p className="text-xs text-slate-300">Estimate your total session investment and installment breakdowns.</p>
          </div>
        </div>
      </div>

      <div className="p-6 sm:p-8 space-y-8">
        
        <div className="space-y-2">
          <label className="block text-xs font-bold uppercase tracking-wider text-slate-700">
            Select Diploma / Postgraduate Program
          </label>
          <select
            value={selectedProgramId}
            onChange={(e) => setSelectedProgramId(e.target.value)}
            className="w-full px-4 py-3 bg-slate-50 border border-slate-300 rounded-xl text-sm font-semibold text-ui-navy-900 focus:outline-none focus:ring-2 focus:ring-ui-navy-900"
          >
            {PROGRAMS.map((p) => (
              <option key={p.id} value={p.id}>
                {p.title} ({p.code}) — {formatCurrency(p.tuition)}
              </option>
            ))}
          </select>
        </div>

        <div className="space-y-3">
          <label className="block text-xs font-bold uppercase tracking-wider text-slate-700">
            Select Payment Plan Strategy
          </label>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            
            <button
              type="button"
              onClick={() => setPaymentPlan("lumpSum")}
              className={`p-4 rounded-xl border text-left transition-all relative ${
                paymentPlan === "lumpSum"
                  ? "bg-ui-navy-900/5 border-ui-navy-900 ring-2 ring-ui-navy-900"
                  : "bg-slate-50 border-slate-200 hover:bg-slate-100"
              }`}
            >
              <div className="flex items-center justify-between">
                <span className="font-serif font-bold text-sm text-ui-navy-900">Full Annual Lump Sum</span>
                <span className="bg-emerald-100 text-emerald-800 text-[10px] font-bold px-2 py-0.5 rounded">
                  Save 5%
                </span>
              </div>
              <p className="text-xs text-slate-500 mt-1">Pay full tuition upfront at registration and receive a 5% early discount.</p>
            </button>

            <button
              type="button"
              onClick={() => setPaymentPlan("twoInstallments")}
              className={`p-4 rounded-xl border text-left transition-all relative ${
                paymentPlan === "twoInstallments"
                  ? "bg-ui-navy-900/5 border-ui-navy-900 ring-2 ring-ui-navy-900"
                  : "bg-slate-50 border-slate-200 hover:bg-slate-100"
              }`}
            >
              <div className="flex items-center justify-between">
                <span className="font-serif font-bold text-sm text-ui-navy-900">2-Part Semester Installment</span>
                <span className="bg-sky-100 text-sky-800 text-[10px] font-bold px-2 py-0.5 rounded">
                  Flexible
                </span>
              </div>
              <p className="text-xs text-slate-500 mt-1">Pay 60% tuition at Semester 1 and remaining 40% before Semester 2 exams.</p>
            </button>

          </div>
        </div>

        <div className="bg-slate-50 rounded-2xl p-6 border border-slate-200 space-y-4">
          <h4 className="font-serif font-bold text-base text-ui-navy-900 border-b border-slate-200 pb-2">
            Cost Calculation Summary
          </h4>

          <div className="space-y-2 text-xs text-slate-700">
            <div className="flex justify-between">
              <span>Application Processing Form</span>
              <span className="font-mono font-semibold">{formatCurrency(applicationFee)}</span>
            </div>
            <div className="flex justify-between">
              <span>Acceptance & Registration Fee</span>
              <span className="font-mono font-semibold">{formatCurrency(acceptanceFee + registrationFee)}</span>
            </div>
            <div className="flex justify-between">
              <span>Annual Tuition Fee</span>
              <span className="font-mono font-semibold">{formatCurrency(baseTuition)}</span>
            </div>

            {paymentPlan === "lumpSum" && (
              <div className="flex justify-between text-emerald-700 font-semibold">
                <span>5% Full Upfront Discount</span>
                <span className="font-mono">-{formatCurrency(discountAmount)}</span>
              </div>
            )}
          </div>

          <div className="pt-3 border-t border-slate-300 flex justify-between items-center text-sm">
            <span className="font-bold text-ui-navy-900 text-base">Estimated Total Investment</span>
            <span className="font-serif font-bold text-xl text-ui-navy-900">
              {formatCurrency(finalTotal)}
            </span>
          </div>

          {paymentPlan === "twoInstallments" && (
            <div className="p-4 bg-sky-50 border border-sky-200 rounded-xl space-y-2 text-xs text-sky-900">
              <div className="font-bold border-b border-sky-200 pb-1">Semester Payment Breakdown</div>
              <div className="flex justify-between">
                <span>Semester 1 Due (60% + Fees):</span>
                <span className="font-mono font-bold">{formatCurrency(installment1)}</span>
              </div>
              <div className="flex justify-between">
                <span>Semester 2 Due (40%):</span>
                <span className="font-mono font-bold">{formatCurrency(installment2)}</span>
              </div>
            </div>
          )}
        </div>

        <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-xs text-slate-500">
            <ShieldCheck className="w-4 h-4 text-ui-gold-600 shrink-0" />
            <span>Official UI Consultancy approved fee rates.</span>
          </div>

          <Link
            href={`/apply?program=${program.id}`}
            className="w-full sm:w-auto bg-ui-navy-900 hover:bg-ui-navy-950 text-white font-bold px-6 py-3 rounded-xl text-xs flex items-center justify-center gap-2 shadow"
          >
            Apply With This Payment Plan <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

      </div>
    </div>
  );
};
