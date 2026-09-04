"use client";

import React, { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { AnnouncementTicker } from "@/components/AnnouncementTicker";
import { formatCurrency } from "@/lib/utils";
import { 
  BookOpen, 
  CreditCard, 
  Calendar, 
  Award, 
  Download
} from "lucide-react";

export default function PortalPage() {
  const [activeTab, setActiveTab] = useState<"courses" | "results" | "fees" | "timetable">("courses");

  const student = {
    name: "BABATUNDE, Oluwaseun Emmanuel",
    matricNo: "UIC/PGD/CSIT/2024/0142",
    program: "Postgraduate Diploma in Computer Science & IT",
    department: "Computing & IT Consultancy",
    level: "1st Semester (2024/2025 Session)",
    cgpa: "4.80 / 5.00",
    status: "Active & Fully Registered"
  };

  const registeredCourses = [
    { code: "CSIT 701", title: "Advanced Object-Oriented Programming with Python", units: 3, lecturer: "Prof. O. B. Longe", status: "Approved" },
    { code: "CSIT 703", title: "Database Architecture & SQL Systems", units: 3, lecturer: "Dr. A. A. Victoria", status: "Approved" },
    { code: "CSIT 705", title: "Software Engineering & Systems Analysis", units: 3, lecturer: "Dr. E. O. Ojo", status: "Approved" },
    { code: "CSIT 707", title: "Data Networks & Cybersecurity Fundamentals", units: 3, lecturer: "Engr. T. K. Alabi", status: "Approved" }
  ];

  const examResults = [
    { code: "CSIT 701", title: "Advanced Programming", score: 84, grade: "A", points: 5.0 },
    { code: "CSIT 703", title: "Database Systems", score: 78, grade: "A", points: 5.0 },
    { code: "CSIT 705", title: "Software Engineering", score: 72, grade: "B", points: 4.0 },
    { code: "CSIT 707", title: "Cybersecurity Fundamentals", score: 88, grade: "A", points: 5.0 }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 font-sans">
      <Navbar />
      <AnnouncementTicker />

      <section className="bg-ui-navy-950 text-white py-12 px-4 sm:px-6 lg:px-8 border-b-4 border-ui-gold-500 relative">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 bg-ui-gold-500/10 text-ui-gold-300 border border-ui-gold-500/30 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest">
              Executive Student Management Portal
            </div>
            <h1 className="font-serif text-3xl font-bold text-white">
              Student E-Portal Dashboard
            </h1>
            <p className="text-slate-300 text-xs sm:text-sm">
              Welcome back, <strong className="text-ui-gold-300">{student.name}</strong>
            </p>
          </div>

          <div className="bg-ui-navy-900 border border-slate-700 p-4 rounded-xl text-xs space-y-1">
            <div className="text-slate-400 uppercase font-bold text-[10px]">Matriculation Number</div>
            <div className="font-mono font-bold text-ui-gold-400 text-sm">{student.matricNo}</div>
          </div>
        </div>
      </section>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 flex-grow w-full space-y-8">
        
        <div className="bg-white rounded-2xl border border-slate-200 shadow-md p-6 sm:p-8 grid grid-cols-1 md:grid-cols-4 gap-6 text-xs text-slate-700">
          <div className="space-y-1">
            <span className="text-slate-400 uppercase font-bold text-[10px]">Program Enrolled</span>
            <span className="font-bold text-ui-navy-900 block text-sm">{student.program}</span>
          </div>
          <div className="space-y-1">
            <span className="text-slate-400 uppercase font-bold text-[10px]">Department</span>
            <span className="font-semibold text-slate-800 block">{student.department}</span>
          </div>
          <div className="space-y-1">
            <span className="text-slate-400 uppercase font-bold text-[10px]">Session / Level</span>
            <span className="font-semibold text-slate-800 block">{student.level}</span>
          </div>
          <div className="space-y-1">
            <span className="text-slate-400 uppercase font-bold text-[10px]">Current Cumulative GPA</span>
            <span className="font-bold text-emerald-700 block text-base font-serif">{student.cgpa}</span>
          </div>
        </div>

        <div className="bg-white rounded-2xl border border-slate-200 shadow-xl overflow-hidden">
          <div className="bg-ui-navy-900 p-2 flex items-center gap-2 overflow-x-auto no-scrollbar border-b border-ui-navy-800">
            {[
              { id: "courses", label: "Course Registration", icon: BookOpen },
              { id: "results", label: "Result Checker", icon: Award },
              { id: "fees", label: "Tuition & Receipts", icon: CreditCard },
              { id: "timetable", label: "Lecture Timetable", icon: Calendar }
            ].map((tab) => {
              const Icon = tab.icon;
              const active = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id as any)}
                  className={`px-5 py-3 rounded-xl font-bold text-xs flex items-center gap-2 whitespace-nowrap transition-all ${
                    active
                      ? "bg-ui-gold-500 text-ui-navy-950 shadow"
                      : "text-slate-300 hover:bg-ui-navy-800 hover:text-white"
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  {tab.label}
                </button>
              );
            })}
          </div>

          <div className="p-6 sm:p-8">
            {activeTab === "courses" && (
              <div className="space-y-6">
                <div className="flex items-center justify-between border-b border-slate-200 pb-4">
                  <div>
                    <h3 className="font-serif font-bold text-lg text-ui-navy-900">
                      1st Semester Approved Course Registration
                    </h3>
                    <p className="text-xs text-slate-500">Total Credit Units Registered: 12 Units</p>
                  </div>
                  <button
                    onClick={() => window.print()}
                    className="bg-ui-navy-900 text-white font-bold px-4 py-2 rounded-lg text-xs flex items-center gap-1.5"
                  >
                    <Download className="w-4 h-4 text-ui-gold-400" /> Download Course Form Slip
                  </button>
                </div>

                <div className="overflow-x-auto">
                  <table className="w-full text-left border-collapse text-xs">
                    <thead>
                      <tr className="bg-slate-100 text-slate-700 border-b border-slate-200 font-bold uppercase">
                        <th className="p-3">Course Code</th>
                        <th className="p-3">Course Title</th>
                        <th className="p-3">Units</th>
                        <th className="p-3">Lecturer In-Charge</th>
                        <th className="p-3 text-right">Status</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100 text-slate-700">
                      {registeredCourses.map((c, idx) => (
                        <tr key={idx} className="hover:bg-slate-50">
                          <td className="p-3 font-mono font-bold text-ui-navy-900">{c.code}</td>
                          <td className="p-3 font-semibold text-slate-900">{c.title}</td>
                          <td className="p-3 font-mono">{c.units}</td>
                          <td className="p-3 text-slate-600">{c.lecturer}</td>
                          <td className="p-3 text-right">
                            <span className="bg-emerald-100 text-emerald-800 text-[10px] font-bold px-2 py-0.5 rounded">
                              {c.status} ✓
                            </span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            {activeTab === "results" && (
              <div className="space-y-6">
                <div className="flex items-center justify-between border-b border-slate-200 pb-4">
                  <div>
                    <h3 className="font-serif font-bold text-lg text-ui-navy-900">
                      Official Semester Transcript & Result Sheet
                    </h3>
                    <p className="text-xs text-slate-500">Academic Standing: First Class Division (Grade A Average)</p>
                  </div>
                  <button
                    onClick={() => window.print()}
                    className="bg-ui-navy-900 text-white font-bold px-4 py-2 rounded-lg text-xs flex items-center gap-1.5"
                  >
                    <Download className="w-4 h-4 text-ui-gold-400" /> Print Official Result Transcript
                  </button>
                </div>

                <div className="overflow-x-auto">
                  <table className="w-full text-left border-collapse text-xs">
                    <thead>
                      <tr className="bg-slate-100 text-slate-700 border-b border-slate-200 font-bold uppercase">
                        <th className="p-3">Course Code</th>
                        <th className="p-3">Course Title</th>
                        <th className="p-3">Score %</th>
                        <th className="p-3">Grade</th>
                        <th className="p-3 text-right">Grade Point</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100 text-slate-700">
                      {examResults.map((r, idx) => (
                        <tr key={idx} className="hover:bg-slate-50">
                          <td className="p-3 font-mono font-bold text-ui-navy-900">{r.code}</td>
                          <td className="p-3 font-semibold text-slate-900">{r.title}</td>
                          <td className="p-3 font-mono">{r.score}%</td>
                          <td className="p-3 font-bold text-emerald-700">{r.grade}</td>
                          <td className="p-3 text-right font-mono font-bold text-slate-900">{r.points.toFixed(1)}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            {activeTab === "fees" && (
              <div className="space-y-6">
                <div className="flex items-center justify-between border-b border-slate-200 pb-4">
                  <div>
                    <h3 className="font-serif font-bold text-lg text-ui-navy-900">
                      Payment Ledger & E-Receipt Generator
                    </h3>
                    <p className="text-xs text-slate-500">Session Status: Fully Paid</p>
                  </div>
                </div>

                <div className="p-6 bg-slate-50 border border-slate-200 rounded-xl space-y-4 text-xs">
                  <div className="flex items-center justify-between border-b border-slate-200 pb-3">
                    <div>
                      <span className="font-bold text-ui-navy-900 block">2024/2025 Session Full Tuition & Acceptance Fee</span>
                      <span className="text-[11px] text-slate-500 font-mono">Receipt No: UIC-RCT-2024-991204</span>
                    </div>
                    <span className="bg-emerald-100 text-emerald-800 text-[10px] font-bold px-2.5 py-1 rounded">
                      SUCCESSFUL PAYMENT
                    </span>
                  </div>

                  <div className="grid grid-cols-2 gap-2">
                    <div><span className="text-slate-500">Amount Paid:</span> <strong className="text-ui-navy-900">{formatCurrency(365000)}</strong></div>
                    <div><span className="text-slate-500">Payment Gateway:</span> <strong className="text-slate-800">UI Consultancy Direct Remita</strong></div>
                    <div><span className="text-slate-500">Payment Date:</span> <strong className="text-slate-800">12 October 2024</strong></div>
                    <div><span className="text-slate-500">Outstanding Balance:</span> <strong className="text-emerald-700">NGN 0.00</strong></div>
                  </div>

                  <button
                    onClick={() => window.print()}
                    className="bg-ui-navy-900 text-white font-bold px-4 py-2 rounded-lg text-xs flex items-center gap-1.5"
                  >
                    <Download className="w-4 h-4 text-ui-gold-400" /> Download PDF Receipt
                  </button>
                </div>
              </div>
            )}

            {activeTab === "timetable" && (
              <div className="space-y-6">
                <div className="border-b border-slate-200 pb-4">
                  <h3 className="font-serif font-bold text-lg text-ui-navy-900">
                    Executive Weekend Lecture & Seminar Schedule
                  </h3>
                  <p className="text-xs text-slate-500">Venue: Department of Computer Science Lecture Theatre & Online Canvas LMS</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
                  <div className="p-5 rounded-xl bg-ui-navy-900 text-white space-y-2 border border-ui-navy-800">
                    <div className="flex justify-between font-mono text-ui-gold-400 font-bold">
                      <span>FRIDAY (5:00 PM - 8:00 PM)</span>
                      <span>PHYSICAL / HYBRID</span>
                    </div>
                    <h4 className="font-bold text-sm">CSIT 701: Advanced OOP with Python</h4>
                    <p className="text-slate-300 text-[11px]">Lab 2, Computer Center / Zoom Live Stream</p>
                  </div>

                  <div className="p-5 rounded-xl bg-ui-navy-900 text-white space-y-2 border border-ui-navy-800">
                    <div className="flex justify-between font-mono text-ui-gold-400 font-bold">
                      <span>SATURDAY (9:00 AM - 1:00 PM)</span>
                      <span>PHYSICAL</span>
                    </div>
                    <h4 className="font-bold text-sm">CSIT 703: Database Architecture</h4>
                    <p className="text-slate-300 text-[11px]">Trenchard Executive Computer Hall</p>
                  </div>
                </div>
              </div>
            )}

          </div>
        </div>

      </main>

      <Footer />
    </div>
  );
}
