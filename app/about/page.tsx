"use client";

import React from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { AnnouncementTicker } from "@/components/AnnouncementTicker";
import { GraduationCap, Compass, Target } from "lucide-react";

export default function AboutPage() {
  const boardMembers = [
    { name: "Prof. K. O. Oloyede", title: "Chairman, Governing Board", dept: "UI Consultancy Unit" },
    { name: "Prof. A. I. Olayinka", title: "Board Member & Ex-Vice Chancellor", dept: "University of Ibadan" },
    { name: "Dr. Mrs. Y. A. Akinloye", title: "Managing Director / Secretary", dept: "UI Consultancy Services Unit" },
    { name: "Engr. Folorunsho Alakija", title: "Industry Advisory Member", dept: "Corporate Governance" }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 font-sans">
      <Navbar />
      <AnnouncementTicker />

      <section className="bg-ui-navy-950 text-white py-16 px-4 sm:px-6 lg:px-8 border-b-4 border-ui-gold-500 relative">
        <div className="max-w-7xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 bg-ui-gold-500/10 text-ui-gold-300 border border-ui-gold-500/30 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest">
            Institutional Identity
          </div>
          <h1 className="font-serif text-3xl sm:text-5xl font-bold text-white">
            About UI Consultancy Services Unit
          </h1>
          <p className="text-slate-300 text-sm sm:text-base max-w-3xl leading-relaxed">
            Discover Nigeria’s premier university consultancy unit dedicated to professional human capital development, Senate-accredited postgraduate diplomas, and industry-oriented executive training.
          </p>
        </div>
      </section>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 flex-grow w-full space-y-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm space-y-4">
            <div className="w-12 h-12 rounded-xl bg-ui-navy-900 text-ui-gold-400 flex items-center justify-center">
              <Compass className="w-6 h-6" />
            </div>
            <h3 className="font-serif font-bold text-2xl text-ui-navy-900">Our Vision</h3>
            <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
              To be the foremost university-based consultancy unit in Africa, recognized for excellence in post-graduate education, executive development, and high-impact advisory services that drive national development.
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm space-y-4">
            <div className="w-12 h-12 rounded-xl bg-ui-gold-600 text-ui-navy-950 flex items-center justify-center">
              <Target className="w-6 h-6" />
            </div>
            <h3 className="font-serif font-bold text-2xl text-ui-navy-900">Our Mission</h3>
            <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
              To bridge higher academic research with industrial performance through Senate-accredited postgraduate diplomas, flexible executive delivery modes, and practical skill mastery tailored for modern global professionals.
            </p>
          </div>
        </div>

        <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-xl space-y-8">
          <div className="border-b border-slate-200 pb-4">
            <h2 className="font-serif font-bold text-2xl text-ui-navy-900">Governing Board & Leadership</h2>
            <p className="text-xs text-slate-500">Chaired by senior University of Ibadan professors and industry leaders.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {boardMembers.map((member, idx) => (
              <div key={idx} className="bg-slate-50 p-6 rounded-xl border border-slate-200 text-center space-y-3">
                <div className="w-16 h-16 rounded-full bg-ui-navy-900 border-2 border-ui-gold-400 text-ui-gold-400 flex items-center justify-center mx-auto shadow">
                  <GraduationCap className="w-8 h-8" />
                </div>
                <div>
                  <h4 className="font-serif font-bold text-base text-ui-navy-900">{member.name}</h4>
                  <p className="text-xs font-semibold text-ui-gold-700">{member.title}</p>
                  <p className="text-[11px] text-slate-500">{member.dept}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </main>

      <Footer />
    </div>
  );
}
