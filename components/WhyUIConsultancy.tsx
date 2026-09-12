"use client";

import React from "react";
import { 
  Award, 
  Clock, 
  Briefcase,
  Users, 
  Building2, 
  ShieldCheck 
} from "lucide-react";

export const WhyUIConsultancy: React.FC = () => {
  const pillars = [
    {
      icon: Award,
      title: "University Senate Recognition",
      description: "All Executive Diplomas and Professional Certificates are officially issued under the authority of the University of Ibadan Senate, recognized worldwide across corporate, government, and industry sectors."
    },
    {
      icon: Briefcase,
      title: "Practical & Applied Industry Curriculum",
      description: "Gain hands-on expertise, workplace-ready competencies, and practical problem-solving skills tailored specifically for immediate real-world corporate, public sector, and entrepreneurial impact."
    },
    {
      icon: Clock,
      title: "Flexible Working Executive Schedule",
      description: "Tailored specifically for busy professionals with choices between Weekend Blended physical classes (Fridays/Saturdays) and 100% Online Distance Learning options."
    },
    {
      icon: Users,
      title: "Renowned Academic & Industry Faculty",
      description: "Learn from top-tier University of Ibadan professors, industry executives, and management consultants bringing real-world case studies directly to the classroom."
    },
    {
      icon: ShieldCheck,
      title: "Instant Online Verification Portal",
      description: "Employers, embassies, and global institutions can verify your credentials, admission letters, and transcripts instantly through our official automated verification system."
    },
    {
      icon: Building2,
      title: "Flexible Financial Payment Policy",
      description: "High quality professional education made accessible with manageable installment schedules, transparent policies, and corporate support without financial strain."
    }
  ];

  return (
    <section className="py-20 bg-slate-50 border-b border-slate-200 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 bg-ui-navy-900/5 text-ui-navy-900 border border-ui-navy-900/10 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest">
            Institutional Advantage
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-ui-navy-900">
            Why Pursue Your Executive Diploma at UI Consultancy?
          </h2>
          <p className="text-slate-600 text-base leading-relaxed">
            For over four decades, the University of Ibadan Consultancy Services Unit has led executive human capital development across West Africa.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {pillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <div
                key={idx}
                className="bg-white p-8 rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-all hover:-translate-y-1 group"
              >
                <div className="w-12 h-12 rounded-lg bg-ui-navy-900/5 border border-ui-navy-900/10 flex items-center justify-center mb-6 group-hover:bg-ui-navy-900 group-hover:text-white transition-colors">
                  <Icon className="w-6 h-6 text-ui-navy-900 group-hover:text-ui-gold-400 transition-colors" />
                </div>
                <h3 className="font-serif font-bold text-xl text-ui-navy-900 mb-3 group-hover:text-ui-gold-700 transition-colors">
                  {pillar.title}
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
