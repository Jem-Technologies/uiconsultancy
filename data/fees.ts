export interface FeeItem {
  category: string;
  amount: number;
  description: string;
  isMandatory: boolean;
}

export interface ProgramFeeStructure {
  programId: string;
  programTitle: string;
  applicationForm: number;
  acceptanceFee: number;
  tuitionPerSemester: number;
  totalSemesters: number;
  breakdown: FeeItem[];
  paymentOptions: {
    lumpSumDiscount: number;
    installmentPlan: string;
  };
}

export const FEE_STRUCTURES: ProgramFeeStructure[] = [
  {
    programId: "pgd-computer-science",
    programTitle: "Postgraduate Diploma in Computer Science & Information Technology",
    applicationForm: 15000,
    acceptanceFee: 30000,
    tuitionPerSemester: 160000,
    totalSemesters: 2,
    breakdown: [
      { category: "Tuition Fee (Per Semester)", amount: 160000, description: "Core academic instruction and practical lab sessions", isMandatory: true },
      { category: "Acceptance & Registration Fee", amount: 30000, description: "One-off administrative processing and ID card generation", isMandatory: true },
      { category: "E-Library & Resource Access", amount: 15000, description: "Annual access to UI E-Library, digital journals, and software labs", isMandatory: true },
      { category: "Laboratory & Computing Facility", amount: 20000, description: "Server usage, cloud sandboxes, and hands-on practical materials", isMandatory: true },
      { category: "Examination & Assessment Fee", amount: 10000, description: "Semester examination processing and transcript processing", isMandatory: true }
    ],
    paymentOptions: {
      lumpSumDiscount: 5,
      installmentPlan: "Option to pay 60% at commencement of Semester 1 and 40% before Semester 2 examinations."
    }
  },
  {
    programId: "pgd-business-management",
    programTitle: "Postgraduate Diploma in Business Management & Administration",
    applicationForm: 15000,
    acceptanceFee: 30000,
    tuitionPerSemester: 140000,
    totalSemesters: 2,
    breakdown: [
      { category: "Tuition Fee (Per Semester)", amount: 140000, description: "Online lectures, case studies, and faculty mentoring", isMandatory: true },
      { category: "Acceptance & Portal Registration", amount: 30000, description: "Student portal activation and matriculation pack", isMandatory: true },
      { category: "Management Executive Case Studies Pack", amount: 15000, description: "Harvard & UI Business School case study licenses", isMandatory: true },
      { category: "Examination Fee", amount: 10000, description: "Continuous assessments and final semester exams", isMandatory: true }
    ],
    paymentOptions: {
      lumpSumDiscount: 5,
      installmentPlan: "2-Part installment available per semester."
    }
  },
  {
    programId: "pgd-safety-environment",
    programTitle: "Postgraduate Diploma in Occupational Health, Safety & Environmental Management",
    applicationForm: 15000,
    acceptanceFee: 35000,
    tuitionPerSemester: 175000,
    totalSemesters: 2,
    breakdown: [
      { category: "Tuition Fee (Per Semester)", amount: 175000, description: "Lectures, field safety audits, and industrial case studies", isMandatory: true },
      { category: "Acceptance & Registration", amount: 35000, description: "Official matriculation credentials and HSE toolkits", isMandatory: true },
      { category: "Field Audit & Safety Equipment", amount: 25000, description: "On-site industrial field visits, PPE safety gear, and practical kit", isMandatory: true },
      { category: "Examination & Project Defense", amount: 15000, description: "Oral thesis defense and external assessor evaluation", isMandatory: true }
    ],
    paymentOptions: {
      lumpSumDiscount: 5,
      installmentPlan: "Semester-wise payment with 50% upfront for course registration."
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
