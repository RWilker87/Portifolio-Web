"use client";

import React from "react";
import Image from "next/image";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { CheckCircle2, Users, BookOpen, Sparkles } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export const ExperienceLeadership: React.FC = () => {
  const { content, language } = useLanguage();

  return (
    <section id="experience" className="py-20 sm:py-28 border-b border-zinc-800/80">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-14">
          <span className="text-xs font-mono uppercase text-emerald-400 font-semibold tracking-wider block mb-2">
            {language === "en" ? "Professional Trajectory" : "Trajetória Profissional"}
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-zinc-100 mb-3">
            {language === "en"
              ? "Tech Enablement & Real-World Impact"
              : "Formação em Tecnologia & Impacto Prático"}
          </h2>
          <p className="text-sm sm:text-base text-zinc-400 max-w-2xl leading-relaxed">
            {language === "en"
              ? "My experience working closely with public school educators and non-technical stakeholders gives me a distinct edge: understanding user pain points deeply before translating them into software."
              : "Minha atuação próxima a professores da rede pública e gestores traz um diferencial prático: compreender os problemas e o fluxo de trabalho dos usuários antes de transformar necessidades em software."}
          </p>
        </div>

        {/* Experience Timeline */}
        <div className="space-y-6">
          {content.experience.map((item, idx) => (
            <Card
              key={idx}
              className="p-6 sm:p-8 bg-zinc-950/70 border-zinc-800 flex flex-col justify-between"
            >
              <div>
                <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-zinc-800/80 mb-5">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-zinc-900 border border-zinc-800 text-zinc-300">
                      <BookOpen className="w-4 h-4" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-zinc-100">
                        {item.role}
                      </h3>
                      <p className="text-xs font-mono text-zinc-400 mt-0.5">
                        {item.organization}
                      </p>
                    </div>
                  </div>
                  <Badge variant="outline">{item.period}</Badge>
                </div>

                <p className="text-sm text-zinc-300 leading-relaxed mb-6">
                  {item.description}
                </p>

                <div className="space-y-3 mb-6">
                  <span className="text-xs font-mono uppercase text-zinc-400 font-semibold block">
                    {language === "en"
                      ? "Key Activities & Contributions"
                      : "Principais Atividades & Contribuições"}
                  </span>
                  {item.responsibilities.map((resp, rIdx) => (
                    <div
                      key={rIdx}
                      className="flex items-start gap-2.5 text-xs sm:text-sm text-zinc-300 leading-relaxed"
                    >
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-1" />
                      <span>{resp}</span>
                    </div>
                  ))}
                </div>

                {/* Visual In-Action Proof Showcase */}
                <div className="pt-6 border-t border-zinc-800/80 mb-6">
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
                    <span className="text-xs font-mono uppercase text-emerald-400 font-semibold flex items-center gap-2">
                      <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
                      {language === "en" ? "Visual Records: In Action" : "Registros Reais em Ação"}
                    </span>
                    <span className="text-[11px] font-mono text-zinc-500">
                      {language === "en" ? "Stage talk & laboratory training" : "Palestra ao vivo e formação em laboratório"}
                    </span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Live Presentation (GIF) */}
                    <div className="group rounded-xl bg-zinc-900/60 border border-zinc-800 overflow-hidden hover:border-zinc-700 transition-all flex flex-col">
                      <div className="relative aspect-[4/5] w-full overflow-hidden bg-zinc-950">
                        <Image
                          src="/media/eu/palestrando.gif"
                          alt={language === "en" ? "Rian Wilker presenting at educational technology event" : "Rian Wilker palestrando em formação educacional"}
                          fill
                          unoptimized
                          className="object-cover object-center group-hover:scale-[1.02] transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/90 via-zinc-950/20 to-transparent" />
                        <div className="absolute top-3 left-3">
                          <span className="px-2.5 py-1 rounded-md bg-zinc-950/80 backdrop-blur-md border border-zinc-800 text-[11px] font-mono text-emerald-400 flex items-center gap-1.5 shadow-sm">
                            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                            {language === "en" ? "Live Talk / Presentation" : "Palestra & Apresentação"}
                          </span>
                        </div>
                      </div>
                      <div className="p-3.5 bg-zinc-900/50 border-t border-zinc-800/80">
                        <p className="text-xs font-semibold text-zinc-200">
                          {language === "en"
                            ? "Educational Technology Enablement"
                            : "Formação em Tecnologia & Alinhamento"}
                        </p>
                        <p className="text-xs text-zinc-400 mt-0.5 leading-relaxed font-sans">
                          {language === "en"
                            ? "Communicating technical concepts to municipal educators"
                            : "Comunicação e mediação pedagógica com educadores da rede"}
                        </p>
                      </div>
                    </div>

                    {/* Hands-on Lab Training */}
                    <div className="group rounded-xl bg-zinc-900/60 border border-zinc-800 overflow-hidden hover:border-zinc-700 transition-all flex flex-col">
                      <div className="relative aspect-[4/5] w-full overflow-hidden bg-zinc-950">
                        <Image
                          src="/media/eu/formacao-tecnologica.jpg"
                          alt={language === "en" ? "Hands-on computer training in school laboratory" : "Oficina prática em laboratório de informática"}
                          fill
                          className="object-cover object-center group-hover:scale-[1.02] transition-transform duration-500"
                          sizes="(max-width: 768px) 100vw, 50vw"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/90 via-zinc-950/20 to-transparent" />
                        <div className="absolute top-3 left-3">
                          <span className="px-2.5 py-1 rounded-md bg-zinc-950/80 backdrop-blur-md border border-zinc-800 text-[11px] font-mono text-zinc-300 shadow-sm">
                            {language === "en" ? "Computer Lab Workshop" : "Oficina em Laboratório"}
                          </span>
                        </div>
                      </div>
                      <div className="p-3.5 bg-zinc-900/50 border-t border-zinc-800/80">
                        <p className="text-xs font-semibold text-zinc-200">
                          {language === "en"
                            ? "Hands-on Digital Literacy & BNCC Computação"
                            : "Prática Digital & BNCC Computação"}
                        </p>
                        <p className="text-xs text-zinc-400 mt-0.5 leading-relaxed font-sans">
                          {language === "en"
                            ? "Supporting teachers in school computer labs"
                            : "Capacitação prática com professores em computadores"}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-zinc-900/60 border border-zinc-800 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs font-sans">
                <div className="flex items-center gap-2 text-zinc-400">
                  <Users className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span className="font-mono uppercase text-[11px] font-semibold text-zinc-400">
                    {language === "en" ? "Core Takeaway:" : "Diferencial:"}
                  </span>
                </div>
                <span className="text-zinc-200 font-medium">
                  {item.impactMetric}
                </span>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
