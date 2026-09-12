"use client";

import React from "react";
import Link from "next/link";
import { Target, Compass, Award, ArrowRight, ShieldCheck } from "lucide-react";
import { ACADEMIC_IMAGES } from "@/data/images";

export const HomeVisionMissionPreview: React.FC = () => {
  return (
    <section className="py-20 bg-white border-b border-slate-200 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 bg-ui-navy-900/5 text-ui-navy-900 border border-ui-navy-900/10 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest">
              Institutional Foundation & Values
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-ui-navy-900 leading-tight">
              Driven By Purpose, Built For <span className="text-ui-gold-700 italic font-serif">Your Career Growth</span>
            </h2>

            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              At University of Ibadan Consultancy Services, we believe everyone deserves a real second chance at academic excellence and professional fulfillment. We exist to bridge academic theory with real-world industry demands.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="bg-slate-50 p-5 rounded-2xl border border-slate-200 space-y-2">
                <div className="w-10 h-10 rounded-xl bg-ui-navy-900 text-ui-gold-400 flex items-center justify-center">
                  <Compass className="w-5 h-5" />
                </div>
                <h3 className="font-serif font-bold text-lg text-ui-navy-900">Our Vision</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  To be Africa&apos;s leading university consultancy unit, empowering working adults with Senate-approved qualifications for global impact.
                </p>
              </div>

              <div className="bg-slate-50 p-5 rounded-2xl border border-slate-200 space-y-2">
                <div className="w-10 h-10 rounded-xl bg-ui-gold-500 text-ui-navy-950 flex items-center justify-center">
                  <Target className="w-5 h-5" />
                </div>
                <h3 className="font-serif font-bold text-lg text-ui-navy-900">Our Mission</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  To provide accessible, flexible, and accredited executive education that fosters practical mastery and corporate leadership.
                </p>
              </div>
            </div>

            <div className="pt-2">
              <Link
                href="/about"
                className="inline-flex items-center gap-2 bg-ui-navy-900 hover:bg-ui-navy-950 text-white font-bold px-6 py-3.5 rounded-xl text-xs transition-all shadow-md group"
              >
                <span>Read Full Story & Governance</span>
                <ArrowRight className="w-4 h-4 text-ui-gold-400 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>

          <div className="lg:col-span-6 relative">
            <div className="relative rounded-2xl overflow-hidden border-4 border-ui-gold-500 shadow-2xl">
              <img
                src={ACADEMIC_IMAGES.studentsStudying}
                alt="University of Ibadan Diploma Students"
                className="w-full h-[400px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ui-navy-950/90 via-transparent to-transparent flex flex-col justify-end p-6 text-white">
                <div className="flex items-center gap-2 text-ui-gold-400 text-xs font-bold mb-1">
                  <ShieldCheck className="w-4 h-4" />
                  <span>University of Ibadan Heritage</span>
                </div>
                <p className="text-sm font-semibold text-slate-200">
                  Empowering over 15,000 working professionals across Nigeria and Africa with Senate-accredited diplomas.
                </p>
              </div>
            </div>

            <div className="absolute -bottom-6 -left-6 bg-ui-navy-900 text-white p-5 rounded-2xl border border-ui-gold-400/50 shadow-2xl hidden sm:flex items-center gap-4 max-w-xs">
              <div className="w-12 h-12 rounded-xl bg-ui-gold-500 text-ui-navy-950 flex items-center justify-center shrink-0">
                <Award className="w-6 h-6" />
              </div>
              <div>
                <div className="text-2xl font-serif font-bold text-ui-gold-400">100%</div>
                <div className="text-[11px] text-slate-300 font-medium">Senate Approved Diplomas</div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
