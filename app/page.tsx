"use client";

import React, { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { AnnouncementTicker } from "@/components/AnnouncementTicker";
import { HeroSection } from "@/components/HeroSection";
import { HomeVisionMissionPreview } from "@/components/HomeVisionMissionPreview";
import { WhyUIConsultancy } from "@/components/WhyUIConsultancy";
import { FeaturedProgramsSection } from "@/components/FeaturedProgramsSection";
import { AdmissionsPathwaySection } from "@/components/AdmissionsPathwaySection";
import { DirectorsWelcomeSection } from "@/components/DirectorsWelcomeSection";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { NewsEventsSection } from "@/components/NewsEventsSection";
import { CallToActionBanner } from "@/components/CallToActionBanner";
import { Footer } from "@/components/Footer";
import { SearchModal } from "@/components/SearchModal";

export default function HomePage() {
  const [searchOpen, setSearchOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 font-sans selection:bg-ui-gold-500 selection:text-ui-navy-950">
      <Navbar onOpenSearch={() => setSearchOpen(true)} />
      <AnnouncementTicker />

      <main className="flex-grow">
        <HeroSection />
        <HomeVisionMissionPreview />
        <WhyUIConsultancy />
        <FeaturedProgramsSection />
        <AdmissionsPathwaySection />
        <DirectorsWelcomeSection />
        <TestimonialsSection />
        <NewsEventsSection />
        <CallToActionBanner />
      </main>

      <Footer />

      <SearchModal isOpen={searchOpen} onClose={() => setSearchOpen(false)} />
    </div>
  );
}
