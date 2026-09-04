"use client";

import React from "react";
import Link from "next/link";
import { Bell, ArrowRight } from "lucide-react";

export const AnnouncementTicker: React.FC = () => {
  return (
    <div className="bg-ui-gold-500/10 border-y border-ui-gold-500/30 py-2 px-4 text-xs font-medium text-ui-navy-950 font-sans">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-4 overflow-hidden">
        <div className="flex items-center gap-2 shrink-0 font-semibold text-ui-navy-900">
          <Bell className="w-4 h-4 text-ui-gold-600 animate-bounce" />
          <span>Latest Announcement:</span>
        </div>
        <div className="truncate text-slate-700">
          <span className="font-semibold text-ui-navy-900">2024/2025 Academic Session:</span> First batch admission list for Postgraduate Diploma (Computer Science, Business Admin, HSE) released. Deadline for acceptance fee payment is Nov 30.
        </div>
        <Link
          href="/admissions"
          className="shrink-0 flex items-center gap-1 font-semibold text-ui-navy-900 hover:text-ui-gold-700 transition-colors"
        >
          Check List <ArrowRight className="w-3 h-3" />
        </Link>
      </div>
    </div>
  );
};
