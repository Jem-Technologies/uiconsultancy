"use client";

import React from "react";
import { Quote, Award, ShieldCheck } from "lucide-react";
import { ACADEMIC_IMAGES } from "@/data/images";

export const DirectorsWelcomeSection: React.FC = () => {
  return (
    <section className="py-20 bg-ui-cream border-b border-slate-200 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-5 space-y-4">
            <div className="relative rounded-2xl bg-ui-navy-900 border-2 border-ui-gold-500 overflow-hidden shadow-2xl text-white">
              <img
                src={ACADEMIC_IMAGES.director}
                alt="Dr. Mrs. Y. A. Akinloye - Director"
                className="w-full h-72 object-cover object-top"
              />
              <div className="p-6 bg-ui-navy-950 space-y-3">
                <div className="space-y-1">
                  <h3 className="font-serif font-bold text-xl text-white">
                    Dr. Mrs. Y. A. Akinloye
                  </h3>
                  <p className="text-xs text-ui-gold-400 font-semibold tracking-wider uppercase">
                    Managing Director / Secretary
                  </p>
                  <p className="text-[11px] text-slate-300">
                    UI Consultancy Services Unit, University of Ibadan
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-800 text-xs text-slate-300 space-y-1.5">
                  <div className="flex items-center gap-2">
                    <Award className="w-4 h-4 text-ui-gold-400 shrink-0" />
                    <span>Ph.D., Executive Management Consultant</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-ui-gold-400 shrink-0" />
                    <span>Over 25 Years of Human Capital Development Leadership</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 bg-ui-gold-500/10 text-ui-gold-800 border border-ui-gold-400 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest">
              Director&apos;s Welcome
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-ui-navy-900 leading-tight">
              A Personal Welcome To Our Prospective Students & Career Switchers
            </h2>

            <div className="relative text-slate-700 text-sm sm:text-base leading-relaxed space-y-4 pl-6 border-l-4 border-ui-gold-500">
              <Quote className="w-8 h-8 text-ui-gold-500/30 absolute -top-4 -left-3" />
              
              <p>
                “On behalf of the Governing Council and Management of the University of Ibadan Consultancy Services Unit, I extend a warm and encouraging welcome to you.
              </p>
              <p>
                We know that balancing work, personal life, and professional development can feel challenging. Many of our students arrive seeking career advancement and practical mastery. Our mission is to provide you with industry-relevant skills, recognized credentials, and the confidence to lead.
              </p>
              <p>
                Through our Senate-approved Executive Diplomas, weekend blended schedules, and dedicated faculty, we provide you with practical tools for professional growth and leadership promotion. You will find an encouraging environment designed to see you succeed.”
              </p>
            </div>

            <div className="pt-4 flex items-center justify-between border-t border-slate-200 text-xs text-slate-500">
              <span>University of Ibadan Campus, Ibadan, Oyo State</span>
              <span className="font-serif font-bold text-ui-navy-900">Recti Cultus Pectora Roborant</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
