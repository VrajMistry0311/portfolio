import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Vraj Mistry — Full-Stack Engineer & AI Specialist",
  description:
    "Portfolio of Vraj Mistry — Software Development Engineer with 3+ years of experience in .NET microservices, AI chatbot development, and Angular-based frontend engineering. Specializing in enterprise-scale RAG chatbots and high-performance backend systems.",
  keywords: [
    "Vraj Mistry",
    "Software Engineer",
    "Full Stack Developer",
    "AI Engineer",
    "Angular Developer",
    ".NET Developer",
    "Portfolio",
    "LLM",
    "RAG",
  ],
  authors: [{ name: "Vraj Mistry" }],
  openGraph: {
    title: "Vraj Mistry — Full-Stack Engineer & AI Specialist",
    description:
      "3+ years building enterprise AI solutions, microservices, and cutting-edge frontends.",
    type: "website",
    locale: "en_US",
    url: "https://vrajmistry.dev",
  },
  twitter: {
    card: "summary_large_image",
    title: "Vraj Mistry — Full-Stack Engineer & AI Specialist",
    description:
      "3+ years building enterprise AI solutions, microservices, and cutting-edge frontends.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
