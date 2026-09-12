"use client";

import React from "react";
import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { AnnouncementTicker } from "@/components/AnnouncementTicker";
import { ACADEMIC_IMAGES } from "@/data/images";
import {
  GraduationCap,
  Compass,
  Target,
  Award,
  ShieldCheck,
  BookOpen,
  CheckCircle2,
  Users,
  Building2,
  ArrowRight
} from "lucide-react";

export default function AboutPage() {
  const boardMembers = [
    { name: "Prof. K. O. Oloyede", title: "Chairman, Governing Board", dept: "UI Consultancy Services Unit", image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=400&auto=format&fit=crop" },
    { name: "Prof. A. I. Olayinka", title: "Board Member & Ex-Vice Chancellor", dept: "University of Ibadan", image: "https://images.unsplash.com/photo-1531384441138-2736e62e0919?q=80&w=400&auto=format&fit=crop" },
    { name: "Dr. Mrs. Y. A. Akinloye", title: "Managing Director / Secretary", dept: "UI Consultancy Services Unit", image: ACADEMIC_IMAGES.director },
    { name: "Engr. Folorunsho Alakija", title: "Industry Advisory Member", dept: "Corporate Governance Council", image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=400&auto=format&fit=crop" }
  ];

  const coreValues = [
    { title: "Academic Integrity", desc: "100% adherence to University of Ibadan Senate rigorous academic standards." },
    { title: "Empathetic Inclusivity", desc: "Empowering HND holders and Third-Class graduates to rebuild academic confidence." },
    { title: "Executive Relevance", desc: "Curricula continuously updated by industry leaders and veteran professors." },
    { title: "Flexible Learning", desc: "Blended weekend classes and digital distance learning designed around busy jobs." }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 font-sans">
      <Navbar />
      <AnnouncementTicker />

      {/* Hero Header */}
      <section className="bg-ui-navy-950 text-white py-16 px-4 sm:px-6 lg:px-8 border-b-4 border-ui-gold-500 relative overflow-hidden">
        <div className="max-w-7xl mx-auto space-y-4 relative z-10">
          <div className="inline-flex items-center gap-2 bg-ui-gold-500/20 text-ui-gold-300 border border-ui-gold-500/40 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest">
            Institutional Identity & Mandate
          </div>
          <h1 className="font-serif text-3xl sm:text-5xl font-bold text-white leading-tight">
            About UI Consultancy Services Unit
          </h1>
          <p className="text-slate-200 text-base sm:text-lg max-w-3xl leading-relaxed">
            The official human capital development arm of Nigeria’s first university. Dedicated to bridging academic excellence with professional achievement for over four decades.
          </p>
        </div>
      </section>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 flex-grow w-full space-y-16">

        {/* Story & Background Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-6">
            <span className="text-xs font-bold text-ui-gold-700 uppercase tracking-widest block">Our Heritage</span>
            <h2 className="font-serif font-bold text-3xl sm:text-4xl text-ui-navy-900 leading-tight">
              Nigeria’s Premier Academic Heritage & Executive Training
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              Established as an integral unit of the University of Ibadan, the Consultancy Services Unit is tasked with extending the institution&apos;s world-class faculty expertise, research capabilities, and academic accreditation to working adults, civil servants, and corporate organizations across West Africa.
            </p>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              We specialize in Senate-approved Executive Diplomas, Higher Diplomas, and Professional Certifications tailored to allow working individuals upgrade their practical skills, earn recognized credentials, and pivot into thriving new career fields.
            </p>

            <div className="pt-2 flex items-center gap-6 text-xs text-slate-700 font-semibold">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                <span>100% Senate Accredited</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                <span>Over 15,000 Alumni</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="relative rounded-2xl overflow-hidden border-4 border-ui-gold-500 shadow-2xl">
              <img
                src={ACADEMIC_IMAGES.campusBuilding}
                alt="University of Ibadan Campus"
                className="w-full h-[380px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ui-navy-950/80 via-transparent to-transparent flex items-end p-6 text-white">
                <div>
                  <h4 className="font-serif font-bold text-lg text-ui-gold-400">University of Ibadan Campus</h4>
                  <p className="text-xs text-slate-200">The first university in Nigeria, founded in 1948.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Vision & Mission Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-lg space-y-4 hover:border-ui-gold-500/50 transition-all">
            <div className="w-12 h-12 rounded-xl bg-ui-navy-900 text-ui-gold-400 flex items-center justify-center">
              <Compass className="w-6 h-6" />
            </div>
            <h3 className="font-serif font-bold text-2xl text-ui-navy-900">Our Vision</h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              To be the foremost university consultancy unit in Africa, recognized globally for excellence in professional executive education, executive capacity development, and high-impact advisory services that advance career mobility and national development.
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-lg space-y-4 hover:border-ui-gold-500/50 transition-all">
            <div className="w-12 h-12 rounded-xl bg-ui-gold-500 text-ui-navy-950 flex items-center justify-center">
              <Target className="w-6 h-6" />
            </div>
            <h3 className="font-serif font-bold text-2xl text-ui-navy-900">Our Mission</h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              To bridge higher academic research with industrial performance through Senate-accredited executive diplomas, flexible executive delivery modes, and practical skill mastery tailored for modern global professionals.
            </p>
          </div>
        </div>

        {/* Core Values */}
        <div className="bg-ui-navy-900 text-white rounded-2xl p-8 sm:p-12 space-y-8 border-2 border-ui-gold-500/40 shadow-2xl">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs font-bold text-ui-gold-400 uppercase tracking-widest">Pillars of Excellence</span>
            <h3 className="font-serif font-bold text-3xl text-white">Our Core Institutional Values</h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {coreValues.map((val, idx) => (
              <div key={idx} className="bg-ui-navy-950 p-6 rounded-xl border border-slate-800 space-y-2">
                <div className="text-ui-gold-400 font-serif font-bold text-lg">{val.title}</div>
                <p className="text-slate-300 text-xs leading-relaxed">{val.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Facilities Preview */}
        <div className="bg-white rounded-2xl p-8 border border-slate-200 shadow-lg space-y-8">
          <div className="border-b border-slate-200 pb-4 flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <h3 className="font-serif font-bold text-2xl text-ui-navy-900">Campus Facilities & Learning Environment</h3>
              <p className="text-xs text-slate-500">Equipped for physical weekend lectures, executive labs, and digital e-learning.</p>
            </div>
            <Link href="/programs" className="text-xs font-bold text-ui-navy-900 hover:text-ui-gold-600 flex items-center gap-1">
              Explore Programs & Schedule <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="rounded-xl overflow-hidden border border-slate-200 group">
              <img src={ACADEMIC_IMAGES.computerLab} alt="Computer Lab" className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500" />
              <div className="p-4 bg-white space-y-1">
                <h4 className="font-serif font-bold text-base text-ui-navy-900">Modern IT & Cloud Sandboxes</h4>
                <p className="text-xs text-slate-500">Enterprise software tools, Python/Java IDEs, and network labs.</p>
              </div>
            </div>

            <div className="rounded-xl overflow-hidden border border-slate-200 group">
              <img src={ACADEMIC_IMAGES.studentsStudying} alt="Executive Classrooms" className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500" />
              <div className="p-4 bg-white space-y-1">
                <h4 className="font-serif font-bold text-base text-ui-navy-900">Interactive Executive Halls</h4>
                <p className="text-xs text-slate-500">Air-conditioned lecture rooms equipped with digital multimedia projectors.</p>
              </div>
            </div>

            <div className="rounded-xl overflow-hidden border border-slate-200 group">
              <img src={ACADEMIC_IMAGES.graduation} alt="Graduation" className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500" />
              <div className="p-4 bg-white space-y-1">
                <h4 className="font-serif font-bold text-base text-ui-navy-900">Annual Convocation Ceremonies</h4>
                <p className="text-xs text-slate-500">Official University of Ibadan graduation and certificate issuance.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Leadership & Governing Board */}
        <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-xl space-y-8">
          <div className="border-b border-slate-200 pb-4">
            <h2 className="font-serif font-bold text-2xl text-ui-navy-900">Governing Board & Leadership</h2>
            <p className="text-xs text-slate-500">Guided by distinguished University of Ibadan scholars and corporate executives.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {boardMembers.map((member, idx) => (
              <div key={idx} className="bg-slate-50 p-6 rounded-xl border border-slate-200 text-center space-y-3 hover:border-ui-gold-500/50 transition-all">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-20 h-20 rounded-full object-cover border-2 border-ui-gold-500 mx-auto shadow-md"
                />
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
