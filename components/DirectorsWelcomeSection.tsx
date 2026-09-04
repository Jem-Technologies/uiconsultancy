"use client";

import React from "react";
import { GraduationCap, Quote, Award } from "lucide-react";

export const DirectorsWelcomeSection: React.FC = () => {
  return (
    <section className="py-20 bg-ui-cream border-b border-slate-200 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-5 space-y-4">
            <div className="relative rounded-2xl bg-ui-navy-900 border-2 border-ui-gold-500 p-8 shadow-xl text-white space-y-6">
              <div className="w-20 h-20 rounded-full bg-ui-navy-800 border-2 border-ui-gold-400 flex items-center justify-center mx-auto shadow-inner">
                <GraduationCap className="w-10 h-10 text-ui-gold-400" />
              </div>

              <div className="text-center space-y-1">
                <h3 className="font-serif font-bold text-xl text-white">
                  Prof. K. O. Oloyede
                </h3>
                <p className="text-xs text-ui-gold-400 font-semibold tracking-wider uppercase">
                  Director & Board Chairman
                </p>
                <p className="text-[11px] text-slate-300 font-sans">
                  UI Consultancy Services Board, University of Ibadan
                </p>
              </div>

              <div className="pt-4 border-t border-slate-800 text-xs text-slate-300 space-y-2">
                <div className="flex items-center gap-2">
                  <Award className="w-4 h-4 text-ui-gold-400 shrink-0" />
                  <span>Ph.D., F.N.I.M., M.N.C.S.</span>
                </div>
                <div className="flex items-center gap-2">
                  <GraduationCap className="w-4 h-4 text-ui-gold-400 shrink-0" />
                  <span>Over 30 Years of Higher Education & Consultancy Leadership</span>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 bg-ui-gold-500/10 text-ui-gold-800 border border-ui-gold-400 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest">
              Executive Message
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-ui-navy-900 leading-tight">
              Welcome to the University of Ibadan Consultancy Services Unit
            </h2>

            <div className="relative text-slate-700 text-sm sm:text-base leading-relaxed space-y-4 pl-6 border-l-4 border-ui-gold-500">
              <Quote className="w-8 h-8 text-ui-gold-500/30 absolute -top-4 -left-3" />
              
              <p>
                “On behalf of the Governing Board, Senate, and Management of the University of Ibadan, I am delighted to welcome prospective candidates, students, and institutional partners to our official Consultancy portal.
              </p>
              <p>
                Since our inception, our core mission has been to extend the reach of world-class tertiary education beyond traditional undergraduate walls. We recognize that today's global economy demands continuous professional upskilling, practical mastery, and academic bridging.
              </p>
              <p>
                Whether you are an HND graduate seeking a Postgraduate Diploma (PGD) to bridge into Master’s degree studies, or an executive looking to master specialized fields like Cybersecurity, Data Analytics, Project Management, or HSE, our programs are engineered to give you a definitive competitive edge.”
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
