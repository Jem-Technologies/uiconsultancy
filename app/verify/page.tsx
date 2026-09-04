"use client";

import React, { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { AnnouncementTicker } from "@/components/AnnouncementTicker";
import { 
  ShieldCheck, 
  Search, 
  CheckCircle2, 
  XCircle, 
  GraduationCap
} from "lucide-react";

export default function VerifyPage() {
  const [refInput, setRefInput] = useState("");
  const [searched, setSearched] = useState(false);
  const [result, setResult] = useState<any>(null);

  const handleVerify = (e: React.FormEvent) => {
    e.preventDefault();
    setSearched(true);

    const query = refInput.trim().toUpperCase();

    if (query === "UIC-2023-0891" || query.includes("UIC")) {
      setResult({
        found: true,
        type: "Postgraduate Diploma Certificate",
        studentName: "BABATUNDE, Oluwaseun Emmanuel",
        matricNumber: query.length > 5 ? query : "UIC/PGD/2023/0891",
        programTitle: "Postgraduate Diploma in Computer Science & Information Technology",
        classAwarded: "Distinction (CGPA 4.85 / 5.00)",
        issueDate: "October 24, 2023",
        universityStatus: "VERIFIED & AUTHENTIC",
        issuingAuthority: "University of Ibadan Consultancy Services Board & Senate"
      });
    } else {
      setResult({
        found: false,
        message: "No credential or admission record matched the provided reference or matriculation number. Please verify the code on your certificate or admission letter."
      });
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 font-sans">
      <Navbar />
      <AnnouncementTicker />

      <section className="bg-ui-navy-950 text-white py-16 px-4 sm:px-6 lg:px-8 border-b-4 border-ui-gold-500 relative">
        <div className="max-w-4xl mx-auto text-center space-y-4">
          <div className="inline-flex items-center gap-2 bg-ui-gold-500/10 text-ui-gold-300 border border-ui-gold-500/30 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest">
            <ShieldCheck className="w-4 h-4 text-ui-gold-400" />
            Official Credential Verification Portal
          </div>
          <h1 className="font-serif text-3xl sm:text-5xl font-bold text-white">
            Authenticate Certificates & Admission Letters
          </h1>
          <p className="text-slate-300 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            Employers, embassies, higher education institutions, and graduates can instantly authenticate University of Ibadan Consultancy Service Unit credentials.
          </p>
        </div>
      </section>

      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 flex-grow w-full space-y-8">
        <div className="bg-white rounded-2xl border border-slate-200 shadow-xl p-8 space-y-6">
          <form onSubmit={handleVerify} className="space-y-4">
            <label className="block font-serif font-bold text-lg text-ui-navy-900">
              Enter Certificate Code, Matriculation No., or Admission Reference
            </label>
            <div className="flex flex-col sm:flex-row gap-3">
              <div className="relative flex-grow">
                <Search className="w-5 h-5 absolute left-3.5 top-3.5 text-slate-400" />
                <input
                  type="text"
                  required
                  placeholder="e.g., UIC-2023-0891 or UIC-ADM-84920"
                  value={refInput}
                  onChange={(e) => setRefInput(e.target.value)}
                  className="w-full pl-11 pr-4 py-3 bg-slate-50 border border-slate-300 rounded-xl text-sm font-mono text-ui-navy-900 focus:outline-none focus:ring-2 focus:ring-ui-navy-900"
                />
              </div>
              <button
                type="submit"
                className="bg-ui-navy-900 hover:bg-ui-navy-950 text-white font-bold px-8 py-3 rounded-xl text-xs flex items-center justify-center gap-2 shadow shrink-0"
              >
                <ShieldCheck className="w-4 h-4 text-ui-gold-400" /> Verify Credential
              </button>
            </div>
            <p className="text-[11px] text-slate-500">
              Tip: Try searching with test code <code className="bg-slate-100 px-1 py-0.5 rounded text-ui-navy-900 font-bold">UIC-2023-0891</code> or any reference code.
            </p>
          </form>
        </div>

        {searched && result && (
          result.found ? (
            <div className="bg-white rounded-2xl border-2 border-emerald-500 shadow-2xl p-8 space-y-6 text-slate-800 animate-fadeIn">
              
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-200 pb-6">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <div>
                    <span className="bg-emerald-500/15 text-emerald-800 border border-emerald-400 text-[10px] font-bold px-2.5 py-0.5 rounded uppercase">
                      {result.universityStatus}
                    </span>
                    <h3 className="font-serif font-bold text-xl text-ui-navy-900 mt-0.5">
                      {result.type}
                    </h3>
                  </div>
                </div>

                <div className="text-right sm:border-l sm:pl-4 border-slate-200">
                  <span className="text-[10px] text-slate-400 uppercase font-bold block">Matriculation / Ref No.</span>
                  <span className="font-mono font-bold text-sm text-ui-navy-900">{result.matricNumber}</span>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs bg-slate-50 p-6 rounded-xl border border-slate-200">
                <div className="space-y-1">
                  <span className="text-slate-500 block uppercase text-[10px] font-bold">Full Graduate Name</span>
                  <strong className="text-sm text-ui-navy-900 font-serif block">{result.studentName}</strong>
                </div>

                <div className="space-y-1">
                  <span className="text-slate-500 block uppercase text-[10px] font-bold">Program Completed</span>
                  <strong className="text-sm text-slate-800 block">{result.programTitle}</strong>
                </div>

                <div className="space-y-1">
                  <span className="text-slate-500 block uppercase text-[10px] font-bold">Grade / Distinction</span>
                  <strong className="text-sm text-emerald-700 font-bold block">{result.classAwarded}</strong>
                </div>

                <div className="space-y-1">
                  <span className="text-slate-500 block uppercase text-[10px] font-bold">Official Conferment Date</span>
                  <strong className="text-sm text-slate-800 block">{result.issueDate}</strong>
                </div>
              </div>

              <div className="p-4 bg-ui-navy-950 text-white rounded-xl text-xs flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <GraduationCap className="w-5 h-5 text-ui-gold-400 shrink-0" />
                  <span>Conferred by: <strong>{result.issuingAuthority}</strong></span>
                </div>
                <button
                  onClick={() => window.print()}
                  className="bg-ui-gold-600 text-ui-navy-950 font-bold px-4 py-2 rounded-lg text-xs"
                >
                  Print Verification Record
                </button>
              </div>

            </div>
          ) : (
            <div className="bg-white rounded-2xl border-2 border-rose-400 shadow-lg p-8 text-center space-y-4">
              <XCircle className="w-12 h-12 text-rose-500 mx-auto" />
              <h3 className="font-serif font-bold text-xl text-slate-900">Credential Not Found</h3>
              <p className="text-xs text-slate-600 max-w-md mx-auto">{result.message}</p>
            </div>
          )
        )}

      </main>

      <Footer />
    </div>
  );
}
