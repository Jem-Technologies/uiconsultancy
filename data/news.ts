export interface NewsArticle {
  id: string;
  title: string;
  category: "Admission Notice" | "Academic Calendar" | "Seminar & Workshop" | "Institutional News";
  date: string;
  summary: string;
  content: string;
  tag: string;
}

export const NEWS_ARTICLES: NewsArticle[] = [
  {
    id: "news-1",
    title: "Commencement of 2024/2025 Session Postgraduate Diploma Admissions",
    category: "Admission Notice",
    date: "2024-10-15",
    summary: "Applications are now invited from suitably qualified candidates for admission into various Postgraduate Diplomas, Higher Diplomas, and Professional Diplomas.",
    content: "The Management of the University of Ibadan Consultancy Services Unit announces the opening of online admission applications for the 2024/2025 academic session. Programs offered include PGD Computer Science, PGD Business Management, PGD Safety Management, PGD Public Administration, and PGD Applied Statistics. Interested applicants are advised to submit applications through the official portal before the deadline.",
    tag: "Urgent Notice"
  },
  {
    id: "news-2",
    title: "Orientation Ceremony for New Executive Postgraduate Students",
    category: "Academic Calendar",
    date: "2024-11-02",
    summary: "The official matriculation and orientation program for fresh diploma students will take place at the Trenchard Hall, University of Ibadan.",
    content: "All newly admitted postgraduate diploma and higher diploma students are cordially invited to the 2024 Orientation and Matriculation ceremony. The event will feature addresses by the Managing Director, Deans of Faculties, and industry guest speakers.",
    tag: "Event"
  },
  {
    id: "news-3",
    title: "Executive Seminar: AI & Big Data Analytics in Modern Business Leadership",
    category: "Seminar & Workshop",
    date: "2024-11-20",
    summary: "A 2-day executive workshop hosted by the Department of Computing & IT Consultancy for postgraduate students and industry professionals.",
    content: "UI Consultancy Unit in partnership with leading technology research institutes is hosting an executive workshop on leveraging Artificial Intelligence and Data Analytics for business growth and operational efficiency.",
    tag: "Workshop"
  }
];

export interface CalendarEvent {
  date: string;
  title: string;
  category: string;
  description: string;
}

export const ACADEMIC_CALENDAR: CalendarEvent[] = [
  { date: "Oct 15 - Nov 30, 2024", title: "Online Application & Document Verification", category: "Admissions", description: "Submission of online application forms and credential verification." },
  { date: "Dec 05, 2024", title: "Release of 1st Batch Admission List", category: "Admissions", description: "Publication of provisional admission letters on the portal." },
  { date: "Dec 12, 2024", title: "Matriculation & Orientation Ceremony", category: "Academic", description: "Official inauguration of 2024/2025 postgraduate cohort." },
  { date: "Jan 06, 2025", title: "Commencement of 1st Semester Lectures", category: "Lectures", description: "Executive weekend physical & online lectures commence." },
  { date: "Apr 18 - Apr 30, 2025", title: "First Semester Examinations", category: "Exams", description: "Conduct of first semester comprehensive assessment tests and written exams." }
];
