"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ArrowDown, Copy, Check, ArrowUpRight, MapPin, FileText, Download } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/ui/Icons";
import { Toast } from "@/components/ui/Toast";
import { useLanguage } from "@/context/LanguageContext";

export const Hero: React.FC = () => {
  const { content, language } = useLanguage();
  const [copied, setCopied] = useState(false);
  const [toastOpen, setToastOpen] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(content.profile.contact.email);
    setCopied(true);
    setToastOpen(true);
    setTimeout(() => setCopied(false), 3000);
  };

  return (
    <section className="relative pt-24 pb-20 sm:pt-32 sm:pb-24 border-b border-zinc-800/80">
      <Toast
        isOpen={toastOpen}
        message={
          language === "en"
            ? "Email copied to clipboard (rianwilker17@gmail.com)"
            : "E-mail copiado para a área de transferência (rianwilker17@gmail.com)"
        }
        type="success"
        onClose={() => setToastOpen(false)}
      />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Main Copy (8 cols on large screens) */}
          <div className="lg:col-span-8 order-2 lg:order-1">
            {/* Status badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900/90 border border-zinc-800 text-xs text-zinc-300 mb-6">
              <span className="w-2 h-2 rounded-full bg-emerald-400 shrink-0" />
              <span>{content.profile.status}</span>
            </div>

            {/* Primary Name H1 */}
            <h1 className="text-4xl sm:text-6xl font-bold tracking-tight text-zinc-100 leading-tight mb-3">
              {content.profile.name}
            </h1>

            {/* Subheading: Professional Role */}
            <p className="text-xl sm:text-2xl font-semibold text-zinc-200 mb-6">
              {content.profile.title}
            </p>

            {/* Authentic Description */}
            <p className="text-base sm:text-lg text-zinc-400 font-normal leading-relaxed mb-8">
              {language === "en" ? (
                <>
                  Final-year Computer Science student at{" "}
                  <span className="text-zinc-200 font-medium">UFAPE</span>. I engineer
                  full-stack web systems (Next.js, TypeScript, PostgreSQL) and cross-platform
                  mobile apps (Flutter) to solve real-world problems in public education and
                  data governance. My hands-on experience with end users ensures I understand
                  workflows thoroughly before designing software architectures.
                </>
              ) : (
                <>
                  Em fase final de Ciência da Computação na{" "}
                  <span className="text-zinc-200 font-medium">UFAPE</span>. Desenvolvo
                  sistemas web full stack (Next.js, TypeScript, PostgreSQL) e aplicativos
                  móveis (Flutter) para resolver desafios reais de gestão educacional e dados
                  públicos. Minha vivência prática com usuários me permite entender a fundo a
                  regra de negócio antes de desenhar qualquer arquitetura de software.
                </>
              )}
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-3 mb-10">
              <a
                href="#projects"
                className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg bg-zinc-100 text-zinc-950 hover:bg-white text-sm font-medium transition-all cursor-pointer shadow-sm active:scale-[0.98]"
              >
                <span>{content.nav.viewProjects}</span>
                <ArrowDown className="w-4 h-4" />
              </a>

              <button
                onClick={handleCopyEmail}
                type="button"
                className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-zinc-900 text-zinc-300 hover:text-white hover:bg-zinc-800/90 border border-zinc-800 text-sm font-medium transition-all cursor-pointer active:scale-[0.98]"
                title="Clique para copiar o e-mail"
              >
                {copied ? (
                  <>
                    <Check className="w-4 h-4 text-emerald-400" />
                    <span className="text-emerald-400 font-medium">
                      {language === "en" ? "Copied" : "Copiado"}
                    </span>
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4 text-zinc-400" />
                    <span>{content.profile.contact.email}</span>
                  </>
                )}
              </button>

              {content.profile.contact.cvUrl && (
                <a
                  href={content.profile.contact.cvUrl}
                  download="CV - Rian Wilker Santos Melo.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-zinc-900/80 text-zinc-300 hover:text-white hover:bg-zinc-800 border border-zinc-800 text-sm font-medium transition-all cursor-pointer active:scale-[0.98]"
                  title={language === "en" ? "Download CV in PDF" : "Baixar Currículo em PDF"}
                >
                  <Download className="w-4 h-4 text-emerald-400" />
                  <span>{content.nav.downloadCv || "Baixar CV"}</span>
                </a>
              )}

              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-transparent text-zinc-300 hover:text-white border border-zinc-700/80 hover:border-zinc-500 text-sm font-medium transition-all cursor-pointer active:scale-[0.98]"
              >
                <span>{content.nav.getInTouch}</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>

            {/* Context footer strip */}
            <div className="flex flex-wrap items-center gap-4 sm:gap-6 pt-6 border-t border-zinc-800/80 text-xs font-mono text-zinc-400">
              <a
                href={content.profile.contact.github}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-zinc-100 transition-colors flex items-center gap-1.5"
              >
                <GithubIcon className="w-4 h-4" />
                <span>GitHub</span>
              </a>
              <a
                href={content.profile.contact.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-zinc-100 transition-colors flex items-center gap-1.5"
              >
                <LinkedinIcon className="w-4 h-4" />
                <span>LinkedIn</span>
              </a>
              {content.profile.contact.cvUrl && (
                <a
                  href={content.profile.contact.cvUrl}
                  download="CV - Rian Wilker Santos Melo.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-emerald-300 text-emerald-400/90 transition-colors flex items-center gap-1.5"
                >
                  <FileText className="w-3.5 h-3.5" />
                  <span>CV (PDF)</span>
                </a>
              )}
              <span className="text-zinc-700 hidden sm:inline">|</span>
              <span className="flex items-center gap-1 text-zinc-400">
                <MapPin className="w-3.5 h-3.5 text-zinc-500" />
                <span>Garanhuns, PE · Brasil</span>
              </span>
            </div>
          </div>

          {/* Profile Portrait Card (4 cols on large screens - clean solid border, no artificial glow) */}
          <div className="lg:col-span-4 order-1 lg:order-2 flex justify-center lg:justify-end">
            <div className="relative group w-44 sm:w-56 lg:w-full max-w-[280px]">
              <div className="relative rounded-2xl bg-zinc-950 border border-zinc-800 p-2 overflow-hidden shadow-xl">
                <div className="relative aspect-[4/5] w-full overflow-hidden rounded-xl bg-zinc-900">
                  <Image
                    src="/media/eu/rian-perfil.jpg"
                    alt="Rian Wilker"
                    fill
                    priority
                    className="object-cover object-[center_20%] transition-transform duration-500 group-hover:scale-[1.02]"
                    sizes="(max-width: 640px) 180px, (max-width: 1024px) 240px, 280px"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
