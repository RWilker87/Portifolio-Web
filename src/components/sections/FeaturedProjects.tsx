"use client";

import React, { useState } from "react";
import Image from "next/image";
import { CaseStudy } from "@/types";
import { ProjectModal } from "@/components/ui/ProjectModal";
import { Card } from "@/components/ui/Card";
import { Layers, ArrowUpRight, Globe, Maximize2, CheckCircle2, Sparkles, ShieldCheck, Cpu } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export const FeaturedProjects: React.FC = () => {
  const { content, language } = useLanguage();
  const [selectedProject, setSelectedProject] = useState<CaseStudy | null>(null);

  const featuredProject =
    content.caseStudies.find((p) => p.featured || p.id === "lexfluencia") ||
    content.caseStudies[0];

  const secondaryProjects = content.caseStudies.filter(
    (p) => p.id !== featuredProject.id
  );

  return (
    <section id="projects" className="py-20 sm:py-28 border-b border-zinc-800/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <span className="text-xs font-mono uppercase text-emerald-400 font-semibold tracking-wider block mb-2">
              {language === "en" ? "Engineering Work" : "Engenharia & Projetos Reais"}
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-zinc-100">
              {language === "en"
                ? "Systems in Production & Key Projects"
                : "Sistemas em Produção & Projetos Principais"}
            </h2>
          </div>
          <p className="text-sm text-zinc-400 max-w-md">
            {language === "en"
              ? "Real-world implementations solving municipal education and data governance challenges."
              : "Aplicações reais desenvolvidas para solucionar desafios de gestão educacional e governança de dados."}
          </p>
        </div>

        {/* ==================================================================== */}
        {/* FLAGSHIP CASE: LEXFLUÊNCIA (PROJETO EM DESTAQUE)                    */}
        {/* ==================================================================== */}
        <div className="mb-14">
          <Card className="p-0 overflow-hidden border-zinc-800 bg-zinc-950/90 shadow-xl rounded-2xl">
            {/* Top Meta Header Bar */}
            <div className="flex flex-wrap items-center justify-between gap-3 px-6 py-3.5 border-b border-zinc-800/80 bg-zinc-900/40">
              <div className="flex items-center gap-2.5">
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-emerald-950/70 border border-emerald-800/70 text-xs font-mono text-emerald-300 font-semibold">
                  <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
                  {language === "en" ? "Flagship Case Study" : "Case Principal em Destaque"}
                </span>
                <span className="text-zinc-600 hidden sm:inline">|</span>
                <span className="text-xs font-mono text-zinc-400 hidden sm:inline">
                  {featuredProject.domain}
                </span>
              </div>

              {featuredProject.statusBadge && (
                <div className="flex items-center gap-1.5 text-xs font-mono text-emerald-400">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span>{featuredProject.statusBadge}</span>
                </div>
              )}
            </div>

            {/* Main Content Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 p-6 sm:p-8 lg:p-10 items-start">
              {/* Left Column: Visual Showcase & Real Production Proof (7 cols) */}
              <div className="lg:col-span-7 flex flex-col space-y-4">
                <div
                  className="group relative aspect-[16/10] w-full overflow-hidden rounded-xl border border-zinc-800 bg-zinc-900 cursor-pointer shadow-lg"
                  onClick={() => setSelectedProject(featuredProject)}
                >
                  {featuredProject.visualPreview.mediaUrl && (
                    <Image
                      src={featuredProject.visualPreview.mediaUrl}
                      alt={featuredProject.title}
                      fill
                      priority
                      className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.02]"
                      sizes="(max-width: 1024px) 100vw, 680px"
                    />
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/80 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />

                  {/* Expand Overlay Hint */}
                  <div className="absolute inset-0 flex items-center justify-center gap-2 text-xs font-mono font-medium text-white opacity-0 group-hover:opacity-100 transition-opacity bg-black/40 backdrop-blur-[2px]">
                    <Maximize2 className="w-4 h-4 text-emerald-400" />
                    <span>
                      {language === "en"
                        ? "Click to expand gallery & screens"
                        : "Clique para ampliar telas e galeria"}
                    </span>
                  </div>

                  <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-[11px] font-mono text-zinc-300 bg-zinc-950/85 backdrop-blur-md px-3 py-1.5 rounded-lg border border-zinc-800/80">
                    <span className="truncate">{featuredProject.visualPreview.caption}</span>
                    <span className="text-emerald-400 shrink-0 ml-2">4 Telas Reais</span>
                  </div>
                </div>

                {/* Core Metrics Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 pt-2">
                  {featuredProject.metrics.map((m, idx) => (
                    <div
                      key={idx}
                      className="p-3 rounded-xl bg-zinc-900/50 border border-zinc-800/80 flex flex-col justify-center"
                    >
                      <span className="text-base sm:text-lg font-bold font-mono text-zinc-100">
                        {m.value}
                      </span>
                      <span className="text-[11px] text-zinc-400 mt-0.5 leading-tight">
                        {m.label}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right Column: Engineering Breakdown & Architecture (5 cols) */}
              <div className="lg:col-span-5 flex flex-col justify-between h-full space-y-6">
                <div>
                  <h3 className="text-2xl sm:text-3xl font-bold text-zinc-100 tracking-tight mb-2">
                    {featuredProject.title}
                  </h3>
                  <p className="text-sm font-medium text-emerald-400 mb-5">
                    {featuredProject.tagline}
                  </p>

                  {/* Problem & Solution Narrative */}
                  <div className="space-y-4 text-sm text-zinc-300 leading-relaxed">
                    <div>
                      <span className="text-xs font-mono uppercase text-zinc-400 font-semibold block mb-1">
                        {language === "en" ? "The Real Problem" : "O Desafio Real"}
                      </span>
                      <p className="text-xs sm:text-sm text-zinc-400">
                        {featuredProject.problem}
                      </p>
                    </div>

                    <div>
                      <span className="text-xs font-mono uppercase text-zinc-200 font-semibold block mb-1">
                        {language === "en" ? "Engineering & Architecture" : "Engenharia & Solução"}
                      </span>
                      <p className="text-xs sm:text-sm text-zinc-300">
                        {featuredProject.solution}
                      </p>
                    </div>
                  </div>

                  {/* Key Highlights */}
                  <div className="mt-5 pt-4 border-t border-zinc-800/80 space-y-2 text-xs text-zinc-300">
                    <div className="flex items-start gap-2">
                      <Cpu className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                      <span>
                        {language === "en"
                          ? "Custom LCS (Longest Common Subsequence) diffing algorithm aligned with Whisper API"
                          : "Algoritmo próprio LCS O(m×n) para alinhamento fonético e contagem de pausas"}
                      </span>
                    </div>
                    <div className="flex items-start gap-2">
                      <ShieldCheck className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                      <span>
                        {language === "en"
                          ? "Multi-tenant data isolation enforced by PostgreSQL Row-Level Security (RLS)"
                          : "Isolamento multi-escola por políticas de PostgreSQL Row-Level Security (RLS)"}
                      </span>
                    </div>
                  </div>

                  {/* Technologies */}
                  <div className="mt-5 pt-4 border-t border-zinc-800/80">
                    <span className="text-xs font-mono uppercase text-zinc-400 font-semibold block mb-2">
                      {language === "en" ? "Core Technologies" : "Tecnologias Centrais"}
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {featuredProject.stack.map((t, idx) => (
                        <span
                          key={idx}
                          className="px-2 py-0.5 rounded text-[11px] font-mono bg-zinc-900 text-zinc-300 border border-zinc-800"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Actions */}
                <div className="pt-6 border-t border-zinc-800/80 flex flex-wrap items-center gap-3">
                  <button
                    type="button"
                    onClick={() => setSelectedProject(featuredProject)}
                    className="flex-1 inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-lg bg-zinc-100 hover:bg-white text-zinc-950 text-xs font-medium transition-colors cursor-pointer shadow-sm active:scale-[0.98]"
                  >
                    <Layers className="w-4 h-4 text-zinc-900 shrink-0" />
                    <span>{content.nav.viewArchitecture}</span>
                  </button>

                  {featuredProject.liveUrl && (
                    <a
                      href={featuredProject.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-1.5 py-2.5 px-4 rounded-lg bg-emerald-950/80 hover:bg-emerald-900 text-emerald-300 hover:text-white border border-emerald-800/80 text-xs font-medium transition-colors cursor-pointer shrink-0 active:scale-[0.98]"
                      title={featuredProject.liveUrl}
                    >
                      <Globe className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                      <span>{content.nav.visitLive}</span>
                      <ArrowUpRight className="w-3.5 h-3.5 opacity-80 shrink-0" />
                    </a>
                  )}
                </div>
              </div>
            </div>
          </Card>
        </div>

        {/* ==================================================================== */}
        {/* SECONDARY PROJECTS: 2-COLUMN GRID (SIMREC & FAMÍLIA & ESCOLA)       */}
        {/* ==================================================================== */}
        <div>
          <div className="mb-6 flex items-center justify-between">
            <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-zinc-100">
              {language === "en"
                ? "Other Production Systems & Mobile"
                : "Outros Sistemas em Produção & Mobile"}
            </h3>
            <span className="text-xs text-zinc-400">
              {language === "en" ? "2 complementary cases" : "2 cases complementares"}
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
            {secondaryProjects.map((project, idx) => (
              <Card
                key={project.id}
                className="p-0 overflow-hidden border-zinc-800 bg-zinc-950/80 hover:border-zinc-700 transition-all duration-300 flex flex-col justify-between group shadow-md rounded-xl"
              >
                {/* Media Thumbnail Container */}
                <div
                  className="relative aspect-[16/9] w-full overflow-hidden bg-zinc-900 cursor-pointer border-b border-zinc-800/80"
                  onClick={() => setSelectedProject(project)}
                >
                  {project.visualPreview.mediaUrl ? (
                    <Image
                      src={project.visualPreview.mediaUrl}
                      alt={project.title}
                      fill
                      className="object-cover object-top transition-transform duration-500 ease-out group-hover:scale-[1.02]"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center bg-zinc-900 text-zinc-400 text-xs">
                      {project.title}
                    </div>
                  )}

                  {/* Hover hint */}
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2 text-xs font-medium text-white pointer-events-none backdrop-blur-[1px]">
                    <Maximize2 className="w-4 h-4 text-emerald-400" />
                    <span>{language === "en" ? "Expand Case" : "Ver Detalhes"}</span>
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    {/* Top Meta */}
                    <div className="flex items-center justify-between gap-2 text-xs font-mono text-zinc-400 mb-2">
                      <span className="font-semibold text-zinc-300">
                        0{idx + 2} · {project.domain.split("·")[0].trim()}
                      </span>
                      {project.statusBadge && (
                        <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-md bg-emerald-950/60 border border-emerald-800/60 text-[10px] text-emerald-400">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 shrink-0" />
                          <span>{project.statusBadge}</span>
                        </span>
                      )}
                    </div>

                    {/* Title */}
                    <h4
                      onClick={() => setSelectedProject(project)}
                      className="text-lg font-bold text-zinc-100 tracking-tight group-hover:text-white cursor-pointer transition-colors mb-2"
                    >
                      {project.title}
                    </h4>

                    {/* Tagline */}
                    <p className="text-xs sm:text-sm text-zinc-300 font-medium mb-3">
                      {project.tagline}
                    </p>

                    {/* Concise Summary */}
                    <p className="text-xs text-zinc-400 leading-relaxed mb-5 line-clamp-3">
                      {project.solution}
                    </p>

                    {/* Stack Badges */}
                    <div className="flex flex-wrap gap-1.5 mb-6">
                      {project.stack.slice(0, 4).map((tech, tIdx) => (
                        <span
                          key={tIdx}
                          className="px-2 py-0.5 rounded text-[10px] font-mono bg-zinc-900/90 text-zinc-300 border border-zinc-800"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.stack.length > 4 && (
                        <span className="px-1.5 py-0.5 rounded text-[10px] font-mono text-zinc-500">
                          +{project.stack.length - 4}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Footer Action Strip */}
                  <div className="pt-4 border-t border-zinc-800/80 flex items-center gap-2.5">
                    <button
                      type="button"
                      onClick={() => setSelectedProject(project)}
                      className="flex-1 inline-flex items-center justify-center gap-2 py-2 px-3 rounded-lg bg-zinc-900 hover:bg-zinc-800 text-zinc-200 border border-zinc-800 hover:border-zinc-700 text-xs font-medium transition-colors cursor-pointer whitespace-nowrap shadow-sm active:scale-[0.98]"
                    >
                      <Layers className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                      <span>{language === "en" ? "View Details" : "Ver Detalhes"}</span>
                    </button>

                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-1.5 py-2 px-3.5 rounded-lg bg-emerald-950/80 hover:bg-emerald-900 text-emerald-300 hover:text-white border border-emerald-800/70 text-xs font-medium transition-colors cursor-pointer shrink-0 whitespace-nowrap active:scale-[0.98]"
                        title={project.liveUrl}
                      >
                        <Globe className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                        <span>{language === "en" ? "Live" : "Acessar"}</span>
                        <ArrowUpRight className="w-3 h-3 opacity-80 shrink-0" />
                      </a>
                    )}
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>

      <ProjectModal
        isOpen={!!selectedProject}
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
};

