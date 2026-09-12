"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { AnnouncementTicker } from "@/components/AnnouncementTicker";
import {
  Camera,
  Sparkles,
  GraduationCap,
  Building2,
  Users,
  BookOpen,
  ArrowRight,
  Filter
} from "lucide-react";

export default function GalleryPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");

  const categories = [
    { id: "all", label: "All Highlights" },
    { id: "matriculation", label: "Matriculation & Convocation" },
    { id: "lectures", label: "Executive Lectures & Labs" },
    { id: "campus", label: "Campus Infrastructure" },
    { id: "seminars", label: "Seminars & Workshops" },
  ];

  const galleryItems = [
    {
      id: 1,
      title: "2026 Executive Matriculation Ceremony",
      category: "matriculation",
      date: "February 2026",
      location: "Trenchard Hall, University of Ibadan Main Campus",
      image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=1200&auto=format&fit=crop",
      description: "Official inauguration and matriculation swearing-in ceremony for the 2026 cohort of Executive Diploma and Higher Executive Diploma scholars in the iconic Trenchard Hall.",
      highlights: ["Over 1,200 executive candidates matriculated", "Keynote address by UI Senate representatives", "Formal Oath taking and academic gown presentation"]
    },
    {
      id: 2,
      title: "Executive Weekend Computer Science & Data Analytics Lab Session",
      category: "lectures",
      date: "January 2026",
      location: "UI Consultancy ICT Innovation Lab",
      image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=1200&auto=format&fit=crop",
      description: "Hands-on coding, machine learning modeling, and database systems practical workshop for Diploma in Computer Science and Data Analytics students.",
      highlights: ["State-of-the-art workstation facilities", "1-on-1 mentorship from industry senior engineers", "Real-world enterprise system case studies"]
    },
    {
      id: 3,
      title: "UI Consultancy Administrative Headquarters",
      category: "campus",
      date: "2026",
      location: "Commercial Avenue, UI Campus",
      image: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=1200&auto=format&fit=crop",
      description: "The dedicated administrative and executive building housing admission consultation desks, bursary, e-library resource center, and lecture halls.",
      highlights: ["Serene academic environment", "24/7 solar backup energy infrastructure", "Centralized student support desks"]
    },
    {
      id: 4,
      title: "Health, Safety & HSE Management Field Practical",
      category: "seminars",
      date: "January 2026",
      location: "Faculty of Technology Field Complex",
      image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=1200&auto=format&fit=crop",
      description: "Diploma in Health, Safety & Environmental Management students conducting industrial risk assessment, hazardous material drill, and safety protocol audits.",
      highlights: ["Certified safety equipment demonstration", "Emergency response simulation", "OSHA & NISafety guidelines integration"]
    },
    {
      id: 5,
      title: "Executive Business Leadership & Strategy Symposium",
      category: "seminars",
      date: "December 2025",
      location: "UI International Conference Center",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1200&auto=format&fit=crop",
      description: "Interactive executive masterclass featuring guest lectures from multinational CEOs, financial consultants, and public sector administrators.",
      highlights: ["Networking with corporate leaders", "Panel discussions on African economic policy", "Presentation of executive case studies"]
    },
    {
      id: 6,
      title: "Class of 2025 Graduation & Award Ceremony",
      category: "matriculation",
      date: "November 2025",
      location: "University of Ibadan Convocation Arena",
      image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=1200&auto=format&fit=crop",
      description: "Celebrating academic excellence and official Senate transcript conferment for graduating Diploma and Higher Diploma candidates.",
      highlights: ["Valedictory speeches & top GPA recognitions", "Senate certificate distribution", "Alumni network onboarding"]
    },
    {
      id: 7,
      title: "Modern Executive Smart Classroom",
      category: "campus",
      date: "2026",
      location: "Consultancy Executive Lecture Wings",
      image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=1200&auto=format&fit=crop",
      description: "Equipped with interactive smart displays, hybrid video-conferencing systems, and ergonomic seating designed for working professionals.",
      highlights: ["Hybrid remote participation integration", "Climate-controlled lecture environments", "High-speed optical fiber connectivity"]
    },
    {
      id: 8,
      title: "Public Health & Statistics Research Presentation",
      category: "lectures",
      date: "February 2026",
      location: "UI Consultancy E-Resource Seminar Room",
      image: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?q=80&w=1200&auto=format&fit=crop",
      description: "Diploma in Applied Statistics scholars defending capstone research projects in epidemiological modeling, biometric data analysis, and survey sampling.",
      highlights: ["SPSS, R, and Python data visualization", "Faculty peer reviews", "Publication-ready research methodology"]
    }
  ];

  const filteredItems = selectedCategory === "all"
    ? galleryItems
    : galleryItems.filter(item => item.category === selectedCategory);

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 font-sans">
      <Navbar />
      <AnnouncementTicker />

      {/* Hero Header */}
      <section className="bg-ui-navy-950 text-white py-16 px-4 sm:px-6 lg:px-8 border-b-4 border-ui-gold-500 relative">
        <div className="max-w-7xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 bg-ui-gold-500/10 text-ui-gold-300 border border-ui-gold-500/30 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest">
            <Camera className="w-3.5 h-3.5 text-ui-gold-400" />
            Institutional Media & Highlights
          </div>
          <h1 className="font-serif text-3xl sm:text-5xl font-bold text-white">
            Life at UI Consultancy Services Unit
          </h1>
          <p className="text-slate-300 text-sm sm:text-base max-w-3xl leading-relaxed">
            Explore our vibrant academic community in 2026. From matriculation ceremonies and hands-on laboratory practicals to executive leadership seminars and modern campus infrastructure.
          </p>
        </div>
      </section>

      {/* Main Gallery Section */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 flex-grow w-full space-y-10">

        {/* Category Filters */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2 no-scrollbar border-b border-slate-200">
          <span className="text-xs font-bold uppercase text-slate-500 shrink-0 mr-2 flex items-center gap-1">
            <Filter className="w-3.5 h-3.5" /> Filter by:
          </span>
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all shrink-0 ${
                selectedCategory === cat.id
                  ? "bg-ui-navy-900 text-white shadow-md border border-ui-gold-500/40"
                  : "bg-white text-slate-700 hover:bg-slate-100 border border-slate-200"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-2xl border border-slate-200 shadow-md hover:shadow-xl transition-all overflow-hidden flex flex-col group"
            >
              <div className="relative h-56 w-full overflow-hidden bg-slate-200">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-3 right-3 bg-ui-navy-950/80 backdrop-blur-md text-ui-gold-300 text-[10px] font-bold px-2.5 py-1 rounded-full border border-ui-gold-500/30 uppercase">
                  {item.date}
                </div>
              </div>

              <div className="p-6 flex-grow flex flex-col justify-between space-y-4">
                <div className="space-y-2">
                  <span className="text-[10px] font-bold uppercase text-ui-gold-700 tracking-wider block">
                    {item.location}
                  </span>
                  <h3 className="font-serif font-bold text-lg text-ui-navy-950 leading-snug group-hover:text-ui-gold-600 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-100 space-y-1.5 text-[11px] text-slate-700">
                  <strong className="text-slate-900 block font-semibold">Key Highlights:</strong>
                  <ul className="space-y-1 text-slate-600 list-disc list-inside">
                    {item.highlights.map((h, idx) => (
                      <li key={idx}>{h}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Informative Banner */}
        <div className="bg-ui-navy-900 text-white rounded-2xl p-8 sm:p-10 border border-ui-navy-800 shadow-xl flex flex-col lg:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center lg:text-left">
            <span className="bg-ui-gold-500/20 text-ui-gold-300 text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full border border-ui-gold-500/30">
              Academic Excellence 2026/2027
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl font-bold">
              Become Part of Our Next Success Story
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 max-w-2xl leading-relaxed">
              Applications for the 2026/2027 academic session are currently open. Join our executive diploma programs and gain university Senate accredited qualifications.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-4 shrink-0">
            <Link
              href="/apply"
              className="bg-ui-gold-500 hover:bg-ui-gold-400 text-ui-navy-950 font-bold text-xs sm:text-sm px-6 py-3.5 rounded-xl transition-all shadow-lg flex items-center gap-2"
            >
              Start Online Admission Application <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

      </main>

      <Footer />
    </div>
  );
}
