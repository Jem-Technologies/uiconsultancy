export interface Program {
  id: string;
  title: string;
  code: string;
  level: "Postgraduate Diploma (PGD)" | "Higher Diploma" | "Professional Diploma";
  department: "Computing & IT" | "Management & Business" | "Public Administration" | "Environmental & Safety" | "Finance & Accounting";
  duration: string;
  mode: "Weekend / Blended" | "Online / Distance" | "Full-Time Executive";
  description: string;
  requirements: string[];
  careerProspects: string[];
  modules: string[];
  featured?: boolean;
}

export const PROGRAMS: Program[] = [
  {
    id: "pgd-computer-science",
    title: "Postgraduate Diploma in Computer Science & Information Technology",
    code: "PGD-CSIT",
    level: "Postgraduate Diploma (PGD)",
    department: "Computing & IT",
    duration: "12 Months (2 Semesters)",
    mode: "Weekend / Blended",
    description: "Designed for graduates seeking transition into software development, cybersecurity, cloud architecture, and enterprise IT management.",
    requirements: [
      "B.Sc, B.Tech, or HND in any STEM field or relevant discipline from a recognized institution.",
      "Minimum of Third Class or Lower Credit.",
      "O'Level 5 credits including English Language and Mathematics."
    ],
    careerProspects: [
      "Systems Analyst",
      "Software Engineer / Developer",
      "IT Infrastructure Consultant",
      "Data Engineer",
      "Eligible for M.Sc. Computer Science conversion"
    ],
    modules: [
      "Advanced Object-Oriented Programming (Python & Java)",
      "Database Systems & Data Modeling",
      "Software Engineering Principles",
      "Computer Networks & Cybersecurity Fundamentals",
      "Cloud Computing & Web Architecture",
      "PGD Applied Research Project"
    ],
    featured: true
  },
  {
    id: "pgd-business-management",
    title: "Postgraduate Diploma in Business Management & Administration",
    code: "PGD-BMA",
    level: "Postgraduate Diploma (PGD)",
    department: "Management & Business",
    duration: "12 Months (2 Semesters)",
    mode: "Online / Distance",
    description: "Equips non-business degree holders and mid-level managers with core strategic leadership, financial management, and business analytics skills.",
    requirements: [
      "First Degree (B.Sc, B.A, B.Tech) or HND in any discipline.",
      "At least 1-2 years post-graduation work experience preferred.",
      "O'Level credits in English Language and Mathematics."
    ],
    careerProspects: [
      "Business Operations Manager",
      "Corporate Strategy Officer",
      "Human Resource Manager",
      "Entrepreneur & Business Owner",
      "Gateway to MBA program"
    ],
    modules: [
      "Managerial Economics",
      "Financial Accounting & Analysis",
      "Strategic Management & Marketing",
      "Organizational Behavior & HR",
      "Operations & Supply Chain Management",
      "Business Consultancy Project"
    ],
    featured: true
  },
  {
    id: "pgd-applied-statistics",
    title: "Postgraduate Diploma in Applied Statistics & Data Analytics",
    code: "PGD-ASDA",
    level: "Postgraduate Diploma (PGD)",
    department: "Computing & IT",
    duration: "12 Months (2 Semesters)",
    mode: "Weekend / Blended",
    description: "Focuses on quantitative research methods, statistical computing (R, SPSS, Python), data visualization, and predictive modeling for decision making.",
    requirements: [
      "B.Sc/HND in Statistics, Mathematics, Economics, Sciences, Engineering, or Social Sciences.",
      "Basic proficiency in quantitative methods."
    ],
    careerProspects: [
      "Data Analyst",
      "Business Intelligence Specialist",
      "Statistical Researcher",
      "Risk Analyst"
    ],
    modules: [
      "Statistical Inference & Estimation",
      "Data Visualization & Dashboards (Power BI & Tableau)",
      "Statistical Programming in R & Python",
      "Time Series & Regression Modeling",
      "Big Data Analytics & AI Concepts",
      "Data Analytics Capstone Project"
    ],
    featured: true
  },
  {
    id: "pgd-public-admin",
    title: "Postgraduate Diploma in Public Administration & Policy",
    code: "PGD-PAP",
    level: "Postgraduate Diploma (PGD)",
    department: "Public Administration",
    duration: "12 Months (2 Semesters)",
    mode: "Online / Distance",
    description: "Geared towards civil servants, NGO executives, and public sector officers aiming to master governance, public policy formulation, and administrative law.",
    requirements: [
      "Bachelor's degree or HND in any discipline from an accredited institution.",
      "Public sector or non-profit work experience is an added advantage."
    ],
    careerProspects: [
      "Public Policy Officer",
      "Civil Service Administrator",
      "NGO Program Manager",
      "Governance Advisor"
    ],
    modules: [
      "Public Sector Management & Governance",
      "Policy Formulation & Analysis",
      "Administrative Law & Ethics",
      "Public Finance & Budgeting",
      "International Relations & Development",
      "Policy Research Project"
    ]
  },
  {
    id: "pgd-safety-environment",
    title: "Postgraduate Diploma in Occupational Health, Safety & Environmental Management",
    code: "PGD-OHSE",
    level: "Postgraduate Diploma (PGD)",
    department: "Environmental & Safety",
    duration: "12 Months (2 Semesters)",
    mode: "Weekend / Blended",
    description: "Specialized post-graduate training aligned with international HSE standards for energy, manufacturing, construction, and corporate safety leaders.",
    requirements: [
      "B.Sc or HND in Engineering, Environmental Science, Biological Sciences, or related fields.",
      "Professionals in safety-critical sectors with relevant diplomas."
    ],
    careerProspects: [
      "HSE Manager / Lead Auditor",
      "Environmental Compliance Officer",
      "Industrial Risk Consultant",
      "Safety Auditor"
    ],
    modules: [
      "Occupational Health & Hygiene Standards",
      "Environmental Impact Assessment (EIA)",
      "Hazard Identification & Risk Management",
      "HSE Legislation & Compliance (NEBOSH/OSHA standards)",
      "Emergency Response & Disaster Management",
      "HSE Audit & Capstone Thesis"
    ],
    featured: true
  },
  {
    id: "hd-project-management",
    title: "Higher Diploma in Project Management & Risk Analysis",
    code: "HD-PMRA",
    level: "Higher Diploma",
    department: "Management & Business",
    duration: "12 Months (2 Semesters)",
    mode: "Weekend / Blended",
    description: "Practical project governance, Agile frameworks, scheduling, and risk mitigation methodologies aligned with global PMP/PMI standards.",
    requirements: [
      "ND, OND, Professional Diploma, or equivalent qualification.",
      "Minimum 1 year relevant work experience."
    ],
    careerProspects: [
      "Project Coordinator",
      "PMO Analyst",
      "Scrum Master / Agile Practitioner",
      "Operations Coordinator"
    ],
    modules: [
      "Project Initiation & Scope Planning",
      "Cost Estimation & Budget Control",
      "Agile & Scrum Project Delivery",
      "Risk Assessment & Mitigation Strategies",
      "Project Scheduling Tools (MS Project)",
      "Live Project Case Study"
    ]
  },
  {
    id: "prof-accounting-finance",
    title: "Professional Diploma in Forensic Accounting & Financial Management",
    code: "PD-FAFM",
    level: "Professional Diploma",
    department: "Finance & Accounting",
    duration: "9 Months (2 Semesters)",
    mode: "Online / Distance",
    description: "Focuses on fraud investigation, internal control systems, forensic auditing, and modern corporate financial reporting.",
    requirements: [
      "Diploma, NCE, ND, or SSCE with relevant accounting work experience.",
      "Credit pass in Mathematics and English Language."
    ],
    careerProspects: [
      "Forensic Auditor",
      "Internal Control Officer",
      "Compliance Officer",
      "Financial Accountant"
    ],
    modules: [
      "Forensic Auditing & Investigation",
      "Fraud Examination & Prevention",
      "Corporate Financial Reporting",
      "Taxation & Auditing Practice",
      "Financial Laws & White-Collar Crime",
      "Forensic Audit Case Study"
    ]
  }
];

export const DEPARTMENTS = [
  "All Departments",
  "Computing & IT",
  "Management & Business",
  "Public Administration",
  "Environmental & Safety",
  "Finance & Accounting"
];
