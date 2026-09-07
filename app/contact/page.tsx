"use client";

import React, { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { AnnouncementTicker } from "@/components/AnnouncementTicker";
import { MapPin, Phone, Mail, Clock, Send, CheckCircle2, Building2 } from "lucide-react";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setFormData] = useState({
    name: "",
    email: "",
    subject: "Admissions Inquiry",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 font-sans">
      <Navbar />
      <AnnouncementTicker />

      {/* Hero Header */}
      <section className="bg-ui-navy-950 text-white py-16 px-4 sm:px-6 lg:px-8 border-b-4 border-ui-gold-500 relative">
        <div className="max-w-7xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 bg-ui-gold-500/10 text-ui-gold-300 border border-ui-gold-500/30 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest">
            Contact & Location Desk
          </div>
          <h1 className="font-serif text-3xl sm:text-5xl font-bold text-white">
            Connect With UI Consultancy
          </h1>
          <p className="text-slate-300 text-sm sm:text-base max-w-3xl leading-relaxed">
            Reach out to our admissions officers, administrative helpdesk, or visit our campus headquarters at the University of Ibadan.
          </p>
        </div>
      </section>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 flex-grow w-full space-y-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Left: Contact Info & Office Map Card */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-ui-navy-900 text-white p-8 rounded-2xl border border-ui-navy-800 shadow-xl space-y-6">
              <div className="flex items-center gap-3 border-b border-slate-800 pb-4">
                <Building2 className="w-6 h-6 text-ui-gold-400" />
                <h3 className="font-serif font-bold text-xl text-white">Campus Location</h3>
              </div>

              <div className="space-y-4 text-xs text-slate-300">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-ui-gold-400 shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-white">UI Consultancy Building</strong>
                    <span>Commercial Avenue, University of Ibadan Campus, Ibadan, Oyo State, Nigeria.</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Phone className="w-5 h-5 text-ui-gold-400 shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-white">Admissions & Helpdesk Line</strong>
                    <span>0705 947 6180</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Mail className="w-5 h-5 text-ui-gold-400 shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-white">Official Email Helpdesk</strong>
                    <span>info@uiconsultancy.org</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-ui-gold-400 shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-white">Office Hours</strong>
                    <span>Monday - Friday: 8:00 AM - 4:00 PM | Saturday: 9:00 AM - 2:00 PM</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Map Placeholder Card */}
            <div className="bg-slate-200 h-64 rounded-2xl border border-slate-300 flex items-center justify-center p-6 text-center text-slate-600">
              <div className="space-y-1">
                <MapPin className="w-8 h-8 text-ui-navy-900 mx-auto" />
                <span className="font-serif font-bold text-ui-navy-900 block">University of Ibadan Main Campus Map</span>
                <span className="text-xs">Commercial Avenue, Ibadan, Oyo State</span>
              </div>
            </div>
          </div>

          {/* Right: Interactive Inquiry Form */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-2xl border border-slate-200 shadow-xl p-8 space-y-6">
              <div className="border-b border-slate-200 pb-3">
                <h3 className="font-serif font-bold text-2xl text-ui-navy-900">Send Us a Direct Message</h3>
                <p className="text-xs text-slate-500">Our admissions officers respond to all inquiries within 24 hours.</p>
              </div>

              {submitted ? (
                <div className="p-8 bg-emerald-50 border border-emerald-300 rounded-xl text-center space-y-3">
                  <CheckCircle2 className="w-12 h-12 text-emerald-600 mx-auto" />
                  <h4 className="font-serif font-bold text-xl text-emerald-900">Inquiry Received</h4>
                  <p className="text-xs text-slate-600 max-w-md mx-auto">
                    Thank you for reaching out to the University of Ibadan Consultancy Services Unit. An admission advisor will contact you shortly via email/phone.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4 text-xs">
                  <div>
                    <label className="block font-bold uppercase text-slate-700 mb-1">Your Name</label>
                    <input
                      type="text"
                      required
                      placeholder="Full Name"
                      value={form.name}
                      onChange={(e) => setFormData({ ...form, name: e.target.value })}
                      className="w-full px-4 py-3 bg-slate-50 border border-slate-300 rounded-xl text-slate-900 focus:outline-none focus:ring-2 focus:ring-ui-navy-900"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block font-bold uppercase text-slate-700 mb-1">Email Address</label>
                      <input
                        type="email"
                        required
                        placeholder="you@domain.com"
                        value={form.email}
                        onChange={(e) => setFormData({ ...form, email: e.target.value })}
                        className="w-full px-4 py-3 bg-slate-50 border border-slate-300 rounded-xl text-slate-900 focus:outline-none focus:ring-2 focus:ring-ui-navy-900"
                      />
                    </div>

                    <div>
                      <label className="block font-bold uppercase text-slate-700 mb-1">Inquiry Subject</label>
                      <select
                        value={form.subject}
                        onChange={(e) => setFormData({ ...form, subject: e.target.value })}
                        className="w-full px-4 py-3 bg-slate-50 border border-slate-300 rounded-xl text-slate-900 focus:outline-none focus:ring-2 focus:ring-ui-navy-900 font-semibold"
                      >
                        <option value="Admissions Inquiry">Postgraduate Admission Inquiry</option>
                        <option value="Tuition Payment Help">Tuition Payment & Installments</option>
                        <option value="Certificate Verification">Certificate & Transcript Verification</option>
                        <option value="General Support">General Executive Support</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block font-bold uppercase text-slate-700 mb-1">Message</label>
                    <textarea
                      rows={5}
                      required
                      placeholder="Type your message or question here..."
                      value={form.message}
                      onChange={(e) => setFormData({ ...form, message: e.target.value })}
                      className="w-full px-4 py-3 bg-slate-50 border border-slate-300 rounded-xl text-slate-900 focus:outline-none focus:ring-2 focus:ring-ui-navy-900"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-ui-navy-900 hover:bg-ui-navy-950 text-white font-bold py-3.5 rounded-xl text-xs flex items-center justify-center gap-2 shadow-lg"
                  >
                    <Send className="w-4 h-4 text-ui-gold-400" /> Send Message To Admissions Office
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
}
