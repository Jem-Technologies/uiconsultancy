"use client";

import React, { useState } from "react";
import Link from "next/link";
import { PROGRAMS, DEPARTMENTS } from "@/data/programs";
import { 
  Clock, 
  ArrowRight, 
  Layers 
} from "lucide-react";

export const FeaturedProgramsSection: React.FC = () => {
  const [selectedDepartment, setSelectedDepartment] = useState("All Departments");

  const filteredPrograms = selectedDepartment === "All Departments"
    ? PROGRAMS
    : PROGRAMS.filter((p) => p.department === selectedDepartment);

  return (
    <section className="py-20 bg-white border-b border-slate-200 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="space-y-2 max-w-2xl">
            <div className="inline-flex items-center gap-2 bg-ui-gold-500/10 text-ui-gold-800 border border-ui-gold-400 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest">
              Academic Catalog
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-ui-navy-900">
              Featured Postgraduate & Professional Diplomas
            </h2>
            <p className="text-slate-600 text-sm sm:text-base">
              Explore specialized diploma courses designed to upgrade your credentials and qualify you for higher degree studies.
            </p>
          </div>

          <Link
            href="/programs"
            className="inline-flex items-center gap-2 text-ui-navy-900 hover:text-ui-gold-600 font-bold text-sm shrink-0 underline"
          >
            View Full Program Directory <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 no-scrollbar">
          {DEPARTMENTS.map((dept) => {
            const active = selectedDepartment === dept;
            return (
              <button
                key={dept}
                onClick={() => setSelectedDepartment(dept)}
                className={`px-4 py-2 rounded-full text-xs font-bold whitespace-nowrap transition-all border ${
                  active
                    ? "bg-ui-navy-900 text-white border-ui-navy-900 shadow-md"
                    : "bg-slate-100 text-slate-700 border-slate-200 hover:bg-slate-200"
                }`}
              >
                {dept}
              </button>
            );
          })}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPrograms.map((program) => (
            <div
              key={program.id}
              className="bg-white rounded-2xl border border-slate-200 shadow-sm hover:shadow-xl transition-all flex flex-col justify-between overflow-hidden group hover:border-ui-navy-900/30"
            >
              <div className="p-6 space-y-4">
                <div className="flex items-start justify-between gap-2">
                  <span className="bg-ui-navy-900/10 text-ui-navy-900 border border-ui-navy-900/20 text-[11px] font-bold px-2.5 py-1 rounded-md">
                    {program.level}
                  </span>
                  <span className="text-xs text-slate-500 font-mono">
                    {program.code}
                  </span>
                </div>

                <h3 className="font-serif font-bold text-xl text-ui-navy-900 group-hover:text-ui-gold-700 transition-colors leading-snug">
                  {program.title}
                </h3>

                <p className="text-slate-600 text-xs leading-relaxed line-clamp-3">
                  {program.description}
                </p>

                <div className="pt-2 border-t border-slate-100 grid grid-cols-2 gap-3 text-xs text-slate-600">
                  <div className="flex items-center gap-1.5">
                    <Clock className="w-4 h-4 text-ui-gold-600 shrink-0" />
                    <span>{program.duration}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Layers className="w-4 h-4 text-ui-gold-600 shrink-0" />
                    <span>{program.mode}</span>
                  </div>
                </div>
              </div>

              <div className="p-6 bg-slate-50 border-t border-slate-100 flex items-center justify-between">
                <div>
                  <span className="text-[10px] uppercase font-bold text-slate-400 block">Admissions</span>
                  <span className="text-xs font-bold text-emerald-700 bg-emerald-100/80 px-2.5 py-0.5 rounded-md inline-block mt-0.5">
                    Applications Open
                  </span>
                </div>

                <Link
                  href={`/programs/${program.id}`}
                  className="bg-ui-navy-900 hover:bg-ui-navy-950 text-white font-semibold text-xs px-4 py-2.5 rounded-lg transition-all flex items-center gap-1.5 group-hover:bg-ui-gold-600 group-hover:text-ui-navy-950"
                >
                  <span>View Program Details</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
