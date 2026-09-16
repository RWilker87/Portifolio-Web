"use client";

import React from "react";
import { ArrowUp } from "lucide-react";
import { GithubIcon } from "@/components/ui/Icons";
import { useLanguage } from "@/context/LanguageContext";

export const Footer: React.FC = () => {
  const { content, language } = useLanguage();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="py-12 bg-zinc-950 text-zinc-400">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex flex-col text-center sm:text-left">
            <span className="text-xs font-mono font-medium text-zinc-300">
              © {new Date().getFullYear()} {content.profile.name}. {language === "en" ? "All rights reserved." : "Todos os direitos reservados."}
            </span>
            <span className="text-[11px] font-mono text-zinc-400 mt-0.5">
              {language === "en"
                ? "Built with Next.js (App Router), React 19, TypeScript & Tailwind CSS v4."
                : "Construído com Next.js (App Router), React 19, TypeScript & Tailwind CSS v4."}
            </span>
          </div>

          <div className="flex items-center gap-4">
            <a
              href={content.profile.contact.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-mono text-zinc-400 hover:text-zinc-100 transition-colors"
            >
              <GithubIcon className="w-3.5 h-3.5" />
              <span>GitHub</span>
            </a>

            <button
              onClick={scrollToTop}
              className="p-2 rounded-lg bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-white hover:border-zinc-700 transition-colors"
              aria-label={content.nav.backToTop}
              title={content.nav.backToTop}
            >
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
