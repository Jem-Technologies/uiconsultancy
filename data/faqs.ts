export interface FAQItem {
  id: string;
  category: "Admissions" | "Fees & Payments" | "Academics & Study" | "Certificate Verification";
  question: string;
  answer: string;
}

export const FAQS: FAQItem[] = [
  {
    id: "faq-1",
    category: "Admissions",
    question: "I have an HND or a Third-Class degree. Can I really gain admission and upgrade my career?",
    answer: "Absolutely! We specifically designed our Postgraduate Diplomas to empower HND holders and Third-Class graduates who want to rewrite their academic story. Completing a PGD at University of Ibadan Consultancy bridges your degree and gives you direct eligibility to apply for Master's (M.Sc / MBA) degree programs anywhere in the world."
  },
  {
    id: "faq-2",
    category: "Admissions",
    question: "What basic documents do I need to start my application today?",
    answer: "Getting started is simple and stress-free. You only need your First Degree or HND certificate (or statement of result), your SSCE/O'Level result, a passport photograph, and a valid photo ID. Our friendly admissions team will guide you through uploading these online."
  },
  {
    id: "faq-3",
    category: "Fees & Payments",
    question: "How does your flexible payment plan support working adults?",
    answer: "We understand that balancing work, family, and tuition costs requires flexibility. That's why we allow you to spread your payments across the academic session with a manageable 60% initial deposit and 40% balance payable before second semester examinations. No hidden charges ever."
  },
  {
    id: "faq-4",
    category: "Fees & Payments",
    question: "Can my employer sponsor my postgraduate diploma program?",
    answer: "Yes! Many of our students are sponsored by corporate organizations, government ministries, and private employers. We provide formal tuition invoices, corporate sponsorship letters, and official bursary receipts to support your employer's sponsorship approval process."
  },
  {
    id: "faq-5",
    category: "Academics & Study",
    question: "How do you accommodate full-time working professionals in lecture schedules?",
    answer: "We know how demanding full-time jobs and families are. Our programs offer convenient Weekend Blended classes (held on Friday evenings and Saturdays) and 100% Distance Learning options with recorded lectures, self-paced study portals, and dedicated weekend mentor support."
  },
  {
    id: "faq-6",
    category: "Academics & Study",
    question: "Is the Postgraduate Diploma certificate recognized by the University Senate and employers?",
    answer: "Yes! Every single Postgraduate Diploma and Professional Certificate is officially awarded under the authority of the University of Ibadan Senate. Your certificate carries the premier University of Ibadan crest and seal, recognized by employers, civil service commissions, and universities globally."
  },
  {
    id: "faq-7",
    category: "Certificate Verification",
    question: "How easily can my future employer or foreign embassy verify my credentials?",
    answer: "Verification is instantaneous and effortless. Employers, embassies, and academic boards can verify your transcript, statement of result, and certificate 24/7 through our official automated Certificate & Admission Verification Portal."
  }
];
