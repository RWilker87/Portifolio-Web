"use client";

import React from "react";
import { Layers, Database, Smartphone } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export const SkillsArchitecture: React.FC = () => {
  const { content, language } = useLanguage();

  const categoryIcons = [
    <Layers key="1" className="w-4 h-4 text-emerald-400" />,
    <Database key="2" className="w-4 h-4 text-emerald-400" />,
    <Smartphone key="3" className="w-4 h-4 text-emerald-400" />,
  ];

  return (
    <section id="skills" className="py-20 sm:py-28 border-b border-zinc-800/80">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-14">
          <span className="text-xs font-mono uppercase text-emerald-400 font-semibold tracking-wider block mb-2">
            {language === "en" ? "Technical Stack & Evidence" : "Stack Técnica & Evidências"}
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-zinc-100 mb-3">
            {language === "en"
              ? "Technologies Applied to Real Problems"
              : "Tecnologias Aplicadas a Problemas Reais"}
          </h2>
          <p className="text-sm sm:text-base text-zinc-400 max-w-2xl leading-relaxed">
            {language === "en"
              ? "Instead of an abstract checklist, each technology reflects hands-on usage in production systems, architectural security, and user-facing delivery."
              : "Em vez de uma lista abstrata, cada tecnologia reflete uso comprovado em sistemas em produção, segurança de dados e contato com usuários reais."}
          </p>
        </div>

        {/* 3 Domain Layers - Clean Architectural Layout */}
        <div className="space-y-8">
          {content.skillGroups.map((group, idx) => (
            <div
              key={idx}
              className="p-6 sm:p-8 rounded-2xl bg-zinc-950/60 border border-zinc-800/80"
            >
              {/* Category Header */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-5 border-b border-zinc-800/80 mb-6">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-zinc-900 border border-zinc-800">
                    {categoryIcons[idx]}
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-zinc-100 tracking-tight">
                      {group.category}
                    </h3>
                    <p className="text-xs text-zinc-400 mt-0.5">
                      {group.description}
                    </p>
                  </div>
                </div>
              </div>

              {/* Skills Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {group.skills.map((skill, sIdx) => (
                  <div key={sIdx} className="flex flex-col justify-between">
                    <div>
                      <div className="flex flex-wrap items-center justify-between gap-2 mb-1.5">
                        <h4 className="text-sm font-semibold text-zinc-100">
                          {skill.name}
                        </h4>
                        {skill.appliedIn && (
                          <span className="text-[10px] font-mono text-emerald-400 bg-emerald-950/60 border border-emerald-800/50 px-2 py-0.5 rounded">
                            {skill.appliedIn}
                          </span>
                        )}
                      </div>
                      <p className="text-xs text-zinc-400 leading-relaxed mb-3">
                        {skill.description}
                      </p>
                    </div>

                    <div className="flex flex-wrap gap-1.5">
                      {skill.tags.map((tag, tIdx) => (
                        <span
                          key={tIdx}
                          className="px-2 py-0.5 rounded text-[10px] font-mono bg-zinc-900/80 text-zinc-400 border border-zinc-800/80"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
