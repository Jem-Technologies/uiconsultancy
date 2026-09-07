export interface FeeGuideline {
  category: string;
  description: string;
}

export interface ProgramFeeGuideline {
  programId: string;
  programTitle: string;
  breakdown: FeeGuideline[];
  paymentOptions: {
    lumpSumDiscount: string;
    installmentPlan: string;
  };
}

export const FEE_GUIDELINES: ProgramFeeGuideline[] = [
  {
    programId: "pgd-computer-science",
    programTitle: "Postgraduate Diploma in Computer Science & Information Technology",
    breakdown: [
      { category: "Tuition Fee", description: "Covers core academic instruction, cloud laboratory sandboxes, and practical computing sessions." },
      { category: "Acceptance & Portal Registration", description: "One-off administrative setup, matriculation processing, and digital ID card generation." },
      { category: "E-Library & Digital Resources", description: "Annual access to University of Ibadan E-Library databases and digital research journals." },
      { category: "Examination & Assessment", description: "Semester continuous assessments, project defense, and transcript processing." }
    ],
    paymentOptions: {
      lumpSumDiscount: "5% discount on full session payment made at registration.",
      installmentPlan: "Flexible 2-stage installment option available per academic semester."
    }
  },
  {
    programId: "pgd-business-management",
    programTitle: "Postgraduate Diploma in Business Management & Administration",
    breakdown: [
      { category: "Tuition Fee", description: "Covers virtual/in-person lectures, Harvard & UI Business School executive case study packs." },
      { category: "Acceptance & Portal Registration", description: "Official student activation and matriculation pack." },
      { category: "Examination & Assessment", description: "Continuous assessment and final semester examinations." }
    ],
    paymentOptions: {
      lumpSumDiscount: "5% discount on full upfront payment.",
      installmentPlan: "2-part installment available per semester."
    }
  },
  {
    programId: "pgd-safety-environment",
    programTitle: "Postgraduate Diploma in Occupational Health, Safety & Environmental Management",
    breakdown: [
      { category: "Tuition Fee", description: "Covers lectures, HSE legislation toolkits, and industrial site visits." },
      { category: "Acceptance & Registration", description: "Matriculation credentials and safety gear kit." },
      { category: "Field Audit & Safety Equipment", description: "On-site practical field inspection and PPE safety gear." }
    ],
    paymentOptions: {
      lumpSumDiscount: "5% discount on early full payment.",
      installmentPlan: "Semester-wise installment plan with 50% initial deposit."
    }
  }
];

export const GENERAL_BANK_ACCOUNTS = [
  {
    bankName: "First Bank of Nigeria PLC",
    accountName: "UI Consultancy Services Unit - Admissions",
    accountNumber: "2034820193",
    sortCode: "011152014"
  },
  {
    bankName: "Wema Bank PLC",
    accountName: "UI Consultancy Services Unit - Student Fees",
    accountNumber: "0128930412",
    sortCode: "035150001"
  }
];
