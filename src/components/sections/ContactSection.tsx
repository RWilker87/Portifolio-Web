"use client";

import React, { useState } from "react";
import { Card } from "@/components/ui/Card";
import { Toast } from "@/components/ui/Toast";
import { GithubIcon, LinkedinIcon } from "@/components/ui/Icons";
import { Copy, Check, ArrowUpRight, MapPin, Mail, FileText, Download } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export const ContactSection: React.FC = () => {
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
    <section id="contact" className="py-20 sm:py-28 border-b border-zinc-800/80">
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
        {/* Section Header */}
        <div className="mb-14 max-w-2xl">
          <span className="text-xs font-mono uppercase text-emerald-400 font-semibold tracking-wider block mb-2">
            {language === "en" ? "Contact" : "Contato"}
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-zinc-100 mb-3">
            {language === "en"
              ? "Let's Connect & Talk Engineering"
              : "Vamos Conversar Sobre Oportunidades & Engenharia"}
          </h2>
          <p className="text-sm sm:text-base text-zinc-400 leading-relaxed">
            {language === "en"
              ? "Open for remote full-stack engineering roles, collaborative systems, and software opportunities."
              : "Disponível para posições de desenvolvimento de software full stack, web e mobile, em regime remoto ou presencial."}
          </p>
        </div>

        {/* Focused Direct Channels Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Primary Email Card */}
          <Card className="p-6 sm:p-7 bg-zinc-950/80 border-zinc-800 md:col-span-3 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between gap-2 mb-3">
                <div className="flex items-center gap-2 text-xs font-mono uppercase text-zinc-400 font-semibold">
                  <Mail className="w-3.5 h-3.5 text-emerald-400" />
                  <span>{language === "en" ? "Direct Email" : "E-mail Direto"}</span>
                </div>
                <button
                  onClick={handleCopyEmail}
                  type="button"
                  className="flex items-center gap-1.5 px-3 py-1 rounded-md text-xs font-mono bg-zinc-900 border border-zinc-800 text-zinc-300 hover:text-white hover:border-zinc-600 transition-colors cursor-pointer"
                >
                  {copied ? (
                    <>
                      <Check className="w-3 h-3 text-emerald-400" />
                      <span className="text-emerald-400 font-medium">
                        {language === "en" ? "Copied" : "Copiado"}
                      </span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3 h-3 text-zinc-400" />
                      <span>{language === "en" ? "Copy" : "Copiar"}</span>
                    </>
                  )}
                </button>
              </div>

              <a
                href={`mailto:${content.profile.contact.email}`}
                className="text-xl sm:text-2xl font-bold font-mono text-zinc-100 hover:text-white transition-colors break-all"
              >
                {content.profile.contact.email}
              </a>
              <p className="text-xs text-zinc-400 mt-2 font-mono">
                {language === "en"
                  ? "Direct inbox. Always open for engineering discussions and interview invitations."
                  : "Canal direto. Aberto para conversas técnicas, processos seletivos e novas ideias."}
              </p>
            </div>
          </Card>

          {/* LinkedIn Profile */}
          <a
            href={content.profile.contact.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="p-5 sm:p-6 rounded-2xl bg-zinc-950/80 border border-zinc-800 hover:border-zinc-700 transition-colors group flex items-center justify-between"
          >
            <div className="flex items-center gap-3.5">
              <div className="p-2.5 rounded-lg bg-zinc-900 border border-zinc-800 text-zinc-300">
                <LinkedinIcon className="w-4 h-4" />
              </div>
              <div className="min-w-0">
                <span className="text-[11px] font-mono uppercase text-zinc-400 block">
                  LinkedIn
                </span>
                <span className="text-sm font-semibold text-zinc-200 group-hover:text-white truncate block">
                  rian-wilker
                </span>
              </div>
            </div>
            <ArrowUpRight className="w-4 h-4 text-zinc-500 group-hover:text-zinc-300 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 shrink-0" />
          </a>

          {/* GitHub Profile */}
          <a
            href={content.profile.contact.github}
            target="_blank"
            rel="noopener noreferrer"
            className="p-5 sm:p-6 rounded-2xl bg-zinc-950/80 border border-zinc-800 hover:border-zinc-700 transition-colors group flex items-center justify-between"
          >
            <div className="flex items-center gap-3.5">
              <div className="p-2.5 rounded-lg bg-zinc-900 border border-zinc-800 text-zinc-300">
                <GithubIcon className="w-4 h-4" />
              </div>
              <div className="min-w-0">
                <span className="text-[11px] font-mono uppercase text-zinc-400 block">
                  GitHub
                </span>
                <span className="text-sm font-semibold text-zinc-200 group-hover:text-white truncate block">
                  RWilker87
                </span>
              </div>
            </div>
            <ArrowUpRight className="w-4 h-4 text-zinc-500 group-hover:text-zinc-300 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 shrink-0" />
          </a>

          {/* Curriculum Vitae (PDF) */}
          <a
            href={content.profile.contact.cvUrl || "/cv-rian-wilker.pdf"}
            download="CV - Rian Wilker Santos Melo.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="p-5 sm:p-6 rounded-2xl bg-zinc-950/80 border border-emerald-900/40 hover:border-emerald-500/50 transition-colors group flex items-center justify-between"
          >
            <div className="flex items-center gap-3.5">
              <div className="p-2.5 rounded-lg bg-emerald-950/40 border border-emerald-800/50 text-emerald-400">
                <FileText className="w-4 h-4" />
              </div>
              <div className="min-w-0">
                <span className="text-[11px] font-mono uppercase text-emerald-400 block font-semibold">
                  {language === "en" ? "Curriculum Vitae" : "Currículo PDF"}
                </span>
                <span className="text-sm font-semibold text-zinc-200 group-hover:text-white truncate block">
                  {language === "en" ? "Download CV" : "Baixar Currículo"}
                </span>
              </div>
            </div>
            <Download className="w-4 h-4 text-emerald-500 group-hover:text-emerald-300 transition-transform group-hover:translate-y-0.5 shrink-0" />
          </a>

          {/* Location */}
          <div className="p-4 rounded-xl bg-zinc-950/60 border border-zinc-800/80 flex items-center gap-3 md:col-span-3">
            <MapPin className="w-4 h-4 text-emerald-400 shrink-0" />
            <span className="text-xs font-mono text-zinc-400">
              {content.profile.location}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
