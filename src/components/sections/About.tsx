"use client";

import React from "react";
import { Card } from "@/components/ui/Card";
import { GraduationCap } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export const About: React.FC = () => {
  const { content, language } = useLanguage();

  return (
    <section id="about" className="py-20 sm:py-28 border-b border-zinc-800/80">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-14">
          <span className="text-xs font-mono uppercase text-emerald-400 font-semibold tracking-wider block mb-2">
            {language === "en" ? "Academic & Principles" : "Formação & Filosofia"}
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-zinc-100 mb-3">
            {language === "en"
              ? "Education & How I Work"
              : "Formação Acadêmica & Como Trabalho"}
          </h2>
          <p className="text-sm sm:text-base text-zinc-400 max-w-2xl leading-relaxed">
            {language === "en"
              ? "Grounding in computer science fundamentals combined with practical principles for delivering reliable software."
              : "Base sólida nos fundamentos de ciência da computação aliada a princípios pragmáticos de engenharia de software."}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Bio & Education (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            <Card className="p-6 sm:p-7 bg-zinc-950/70 border-zinc-800">
              <h3 className="text-base font-bold text-zinc-100 mb-3">
                {language === "en" ? "Background & Approach" : "Trajetória & Abordagem"}
              </h3>
              <p className="text-sm text-zinc-300 leading-relaxed mb-4">
                {content.profile.summary}
              </p>
              <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
                {language === "en"
                  ? "Whether designing speech recognition pipelines with OpenAI Whisper and custom LCS diffing, or building reactive dashboards for municipal education with PostgreSQL Row-Level Security, my focus is always on type-safety, database-enforced security, and genuine usability."
                  : "Seja integrando modelos de transcrição de fala com Whisper e algoritmo próprio de alinhamento LCS, ou construindo dashboards reativos para redes públicas com PostgreSQL RLS, meu foco está na tipagem rigorosa, na segurança no nível do banco e na facilidade de uso real."}
              </p>
            </Card>

            <Card className="p-6 sm:p-7 bg-zinc-950/70 border-zinc-800">
              <div className="flex items-start gap-4">
                <div className="p-2.5 rounded-lg bg-zinc-900 border border-zinc-800 shrink-0 text-zinc-300">
                  <GraduationCap className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-mono uppercase text-zinc-400 font-semibold">
                    {language === "en" ? "Academic Education" : "Formação Acadêmica"}
                  </span>
                  <h4 className="text-base font-bold text-zinc-100 mt-1">
                    {content.profile.education.degree}
                  </h4>
                  <p className="text-xs font-mono text-emerald-400 mt-0.5">
                    {content.profile.education.institution}
                  </p>
                  <p className="text-xs sm:text-sm text-zinc-400 mt-2.5 leading-relaxed">
                    {content.profile.education.details}
                  </p>
                </div>
              </div>
            </Card>
          </div>

          {/* Core Principles (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            <span className="text-xs font-mono uppercase text-zinc-400 font-semibold tracking-wider block mb-2">
              {language === "en" ? "Core Principles" : "Princípios de Trabalho"}
            </span>

            {content.profile.corePrinciples.map((item, idx) => (
              <div
                key={idx}
                className="p-5 rounded-xl bg-zinc-950/70 border border-zinc-800"
              >
                <div className="flex items-center gap-2 mb-1.5">
                  <span className="text-xs font-mono font-bold text-emerald-400">
                    0{idx + 1}.
                  </span>
                  <h4 className="text-xs sm:text-sm font-bold text-zinc-100">
                    {item.principle}
                  </h4>
                </div>
                <p className="text-xs text-zinc-400 leading-relaxed font-sans">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
