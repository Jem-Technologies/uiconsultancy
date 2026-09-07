"use client";

import React from "react";
import Link from "next/link";
import { CheckCircle2, ShieldCheck, HelpCircle, ArrowRight } from "lucide-react";

export const FeeCalculator: React.FC = () => {
  return (
    <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm space-y-6 font-sans">
      <div className="flex items-center gap-3 border-b border-slate-100 pb-4">
        <div className="w-10 h-10 rounded-xl bg-ui-navy-900 text-ui-gold-400 flex items-center justify-center font-bold">
          <ShieldCheck className="w-5 h-5" />
        </div>
        <div>
          <h3 className="font-bold text-lg text-ui-navy-900">Tuition & Financial Guidance</h3>
          <p className="text-xs text-slate-500">Flexible installment options for working professionals</p>
        </div>
      </div>

      <div className="space-y-4 text-sm text-slate-600 leading-relaxed">
        <p>
          We believe financial constraints shouldn&apos;t stand between you and your professional advancement. University of Ibadan Consultancy Services offers transparent fee structures with manageable installment schedules.
        </p>

        <div className="bg-slate-50 rounded-xl p-4 border border-slate-200 space-y-3">
          <h4 className="font-bold text-ui-navy-900 text-xs uppercase tracking-wider">Financial Policy Highlights</h4>
          <ul className="space-y-2 text-xs text-slate-700">
            <li className="flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
              <span><strong>Semester Installments:</strong> Pay 60% upon registration and 40% mid-session before final semester assessments.</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
              <span><strong>No Hidden Charges:</strong> All library, portal, and exam processing costs are transparently detailed before matriculation.</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
              <span><strong>Corporate Sponsorship:</strong> Employer-sponsored direct invoicing and flexible flexible payment plans available.</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="pt-2 flex flex-col sm:flex-row gap-3">
        <Link
          href="/fees"
          className="flex-1 bg-ui-navy-900 hover:bg-ui-navy-950 text-white font-semibold text-xs py-3 px-4 rounded-xl text-center flex items-center justify-center gap-2 transition-colors"
        >
          View Full Fee Breakdown <ArrowRight className="w-4 h-4 text-ui-gold-400" />
        </Link>
        <Link
          href="/contact"
          className="bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold text-xs py-3 px-4 rounded-xl text-center flex items-center justify-center gap-2 transition-colors"
        >
          <HelpCircle className="w-4 h-4 text-slate-500" /> Contact Bursary Desk
        </Link>
      </div>
    </div>
  );
};
