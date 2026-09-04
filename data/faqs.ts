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
    question: "What are the entry requirements for a Postgraduate Diploma (PGD) at UI Consultancy?",
    answer: "For PGD programs, applicants must possess a First Degree (B.Sc, B.A, B.Tech) or Higher National Diploma (HND) in a relevant field from an accredited university or polytechnic. Applicants with Third Class or Pass degrees are eligible. O'Level 5 credits including English Language and Mathematics are required."
  },
  {
    id: "faq-2",
    category: "Admissions",
    question: "Can I apply with a Third Class degree or HND Lower Credit?",
    answer: "Yes! One of the key objectives of the UI Consultancy Services Unit post-graduate programs is to provide career progression and academic bridging for Third Class graduates and HND holders to qualify for Master's degree admission."
  },
  {
    id: "faq-3",
    category: "Fees & Payments",
    question: "Are tuition fees payable in flexible installments?",
    answer: "Yes, tuition can be paid in two installments per academic session (60% at the beginning of Semester 1 and 40% before Semester 2 examinations)."
  },
  {
    id: "faq-4",
    category: "Fees & Payments",
    question: "How do I make payment for application forms and tuition?",
    answer: "Payments can be made online via the UI Consultancy secure payment gateway using ATM debit cards or via direct bank transfer/Teller to the designated UI Consultancy Services Unit bank accounts."
  },
  {
    id: "faq-5",
    category: "Academics & Study",
    question: "How are classes conducted? Is full physical attendance required?",
    answer: "UI Consultancy offers flexible delivery modes including Weekend/Blended classes (Fridays and Saturdays) as well as 100% Online Distance Learning modules, designed specifically to accommodate working executives and professionals."
  },
  {
    id: "faq-6",
    category: "Academics & Study",
    question: "Is the Postgraduate Diploma certificate issued directly by the University of Ibadan?",
    answer: "Yes, all diplomas and certificates are awarded by the University of Ibadan Consultancy Services Unit under the authority of the University Senate, bearing the official crest and signatures."
  },
  {
    id: "faq-7",
    category: "Certificate Verification",
    question: "How can employers or foreign institutions verify my UI Consultancy diploma?",
    answer: "Employers and institutions can verify admission letters and certificates online via our official Certificate & Admission Verification Portal using the student's unique Registration/Matriculation number."
  }
];
