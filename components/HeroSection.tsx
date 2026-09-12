"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { 
  ArrowRight, 
  ShieldCheck, 
  BookOpen, 
  ChevronLeft,
  ChevronRight,
  GraduationCap,
  Sparkles
} from "lucide-react";
import { ACADEMIC_IMAGES } from "@/data/images";

export const HeroSection: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % ACADEMIC_IMAGES.hero.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const handleNext = () => {
    setCurrentSlide((prev) => (prev + 1) % ACADEMIC_IMAGES.hero.length);
  };

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev - 1 + ACADEMIC_IMAGES.hero.length) % ACADEMIC_IMAGES.hero.length);
  };

  return (
    <section className="relative bg-ui-navy-950 text-white overflow-hidden border-b-4 border-ui-gold-500 font-sans min-h-[580px] flex items-center">
      {/* Background Images for Carousel */}
      {ACADEMIC_IMAGES.hero.map((slide, idx) => (
        <div
          key={idx}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            idx === currentSlide ? "opacity-100 z-0" : "opacity-0 z-0"
          }`}
        >
          <img
            src={slide.url}
            alt={slide.title}
            className="w-full h-full object-cover object-center scale-105 transition-transform duration-10000 ease-linear"
          />
          {/* Gradient overlay: dark dimmed on left side for text readability, clear on right for image visibility */}
          <div className="absolute inset-0 bg-gradient-to-r from-ui-navy-950 via-ui-navy-950/90 to-ui-navy-950/40" />
        </div>
      ))}

      {/* Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column - Empathetic Text & CTA */}
          <div className="lg:col-span-7 space-y-6">

            <div className="inline-flex items-center gap-2 bg-ui-gold-500/20 border border-ui-gold-400/40 px-3.5 py-1.5 rounded-full text-ui-gold-300 text-xs font-bold tracking-wide backdrop-blur-md">
              <ShieldCheck className="w-4 h-4 text-ui-gold-400" />
              <span>University of Ibadan Senate Accredited Programs</span>
            </div>

            <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-bold text-white leading-[1.15]">
              Your Pathway To <span className="text-ui-gold-400 font-serif italic">Executive Leadership</span> & Professional Success
            </h1>

            <p className="text-slate-200 text-base sm:text-lg leading-relaxed max-w-2xl font-normal drop-shadow-sm">
              You’ve worked hard to get your life going. Whether you are looking to advance in your current role, gain specialized expertise, or pivot into a new career, our flexible Executive Diplomas give you the recognized credential and confidence to rise higher.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1 text-xs sm:text-sm text-slate-100 font-medium">
              <div className="flex items-center gap-2 bg-ui-navy-900/60 p-2.5 rounded-lg border border-slate-700/60 backdrop-blur-sm">
                <GraduationCap className="w-4 h-4 text-ui-gold-400 shrink-0" />
                <span>100% Senate Approved Diplomas</span>
              </div>
              <div className="flex items-center gap-2 bg-ui-navy-900/60 p-2.5 rounded-lg border border-slate-700/60 backdrop-blur-sm">
                <Sparkles className="w-4 h-4 text-ui-gold-400 shrink-0" />
                <span>Practical Industry Skill Mastery</span>
              </div>
            </div>

            <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <Link
                href="/apply"
                className="bg-ui-gold-500 hover:bg-ui-gold-400 text-ui-navy-950 font-extrabold px-8 py-4 rounded-xl text-base transition-all shadow-xl hover:shadow-2xl text-center flex items-center justify-center gap-2"
              >
                Apply For Admission <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                href="/programs"
                className="bg-ui-navy-900/80 hover:bg-ui-navy-900 border border-slate-600 text-white font-bold px-7 py-4 rounded-xl text-base transition-all text-center flex items-center justify-center gap-2 backdrop-blur-md"
              >
                <BookOpen className="w-5 h-5 text-ui-gold-400" />
                Explore All Diplomas
              </Link>
            </div>

          </div>

          {/* Right Column - Carousel Info Badge & Media Navigator */}
          <div className="lg:col-span-5 flex flex-col justify-end items-end space-y-4">

            {/* Live Slide Caption Card */}
            <div className="w-full bg-ui-navy-900/80 border border-ui-gold-500/40 rounded-2xl p-6 shadow-2xl backdrop-blur-md space-y-3">
              <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                <span className="text-[10px] font-bold uppercase tracking-widest text-ui-gold-400 bg-ui-gold-500/10 px-2.5 py-0.5 rounded-full border border-ui-gold-500/20">
                  Campus Life & Facilities
                </span>
                <span className="text-xs font-mono font-bold text-slate-400">
                  0{currentSlide + 1} / 0{ACADEMIC_IMAGES.hero.length}
                </span>
              </div>

              <h3 className="font-serif font-bold text-lg text-white leading-snug">
                {ACADEMIC_IMAGES.hero[currentSlide].title}
              </h3>

              <p className="text-xs text-slate-300 leading-relaxed">
                {ACADEMIC_IMAGES.hero[currentSlide].caption}
              </p>

              {/* Navigation Controls */}
              <div className="pt-2 flex items-center justify-between border-t border-slate-800/80">
                <div className="flex gap-1.5">
                  {ACADEMIC_IMAGES.hero.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setCurrentSlide(idx)}
                      className={`h-2 rounded-full transition-all ${
                        idx === currentSlide ? "w-6 bg-ui-gold-400" : "w-2 bg-slate-600"
                      }`}
                      aria-label={`Go to slide ${idx + 1}`}
                    />
                  ))}
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={handlePrev}
                    className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 transition-colors"
                    aria-label="Previous slide"
                  >
                    <ChevronLeft className="w-4 h-4" />
                  </button>
                  <button
                    onClick={handleNext}
                    className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 transition-colors"
                    aria-label="Next slide"
                  >
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
