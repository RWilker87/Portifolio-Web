import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/context/LanguageContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Rian Wilker — Desenvolvedor de Software Full Stack & Mobile",
  description:
    "Desenvolvedor de Software em fase final de Ciência da Computação (UFAPE). Especialista em sistemas web resilientes (Next.js, TypeScript, Node.js), aplicativos móveis (Flutter) e banco de dados (PostgreSQL RLS, Supabase).",
  keywords: [
    "Rian Wilker",
    "Desenvolvedor Full Stack",
    "Engenheiro de Software",
    "Full Stack Engineer",
    "Next.js",
    "React 19",
    "TypeScript",
    "Flutter",
    "Supabase",
    "PostgreSQL RLS",
    "OpenAI Whisper",
    "UFAPE",
  ],
  authors: [{ name: "Rian Wilker" }],
  creator: "Rian Wilker",
  openGraph: {
    title: "Rian Wilker — Desenvolvedor de Software Full Stack & Mobile",
    description:
      "Sistemas web full stack, aplicativos móveis e soluções com dados governados e foco em problemas reais.",
    type: "website",
    locale: "pt_BR",
  },
  twitter: {
    card: "summary_large_image",
    title: "Rian Wilker — Desenvolvedor de Software Full Stack & Mobile",
    description:
      "Sistemas web full stack, aplicativos móveis e soluções com dados governados e foco em problemas reais.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="pt-BR"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased dark`}
    >
      <body className="min-h-full flex flex-col bg-[#090a0c] text-zinc-100 font-sans selection:bg-zinc-800 selection:text-zinc-100">
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
