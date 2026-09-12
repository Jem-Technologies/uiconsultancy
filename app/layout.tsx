import type { Metadata } from "next";
import "./globals.css";
import { ToastProvider } from "@/components/ToastProvider";

export const metadata: Metadata = {
  title: "University of Ibadan Consultancy Services Unit | Executive & Professional Diplomas",
  description: "Official portal for University of Ibadan Consultancy Services Unit executive diplomas, higher diplomas, and professional development certifications.",
  keywords: [
    "University of Ibadan", 
    "UI Consultancy Services Unit", 
    "Executive Diploma Nigeria",
    "Diploma Computer Science",
    "Professional Certificates",
    "Ibadan Executive Diplomas",
    "Executive Diplomas"
  ],
  openGraph: {
    title: "University of Ibadan Consultancy Services Unit",
    description: "Senate Accredited Executive Diplomas & Higher Executive Diplomas.",
    url: "https://uiconsultancy.org",
    siteName: "University of Ibadan Consultancy Services Unit",
    locale: "en_NG",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    "name": "University of Ibadan Consultancy Services Unit",
    "url": "https://uiconsultancy.org",
    "logo": "https://uiconsultancy.org/logo.png",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Commercial Avenue, University of Ibadan Campus",
      "addressLocality": "Ibadan",
      "addressRegion": "Oyo State",
      "addressCountry": "NG"
    },
    "sameAs": [
      "https://www.ui.edu.ng"
    ]
  };

  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,100..1000;1,9..40,100..1000&display=swap" rel="stylesheet" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="antialiased text-slate-800 bg-slate-50 font-sans">
        <ToastProvider>
          {children}
        </ToastProvider>
      </body>
    </html>
  );
}
