"use client";

import React from "react";
import { Star, Quote } from "lucide-react";

export const TestimonialsSection: React.FC = () => {
  const testimonials = [
    {
      name: "Engr. Babatunde Adeyemi",
      role: "Lead Systems Architect, FirstBank Nigeria",
      program: "PGD Computer Science & IT (2022 Cohort)",
      quote: "As an HND Electrical Engineering graduate, I needed a respected academic bridge to qualify for M.Sc studies and managerial roles. The UI Consultancy PGD provided rigorous computer science modules that enabled me to transition smoothly into senior cloud architecture.",
      badge: "HND to M.Sc Conversion Success"
    },
    {
      name: "Dr. Funmi Alabi-Okoro",
      role: "Senior Public Health Consultant, WHO West Africa",
      program: "PGD Occupational Health, Safety & Environment",
      quote: "The HSE Postgraduate Diploma curriculum at UI Consultancy was incredibly thorough. The practical industrial audit sessions and expert professors equipped me with safety governance frameworks that directly boosted my international consulting career.",
      badge: "Executive Career Acceleration"
    },
    {
      name: "Chidi Nwachukwu",
      role: "Operations Director, Zenith Maritime Logistics",
      program: "PGD Business Management & Administration",
      quote: "Balancing full-time job demands with postgraduate study was seamless thanks to the weekend executive delivery. The knowledge gained in financial management and corporate strategy gave me immediate ROI at my workplace.",
      badge: "Flexible Executive Delivery"
    }
  ];

  return (
    <section className="py-20 bg-white border-b border-slate-200 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 bg-ui-gold-500/10 text-ui-gold-800 border border-ui-gold-400 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest">
            Alumni & Student Impact
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-ui-navy-900">
            Real Stories of Career Transformation
          </h2>
          <p className="text-slate-600 text-sm sm:text-base">
            Discover how UI Consultancy Postgraduate Diplomas empower graduates to elevate their professions and achieve academic excellence.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((item, idx) => (
            <div
              key={idx}
              className="bg-slate-50 rounded-2xl p-8 border border-slate-200 flex flex-col justify-between space-y-6 hover:shadow-lg transition-all"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="bg-ui-navy-900 text-white text-[10px] font-bold px-2.5 py-1 rounded">
                    {item.badge}
                  </span>
                  <div className="flex items-center text-ui-gold-500 gap-0.5">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                </div>

                <Quote className="w-8 h-8 text-ui-gold-600/40" />

                <p className="text-slate-700 text-xs sm:text-sm leading-relaxed italic">
                  "{item.quote}"
                </p>
              </div>

              <div className="pt-4 border-t border-slate-200 space-y-1">
                <h4 className="font-serif font-bold text-base text-ui-navy-900">
                  {item.name}
                </h4>
                <p className="text-xs text-slate-600 font-medium">{item.role}</p>
                <p className="text-[11px] text-ui-gold-700 font-semibold">{item.program}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
