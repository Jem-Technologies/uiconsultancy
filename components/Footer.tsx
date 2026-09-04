"use client";

import React, { useState } from "react";
import Link from "next/link";
import { 
  GraduationCap, 
  MapPin, 
  Phone, 
  Mail, 
  ArrowRight, 
  CheckCircle2, 
  ShieldCheck 
} from "lucide-react";

export const Footer: React.FC = () => {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail("");
    }
  };

  return (
    <footer className="bg-ui-navy-950 text-slate-300 font-sans border-t-4 border-ui-gold-500">
      {/* Top Institutional CTA Band */}
      <div className="bg-ui-navy-900 border-b border-ui-navy-800 py-10 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="space-y-1 text-center md:text-left">
            <h3 className="font-serif text-xl sm:text-2xl font-bold text-white">
              Ready to Upgrade Your Academic & Career Qualifications?
            </h3>
            <p className="text-slate-300 text-sm">
              Join thousands of professionals transformed through University of Ibadan Postgraduate Diplomas.
            </p>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/apply"
              className="bg-ui-gold-500 hover:bg-ui-gold-400 text-ui-navy-950 font-bold px-6 py-3 rounded-md text-sm transition-all shadow-md hover:shadow-lg flex items-center gap-2"
            >
              Start Admission Application <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/verify"
              className="border border-slate-600 hover:border-ui-gold-400 text-white hover:text-ui-gold-400 px-5 py-3 rounded-md text-sm transition-all flex items-center gap-2"
            >
              <ShieldCheck className="w-4 h-4 text-ui-gold-400" />
              Verify Certificate
            </Link>
          </div>
        </div>
      </div>

      {/* Main Footer Links & Information Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          
          {/* Col 1: Institutional Profile */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-ui-navy-900 border border-ui-gold-500 flex items-center justify-center shadow">
                <GraduationCap className="w-7 h-7 text-ui-gold-400" />
              </div>
              <div>
                <h4 className="font-serif font-bold text-lg text-white leading-snug">
                  UNIVERSITY OF IBADAN
                </h4>
                <p className="text-xs font-semibold text-ui-gold-400 tracking-wider uppercase">
                  Consultancy Services Unit
                </p>
              </div>
            </div>
            <p className="text-sm text-slate-400 leading-relaxed pr-4">
              Established under the authority of the University Senate, the UI Consultancy Services Unit delivers top-tier postgraduate diplomas, higher diplomas, and professional development programs to bridge academic and industry leadership.
            </p>

            <div className="pt-2 space-y-2 text-xs text-slate-300">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-ui-gold-400 shrink-0 mt-0.5" />
                <span>UI Consultancy Building, Commercial Avenue, University of Ibadan Campus, Ibadan, Oyo State, Nigeria.</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-ui-gold-400 shrink-0" />
                <span>+234 (0) 803 123 4567 / +234 (0) 802 987 6543</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-ui-gold-400 shrink-0" />
                <span>info@uiconsultancy.edu.ng | admissions@uiconsultancy.edu.ng</span>
              </div>
            </div>
          </div>

          {/* Col 2: Academic Programs */}
          <div className="space-y-3">
            <h5 className="font-serif font-semibold text-white text-base border-b border-ui-navy-800 pb-2">
              Academic Programs
            </h5>
            <ul className="space-y-2 text-sm text-slate-400">
              <li>
                <Link href="/programs/pgd-computer-science" className="hover:text-ui-gold-300 transition-colors">
                  PGD Computer Science & IT
                </Link>
              </li>
              <li>
                <Link href="/programs/pgd-business-management" className="hover:text-ui-gold-300 transition-colors">
                  PGD Business Management
                </Link>
              </li>
              <li>
                <Link href="/programs/pgd-applied-statistics" className="hover:text-ui-gold-300 transition-colors">
                  PGD Applied Statistics & Data
                </Link>
              </li>
              <li>
                <Link href="/programs/pgd-safety-environment" className="hover:text-ui-gold-300 transition-colors">
                  PGD Safety & HSE Mgmt
                </Link>
              </li>
              <li>
                <Link href="/programs/hd-project-management" className="hover:text-ui-gold-300 transition-colors">
                  Higher Diploma Project Mgmt
                </Link>
              </li>
              <li>
                <Link href="/programs" className="text-ui-gold-400 font-medium hover:underline inline-block pt-1">
                  View All Programs &rarr;
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Student & Portal Links */}
          <div className="space-y-3">
            <h5 className="font-serif font-semibold text-white text-base border-b border-ui-navy-800 pb-2">
              Quick Portals
            </h5>
            <ul className="space-y-2 text-sm text-slate-400">
              <li>
                <Link href="/apply" className="hover:text-ui-gold-300 transition-colors">
                  Online Admission Portal
                </Link>
              </li>
              <li>
                <Link href="/portal" className="hover:text-ui-gold-300 transition-colors">
                  Student Portal Login
                </Link>
              </li>
              <li>
                <Link href="/verify" className="hover:text-ui-gold-300 transition-colors">
                  Certificate Verification
                </Link>
              </li>
              <li>
                <Link href="/fees" className="hover:text-ui-gold-300 transition-colors">
                  Tuition Fee Calculator
                </Link>
              </li>
              <li>
                <Link href="/admissions" className="hover:text-ui-gold-300 transition-colors">
                  Entry Requirements
                </Link>
              </li>
              <li>
                <Link href="/faqs" className="hover:text-ui-gold-300 transition-colors">
                  Frequently Asked Questions
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Newsletter & Admission Bulletins */}
          <div className="space-y-3">
            <h5 className="font-serif font-semibold text-white text-base border-b border-ui-navy-800 pb-2">
              Admission Bulletins
            </h5>
            <p className="text-xs text-slate-400 leading-relaxed">
              Subscribe to receive instant updates on admission cut-offs, matriculation schedules, and executive seminars.
            </p>
            {subscribed ? (
              <div className="p-3 bg-emerald-950/80 border border-emerald-500/50 rounded text-emerald-300 text-xs flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 shrink-0 text-emerald-400" />
                <span>Thank you! You are subscribed to official UI Consultancy bulletins.</span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="space-y-2">
                <input
                  type="email"
                  required
                  placeholder="Enter your email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-3 py-2 text-xs bg-ui-navy-900 border border-slate-700 rounded text-white placeholder-slate-500 focus:outline-none focus:border-ui-gold-500"
                />
                <button
                  type="submit"
                  className="w-full bg-ui-gold-600 hover:bg-ui-gold-500 text-ui-navy-950 font-bold text-xs py-2 rounded transition-colors"
                >
                  Subscribe
                </button>
              </form>
            )}
          </div>
        </div>
      </div>

      {/* Bottom Sub-Footer Bar */}
      <div className="bg-ui-navy-950 border-t border-ui-navy-900 py-6 px-4 sm:px-6 lg:px-8 text-xs text-slate-500">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4">
          <div>
            &copy; {new Date().getFullYear()} University of Ibadan Consultancy Services Unit. All Rights Reserved.
          </div>
          <div className="flex items-center gap-6">
            <Link href="/about" className="hover:text-slate-300">Privacy Policy</Link>
            <Link href="/about" className="hover:text-slate-300">Terms of Service</Link>
            <Link href="/contact" className="hover:text-slate-300">Contact Desk</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
