"use client";

import React, { useState, Suspense } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { PROGRAMS } from "@/data/programs";
import { generateRefNumber } from "@/lib/utils";
import { 
  UploadCloud, 
  CheckCircle2, 
  ArrowRight, 
  ArrowLeft,
  Printer,
  AlertCircle
} from "lucide-react";

function ApplyFormContent() {
  const searchParams = useSearchParams();
  const preselectedProgram = searchParams?.get("program") || PROGRAMS[0].id;

  const [step, setStep] = useState(1);

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    gender: "Male",
    dateOfBirth: "",
    stateOfOrigin: "",
    address: "",

    olevelExam: "WAEC",
    olevelCredits: "5 Credits including Math & English",
    highestQualification: "B.Sc Degree",
    institutionName: "",
    graduationYear: "2020",
    gradeClass: "Second Class Lower",

    programId: preselectedProgram,
    studyMode: "Weekend / Blended",

    degreeDocUploaded: false,
    olevelDocUploaded: false,
    passportDocUploaded: false,

    referenceNumber: "",
    submittedAt: ""
  });

  const [submitted, setSubmitted] = useState(false);

  const selectedProgramObj = PROGRAMS.find((p) => p.id === formData.programId) || PROGRAMS[0];

  const handleNext = (e: React.FormEvent) => {
    e.preventDefault();
    if (step < 5) {
      setStep(step + 1);
    }
  };

  const handlePrev = () => {
    if (step > 1) {
      setStep(step - 1);
    }
  };

  const handleFinalSubmit = () => {
    const ref = generateRefNumber("UIC-ADM");
    const dateStr = new Date().toLocaleDateString("en-NG", {
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit"
    });

    setFormData((prev) => ({
      ...prev,
      referenceNumber: ref,
      submittedAt: dateStr
    }));

    setSubmitted(true);
  };

  return (
    <>
      {!submitted && (
        <div className="bg-white border-b border-slate-200 py-4 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto flex items-center justify-between text-xs font-semibold">
            {[
              { num: 1, label: "Bio-Data" },
              { num: 2, label: "Academics" },
              { num: 3, label: "Program" },
              { num: 4, label: "Documents" },
              { num: 5, label: "Review & Pay" }
            ].map((s) => {
              const active = step === s.num;
              const completed = step > s.num;
              return (
                <div key={s.num} className="flex items-center gap-2">
                  <div
                    className={`w-7 h-7 rounded-full flex items-center justify-center font-bold text-xs ${
                      completed
                        ? "bg-emerald-600 text-white"
                        : active
                        ? "bg-ui-navy-900 text-white ring-2 ring-ui-gold-500"
                        : "bg-slate-100 text-slate-400"
                    }`}
                  >
                    {completed ? "✓" : s.num}
                  </div>
                  <span className={`hidden sm:inline ${active ? "text-ui-navy-900 font-bold" : "text-slate-500"}`}>
                    {s.label}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      )}

      <main className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12 flex-grow w-full">
        {submitted ? (
          <div className="bg-white rounded-2xl border-2 border-ui-gold-500 shadow-2xl p-8 space-y-6 text-slate-800">
            <div className="text-center space-y-2 border-b border-slate-200 pb-6">
              <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <h2 className="font-serif font-bold text-2xl text-ui-navy-900">
                Application Successfully Submitted!
              </h2>
              <p className="text-xs text-slate-500">
                University of Ibadan Consultancy Services Admissions Board
              </p>
            </div>

            <div className="p-4 bg-ui-navy-900 text-white rounded-xl space-y-2 text-xs font-mono">
              <div className="flex justify-between">
                <span className="text-slate-400">Application Reference Number:</span>
                <span className="font-bold text-ui-gold-400 text-sm">{formData.referenceNumber}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-400">Submission Timestamp:</span>
                <span className="text-slate-200">{formData.submittedAt}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-400">Application Status:</span>
                <span className="bg-emerald-500/20 text-emerald-300 font-bold px-2 py-0.5 rounded">
                  PROVISIONAL REVIEW
                </span>
              </div>
            </div>

            <div className="bg-slate-50 rounded-xl p-6 border border-slate-200 text-xs space-y-3">
              <h4 className="font-serif font-bold text-sm text-ui-navy-900 border-b border-slate-200 pb-2">
                Applicant Details
              </h4>
              <div className="grid grid-cols-2 gap-2">
                <div><span className="text-slate-500">Full Name:</span> <strong className="text-slate-800">{formData.fullName}</strong></div>
                <div><span className="text-slate-500">Email:</span> <strong className="text-slate-800">{formData.email}</strong></div>
                <div><span className="text-slate-500">Phone:</span> <strong className="text-slate-800">{formData.phone}</strong></div>
                <div><span className="text-slate-500">Program Choice:</span> <strong className="text-ui-navy-900">{selectedProgramObj.title}</strong></div>
                <div><span className="text-slate-500">Qualification:</span> <strong className="text-slate-800">{formData.highestQualification} ({formData.gradeClass})</strong></div>
                <div><span className="text-slate-500">Application Status:</span> <strong className="text-emerald-700">Submitted / Pending Review</strong></div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-slate-200">
              <button
                onClick={() => window.print()}
                className="w-full sm:w-auto bg-ui-navy-900 hover:bg-ui-navy-950 text-white font-bold px-6 py-3 rounded-xl text-xs flex items-center justify-center gap-2"
              >
                <Printer className="w-4 h-4" /> Print Official Application Acknowledgement Slip
              </button>

              <Link
                href="/verify"
                className="w-full sm:w-auto border border-slate-300 hover:bg-slate-100 text-slate-800 font-semibold px-6 py-3 rounded-xl text-xs flex items-center justify-center gap-2"
              >
                Go To Verification Portal
              </Link>
            </div>
          </div>
        ) : (
          <div className="bg-white rounded-2xl border border-slate-200 shadow-xl p-6 sm:p-10">
            <form onSubmit={handleNext} className="space-y-6">
              
              {step === 1 && (
                <div className="space-y-6">
                  <div className="border-b border-slate-200 pb-3">
                    <h3 className="font-serif font-bold text-xl text-ui-navy-900">
                      Step 1: Personal Bio-Data & Contact Info
                    </h3>
                    <p className="text-xs text-slate-500">Provide accurate identity details matching your official certificates.</p>
                  </div>

                  <div className="space-y-4 text-xs">
                    <div>
                      <label className="block font-bold uppercase text-slate-700 mb-1">Full Legal Name (Surname First)</label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. ADEBAYO, Oluwaseun Emmanuel"
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        className="w-full px-4 py-3 bg-slate-50 border border-slate-300 rounded-xl text-slate-900 focus:outline-none focus:ring-2 focus:ring-ui-navy-900"
                      />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block font-bold uppercase text-slate-700 mb-1">Email Address</label>
                        <input
                          type="email"
                          required
                          placeholder="seun.adebayo@gmail.com"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="w-full px-4 py-3 bg-slate-50 border border-slate-300 rounded-xl text-slate-900 focus:outline-none focus:ring-2 focus:ring-ui-navy-900"
                        />
                      </div>

                      <div>
                        <label className="block font-bold uppercase text-slate-700 mb-1">Phone Number (WhatsApp Active)</label>
                        <input
                          type="tel"
                          required
                          placeholder="+234 803 000 0000"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          className="w-full px-4 py-3 bg-slate-50 border border-slate-300 rounded-xl text-slate-900 focus:outline-none focus:ring-2 focus:ring-ui-navy-900"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                      <div>
                        <label className="block font-bold uppercase text-slate-700 mb-1">Gender</label>
                        <select
                          value={formData.gender}
                          onChange={(e) => setFormData({ ...formData, gender: e.target.value })}
                          className="w-full px-4 py-3 bg-slate-50 border border-slate-300 rounded-xl text-slate-900 focus:outline-none focus:ring-2 focus:ring-ui-navy-900 font-semibold"
                        >
                          <option value="Male">Male</option>
                          <option value="Female">Female</option>
                        </select>
                      </div>

                      <div>
                        <label className="block font-bold uppercase text-slate-700 mb-1">Date of Birth</label>
                        <input
                          type="date"
                          required
                          value={formData.dateOfBirth}
                          onChange={(e) => setFormData({ ...formData, dateOfBirth: e.target.value })}
                          className="w-full px-4 py-3 bg-slate-50 border border-slate-300 rounded-xl text-slate-900 focus:outline-none focus:ring-2 focus:ring-ui-navy-900"
                        />
                      </div>

                      <div>
                        <label className="block font-bold uppercase text-slate-700 mb-1">State of Origin</label>
                        <input
                          type="text"
                          required
                          placeholder="e.g., Oyo State"
                          value={formData.stateOfOrigin}
                          onChange={(e) => setFormData({ ...formData, stateOfOrigin: e.target.value })}
                          className="w-full px-4 py-3 bg-slate-50 border border-slate-300 rounded-xl text-slate-900 focus:outline-none focus:ring-2 focus:ring-ui-navy-900"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block font-bold uppercase text-slate-700 mb-1">Residential Address</label>
                      <input
                        type="text"
                        required
                        placeholder="Street address, City, State"
                        value={formData.address}
                        onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                        className="w-full px-4 py-3 bg-slate-50 border border-slate-300 rounded-xl text-slate-900 focus:outline-none focus:ring-2 focus:ring-ui-navy-900"
                      />
                    </div>
                  </div>
                </div>
              )}

              {step === 2 && (
                <div className="space-y-6">
                  <div className="border-b border-slate-200 pb-3">
                    <h3 className="font-serif font-bold text-xl text-ui-navy-900">
                      Step 2: Academic Qualifications & Post-BSC / HND Record
                    </h3>
                    <p className="text-xs text-slate-500">Provide details on your tertiary degree and O'Level credits.</p>
                  </div>

                  <div className="space-y-4 text-xs">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block font-bold uppercase text-slate-700 mb-1">Highest Academic Qualification</label>
                        <select
                          value={formData.highestQualification}
                          onChange={(e) => setFormData({ ...formData, highestQualification: e.target.value })}
                          className="w-full px-4 py-3 bg-slate-50 border border-slate-300 rounded-xl text-slate-900 focus:outline-none focus:ring-2 focus:ring-ui-navy-900 font-semibold"
                        >
                          <option value="B.Sc Degree">B.Sc / B.Tech / B.A Degree</option>
                          <option value="HND (Higher National Diploma)">HND (Higher National Diploma)</option>
                          <option value="OND / ND (National Diploma)">OND / ND (National Diploma)</option>
                          <option value="NCE">NCE (National Certificate in Education)</option>
                          <option value="SSCE / O'Level">SSCE / Senior Secondary</option>
                        </select>
                      </div>

                      <div>
                        <label className="block font-bold uppercase text-slate-700 mb-1">Graduation Class / Grade</label>
                        <select
                          value={formData.gradeClass}
                          onChange={(e) => setFormData({ ...formData, gradeClass: e.target.value })}
                          className="w-full px-4 py-3 bg-slate-50 border border-slate-300 rounded-xl text-slate-900 focus:outline-none focus:ring-2 focus:ring-ui-navy-900 font-semibold"
                        >
                          <option value="First Class / Distinction">First Class / Distinction</option>
                          <option value="Second Class Upper / Upper Credit">Second Class Upper / Upper Credit</option>
                          <option value="Second Class Lower / Lower Credit">Second Class Lower / Lower Credit</option>
                          <option value="Third Class / Pass">Third Class / Pass</option>
                        </select>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block font-bold uppercase text-slate-700 mb-1">Institution Attended</label>
                        <input
                          type="text"
                          required
                          placeholder="e.g. University of Lagos / The Polytechnic Ibadan"
                          value={formData.institutionName}
                          onChange={(e) => setFormData({ ...formData, institutionName: e.target.value })}
                          className="w-full px-4 py-3 bg-slate-50 border border-slate-300 rounded-xl text-slate-900 focus:outline-none focus:ring-2 focus:ring-ui-navy-900"
                        />
                      </div>

                      <div>
                        <label className="block font-bold uppercase text-slate-700 mb-1">Graduation Year</label>
                        <input
                          type="text"
                          required
                          placeholder="2020"
                          value={formData.graduationYear}
                          onChange={(e) => setFormData({ ...formData, graduationYear: e.target.value })}
                          className="w-full px-4 py-3 bg-slate-50 border border-slate-300 rounded-xl text-slate-900 focus:outline-none focus:ring-2 focus:ring-ui-navy-900"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block font-bold uppercase text-slate-700 mb-1">O'Level Exam & Subjects Passed</label>
                      <input
                        type="text"
                        required
                        value={formData.olevelCredits}
                        onChange={(e) => setFormData({ ...formData, olevelCredits: e.target.value })}
                        className="w-full px-4 py-3 bg-slate-50 border border-slate-300 rounded-xl text-slate-900 focus:outline-none focus:ring-2 focus:ring-ui-navy-900"
                      />
                    </div>
                  </div>
                </div>
              )}

              {step === 3 && (
                <div className="space-y-6">
                  <div className="border-b border-slate-200 pb-3">
                    <h3 className="font-serif font-bold text-xl text-ui-navy-900">
                      Step 3: Program Selection & Preferred Learning Track
                    </h3>
                    <p className="text-xs text-slate-500">Choose your desired diploma specialization and lecture schedule.</p>
                  </div>

                  <div className="space-y-4 text-xs">
                    <div>
                      <label className="block font-bold uppercase text-slate-700 mb-1">Select Program</label>
                      <select
                        value={formData.programId}
                        onChange={(e) => setFormData({ ...formData, programId: e.target.value })}
                        className="w-full px-4 py-3 bg-slate-50 border border-slate-300 rounded-xl text-slate-900 focus:outline-none focus:ring-2 focus:ring-ui-navy-900 font-bold"
                      >
                        {PROGRAMS.map((p) => (
                          <option key={p.id} value={p.id}>
                            [{p.level}] {p.title} ({p.code})
                          </option>
                        ))}
                      </select>
                    </div>

                    <div className="p-4 bg-ui-navy-900 text-white rounded-xl space-y-2">
                      <div className="font-serif font-bold text-sm text-ui-gold-400">{selectedProgramObj.title}</div>
                      <p className="text-[11px] text-slate-300">{selectedProgramObj.description}</p>
                      <div className="pt-2 border-t border-slate-800 flex justify-between text-[11px]">
                        <span>Duration: <strong>{selectedProgramObj.duration}</strong></span>
                        <span>Delivery Mode: <strong>{selectedProgramObj.mode}</strong></span>
                      </div>
                    </div>

                    <div>
                      <label className="block font-bold uppercase text-slate-700 mb-1">Preferred Study Mode</label>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {["Weekend / Blended", "Online / Distance"].map((mode) => (
                          <button
                            key={mode}
                            type="button"
                            onClick={() => setFormData({ ...formData, studyMode: mode })}
                            className={`p-3 rounded-xl border text-left font-bold text-xs ${
                              formData.studyMode === mode
                                ? "bg-ui-navy-900 text-white border-ui-navy-900"
                                : "bg-slate-50 text-slate-700 border-slate-300"
                            }`}
                          >
                            {mode}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {step === 4 && (
                <div className="space-y-6">
                  <div className="border-b border-slate-200 pb-3">
                    <h3 className="font-serif font-bold text-xl text-ui-navy-900">
                      Step 4: Upload Credentials & Verification Documents
                    </h3>
                    <p className="text-xs text-slate-500">Upload scanned PDF or Image files for admissions board authentication.</p>
                  </div>

                  <div className="space-y-4 text-xs">
                    
                    <div className="p-4 rounded-xl border border-slate-200 flex items-center justify-between bg-slate-50">
                      <div className="space-y-1">
                        <span className="font-bold text-slate-800 block">Degree / HND Certificate</span>
                        <span className="text-[11px] text-slate-500">Scanned PDF copy of your statement of result.</span>
                      </div>
                      <button
                        type="button"
                        onClick={() => setFormData({ ...formData, degreeDocUploaded: !formData.degreeDocUploaded })}
                        className={`px-4 py-2 rounded-lg font-bold text-xs flex items-center gap-1.5 ${
                          formData.degreeDocUploaded
                            ? "bg-emerald-600 text-white"
                            : "bg-ui-navy-900 text-white"
                        }`}
                      >
                        <UploadCloud className="w-4 h-4" />
                        {formData.degreeDocUploaded ? "Uploaded ✓" : "Upload File"}
                      </button>
                    </div>

                    <div className="p-4 rounded-xl border border-slate-200 flex items-center justify-between bg-slate-50">
                      <div className="space-y-1">
                        <span className="font-bold text-slate-800 block">O'Level Statement of Result</span>
                        <span className="text-[11px] text-slate-500">WAEC / NECO / NABTEB result certificate.</span>
                      </div>
                      <button
                        type="button"
                        onClick={() => setFormData({ ...formData, olevelDocUploaded: !formData.olevelDocUploaded })}
                        className={`px-4 py-2 rounded-lg font-bold text-xs flex items-center gap-1.5 ${
                          formData.olevelDocUploaded
                            ? "bg-emerald-600 text-white"
                            : "bg-ui-navy-900 text-white"
                        }`}
                      >
                        <UploadCloud className="w-4 h-4" />
                        {formData.olevelDocUploaded ? "Uploaded ✓" : "Upload File"}
                      </button>
                    </div>

                    <div className="p-4 rounded-xl border border-slate-200 flex items-center justify-between bg-slate-50">
                      <div className="space-y-1">
                        <span className="font-bold text-slate-800 block">Passport Photo</span>
                        <span className="text-[11px] text-slate-500">White background JPEG/PNG image.</span>
                      </div>
                      <button
                        type="button"
                        onClick={() => setFormData({ ...formData, passportDocUploaded: !formData.passportDocUploaded })}
                        className={`px-4 py-2 rounded-lg font-bold text-xs flex items-center gap-1.5 ${
                          formData.passportDocUploaded
                            ? "bg-emerald-600 text-white"
                            : "bg-ui-navy-900 text-white"
                        }`}
                      >
                        <UploadCloud className="w-4 h-4" />
                        {formData.passportDocUploaded ? "Uploaded ✓" : "Upload File"}
                      </button>
                    </div>

                  </div>
                </div>
              )}

              {step === 5 && (
                <div className="space-y-6">
                  <div className="border-b border-slate-200 pb-3">
                    <h3 className="font-serif font-bold text-xl text-ui-navy-900">
                      Step 5: Review Declaration & Final Application Submission
                    </h3>
                    <p className="text-xs text-slate-500">Confirm details before generating your admission reference slip.</p>
                  </div>

                  <div className="bg-slate-50 rounded-xl p-6 border border-slate-200 space-y-4 text-xs">
                    <div className="font-bold text-sm text-ui-navy-900 border-b border-slate-200 pb-2">Application Summary</div>
                    <div className="grid grid-cols-2 gap-3">
                      <div><span className="text-slate-500">Full Name:</span> <strong className="text-slate-800 block">{formData.fullName || "N/A"}</strong></div>
                      <div><span className="text-slate-500">Email:</span> <strong className="text-slate-800 block">{formData.email || "N/A"}</strong></div>
                      <div><span className="text-slate-500">Program Choice:</span> <strong className="text-ui-navy-900 block">{selectedProgramObj.title}</strong></div>
                      <div><span className="text-slate-500">Study Mode:</span> <strong className="text-slate-800 block">{formData.studyMode}</strong></div>
                      <div><span className="text-slate-500">Highest Qualification:</span> <strong className="text-slate-800 block">{formData.highestQualification} ({formData.gradeClass})</strong></div>
                      <div><span className="text-slate-500">Admissions Desk:</span> <strong className="text-emerald-700 block">Verified & Open</strong></div>
                    </div>
                  </div>

                  <div className="p-4 bg-amber-50 border border-amber-200 rounded-xl text-xs text-amber-900 space-y-1">
                    <span className="font-bold flex items-center gap-1">
                      <AlertCircle className="w-4 h-4 text-amber-600" /> Declaration
                    </span>
                    <p>I hereby certify that all information provided in this application form is true and correct to the best of my knowledge.</p>
                  </div>
                </div>
              )}

              <div className="pt-6 border-t border-slate-200 flex items-center justify-between">
                {step > 1 && (
                  <button
                    type="button"
                    onClick={handlePrev}
                    className="px-5 py-2.5 rounded-xl border border-slate-300 text-slate-700 font-semibold text-xs hover:bg-slate-50 flex items-center gap-1.5"
                  >
                    <ArrowLeft className="w-4 h-4" /> Previous
                  </button>
                )}

                {step < 5 ? (
                  <button
                    type="submit"
                    className="ml-auto bg-ui-navy-900 hover:bg-ui-navy-950 text-white font-bold px-7 py-3 rounded-xl text-xs flex items-center gap-2 shadow"
                  >
                    Continue <ArrowRight className="w-4 h-4" />
                  </button>
                ) : (
                  <button
                    type="button"
                    onClick={handleFinalSubmit}
                    className="ml-auto bg-ui-gold-600 hover:bg-ui-gold-500 text-ui-navy-950 font-bold px-8 py-3.5 rounded-xl text-xs flex items-center gap-2 shadow-lg"
                  >
                    Submit Application & Generate Slip <CheckCircle2 className="w-4 h-4" />
                  </button>
                )}
              </div>

            </form>
          </div>
        )}
      </main>
    </>
  );
}

export default function ApplyPage() {
  return (
    <div className="min-h-screen flex flex-col bg-slate-50 font-sans">
      <Navbar />
      <section className="bg-ui-navy-950 text-white py-12 px-4 sm:px-6 lg:px-8 border-b-4 border-ui-gold-500 relative">
        <div className="max-w-4xl mx-auto text-center space-y-3">
          <div className="inline-flex items-center gap-2 bg-ui-gold-500/10 text-ui-gold-300 border border-ui-gold-500/30 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest">
            Admissions Portal 2026/2027
          </div>
          <h1 className="font-serif text-3xl sm:text-4xl font-bold text-white">
            Online Postgraduate Admission Application
          </h1>
          <p className="text-slate-300 text-xs sm:text-sm">
            University of Ibadan Consultancy Services Unit — Direct Senate Accredited Programs
          </p>
        </div>
      </section>

      <Suspense fallback={<div className="p-12 text-center text-xs font-bold text-ui-navy-900">Loading admissions portal...</div>}>
        <ApplyFormContent />
      </Suspense>

      <Footer />
    </div>
  );
}
