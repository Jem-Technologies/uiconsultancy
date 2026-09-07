"use client";

import React from "react";
import Link from "next/link";
import { 
  FileCheck, 
  CreditCard, 
  UserCheck, 
  GraduationCap, 
  ArrowRight 
} from "lucide-react";

export const AdmissionsPathwaySection: React.FC = () => {
  const steps = [
    {
      step: "01",
      title: "Simple Application Form",
      description: "Fill out our straightforward online form with your basic personal details, educational background (SSCE, OND, HND, or B.Sc), and preferred study program.",
      icon: FileCheck
    },
    {
      step: "02",
      title: "Flexible Registration",
      description: "Submit your details without stress. Our friendly admissions advisors review your background and guide you every step of the way.",
      icon: CreditCard
    },
    {
      step: "03",
      title: "Upload Your Documents",
      description: "Easily upload clear scanned copies or photos of your certificates, statement of results, or O'Level credits from your phone or computer.",
      icon: UserCheck
    },
    {
      step: "04",
      title: "Get Admitted & Start Learning",
      description: "Receive your official University of Ibadan Consultancy admission confirmation letter and join your online or weekend lectures with full confidence.",
      icon: GraduationCap
    }
  ];

  return (
    <section className="py-20 bg-ui-navy-950 text-white relative overflow-hidden border-b border-slate-800 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 bg-ui-gold-500/10 text-ui-gold-300 border border-ui-gold-500/30 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest">
            Simplified Enrollment
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-white">
            4-Step Seamless Admission Pathway
          </h2>
          <p className="text-slate-300 text-sm sm:text-base">
            From application to matriculation: Our streamlined admissions portal gets you enrolled in under 10 minutes.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {steps.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="bg-ui-navy-900 border border-slate-800 p-8 rounded-2xl relative space-y-4 hover:border-ui-gold-500/50 transition-all group"
              >
                <div className="flex items-center justify-between">
                  <span className="text-3xl font-serif font-extrabold text-ui-gold-400 opacity-80">
                    {item.step}
                  </span>
                  <div className="w-10 h-10 rounded-xl bg-ui-navy-950 border border-slate-700 flex items-center justify-center group-hover:border-ui-gold-400 transition-colors">
                    <Icon className="w-5 h-5 text-ui-gold-400" />
                  </div>
                </div>

                <h3 className="font-serif font-bold text-lg text-white group-hover:text-ui-gold-300 transition-colors">
                  {item.title}
                </h3>

                <p className="text-slate-400 text-xs leading-relaxed">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>

        <div className="mt-12 text-center">
          <Link
            href="/apply"
            className="inline-flex items-center gap-2 bg-ui-gold-500 hover:bg-ui-gold-400 text-ui-navy-950 font-bold px-8 py-3.5 rounded-md text-sm transition-all shadow-md"
          >
            Start Your Admission Application Now <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

      </div>
    </section>
  );
};
