"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { 
  GraduationCap, 
  Menu, 
  X, 
  Search, 
  PhoneCall, 
  ShieldCheck,
  FileText
} from "lucide-react";

interface NavbarProps {
  onOpenSearch?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenSearch }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Programs", href: "/programs" },
    { name: "Admissions", href: "/admissions" },
    { name: "Tuition & Fees", href: "/fees" },
    { name: "Student Portal", href: "/portal" },
    { name: "Verification", href: "/verify" },
    { name: "About Us", href: "/about" },
  ];

  const isActive = (path: string) => {
    if (path === "/" && pathname === "/") return true;
    if (path !== "/" && pathname?.startsWith(path)) return true;
    return false;
  };

  return (
    <header className="sticky top-0 z-40 bg-white border-b border-slate-200 shadow-sm font-sans">
      {/* Top Portal & Access Bar */}
      <div className="bg-ui-navy-950 text-white text-xs py-2.5 px-4 border-b border-ui-gold-500/40 shadow-inner">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-2">
          <div className="flex items-center gap-2.5 overflow-x-auto no-scrollbar py-0.5 w-full md:w-auto">
            <span className="bg-ui-gold-500 text-ui-navy-950 font-extrabold px-2.5 py-0.5 rounded text-[10px] uppercase tracking-wider shrink-0 flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-ui-navy-950 animate-pulse"></span>
              PORTAL HUB
            </span>
            <Link
              href="/portal?tab=student"
              className="text-slate-100 hover:text-ui-gold-300 bg-ui-navy-900/80 hover:bg-ui-navy-900 px-2.5 py-1 rounded border border-slate-700/80 font-medium transition-all flex items-center gap-1.5 shrink-0 text-[11px]"
            >
              <GraduationCap className="w-3.5 h-3.5 text-ui-gold-400" /> Student Portal
            </Link>
            <Link
              href="/portal?tab=applicant"
              className="text-slate-100 hover:text-ui-gold-300 bg-ui-navy-900/80 hover:bg-ui-navy-900 px-2.5 py-1 rounded border border-slate-700/80 font-medium transition-all flex items-center gap-1.5 shrink-0 text-[11px]"
            >
              <FileText className="w-3.5 h-3.5 text-ui-gold-400" /> Applicant Portal & Registration
            </Link>
            <Link
              href="/portal?tab=staff"
              className="text-slate-100 hover:text-ui-gold-300 bg-ui-navy-900/80 hover:bg-ui-navy-900 px-2.5 py-1 rounded border border-slate-700/80 font-medium transition-all flex items-center gap-1.5 shrink-0 text-[11px]"
            >
              <ShieldCheck className="w-3.5 h-3.5 text-ui-gold-400" /> Staff & Lecturer Portal
            </Link>
            <Link
              href="/verify"
              className="text-slate-100 hover:text-ui-gold-300 bg-ui-navy-900/80 hover:bg-ui-navy-900 px-2.5 py-1 rounded border border-slate-700/80 font-medium transition-all flex items-center gap-1.5 shrink-0 text-[11px]"
            >
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" /> Verification
            </Link>
          </div>

          <div className="hidden lg:flex items-center gap-4 text-slate-300 text-[11px]">
            <span className="flex items-center gap-1.5 bg-ui-navy-900/50 px-2.5 py-1 rounded border border-slate-800">
              <PhoneCall className="w-3.5 h-3.5 text-ui-gold-400" />
              Admissions Helpline: <strong className="text-white">+234 (0) 803 123 4567</strong>
            </span>
            <span className="text-ui-gold-300 font-semibold bg-ui-gold-500/10 px-2 py-0.5 rounded border border-ui-gold-500/20">
              Academic Session 2024/2025
            </span>
          </div>
        </div>
      </div>

      {/* Main Navigation Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          
          {/* Logo & Institution Branding */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-12 h-12 rounded-full bg-ui-navy-900 border-2 border-ui-gold-500 flex items-center justify-center shadow-md group-hover:bg-ui-navy-800 transition-colors">
              <GraduationCap className="w-7 h-7 text-ui-gold-400" />
            </div>
            <div className="flex flex-col">
              <span className="font-serif font-bold text-lg leading-tight text-ui-navy-900 tracking-tight">
                UNIVERSITY OF IBADAN
              </span>
              <span className="text-xs font-semibold tracking-wider text-ui-gold-700 uppercase">
                Consultancy Services Unit
              </span>
              <span className="text-[10px] text-slate-500 font-sans">
                Postgraduate & Professional Studies
              </span>
            </div>
          </Link>

          {/* Desktop Links */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navLinks.map((link) => {
              const active = isActive(link.href);
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                    active
                      ? "text-ui-navy-900 bg-slate-100 font-semibold border-b-2 border-ui-gold-600"
                      : "text-slate-700 hover:text-ui-navy-900 hover:bg-slate-50"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>

          {/* Action Buttons */}
          <div className="hidden md:flex items-center gap-3">
            {onOpenSearch && (
              <button
                onClick={onOpenSearch}
                className="p-2 text-slate-600 hover:text-ui-navy-900 hover:bg-slate-100 rounded-full transition-colors"
                title="Search Programs & Portal"
                aria-label="Search"
              >
                <Search className="w-5 h-5" />
              </button>
            )}

            <Link
              href="/apply"
              className="bg-ui-navy-900 hover:bg-ui-navy-950 text-white font-semibold text-sm px-5 py-2.5 rounded-md shadow-md transition-all border border-ui-gold-500/40 flex items-center gap-2 hover:shadow-lg"
            >
              <FileText className="w-4 h-4 text-ui-gold-400" />
              Apply Online
            </Link>
          </div>

          {/* Mobile Menu Trigger */}
          <div className="flex lg:hidden items-center gap-2">
            {onOpenSearch && (
              <button
                onClick={onOpenSearch}
                className="p-2 text-slate-600 hover:text-ui-navy-900 rounded-lg"
                aria-label="Search"
              >
                <Search className="w-5 h-5" />
              </button>
            )}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-md text-slate-700 hover:text-ui-navy-900 hover:bg-slate-100 focus:outline-none"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-slate-200 px-4 pt-2 pb-6 space-y-2 shadow-xl">
          {navLinks.map((link) => {
            const active = isActive(link.href);
            return (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`block px-3 py-2.5 rounded-md text-base font-medium ${
                  active
                    ? "bg-ui-navy-900 text-white font-semibold"
                    : "text-slate-700 hover:bg-slate-100"
                }`}
              >
                {link.name}
              </Link>
            );
          })}

          <div className="pt-4 border-t border-slate-200 space-y-2">
            <Link
              href="/apply"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full text-center bg-ui-navy-900 text-white font-semibold py-3 rounded-md shadow flex items-center justify-center gap-2"
            >
              <FileText className="w-4 h-4 text-ui-gold-400" />
              Start Online Admission Application
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};
