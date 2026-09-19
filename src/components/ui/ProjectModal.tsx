"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import { CaseStudy } from "@/types";
import { X, CheckCircle2, Globe, ArrowUpRight } from "lucide-react";
import { Badge } from "./Badge";
import { ProjectVisualMockup } from "./ProjectVisualMockup";
import { useLanguage } from "@/context/LanguageContext";

interface ProjectModalProps {
  project: CaseStudy | null;
  isOpen: boolean;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({
  project,
  isOpen,
  onClose,
}) => {
  const { content, language } = useLanguage();

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }

    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen || !project) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto bg-black/85 backdrop-blur-sm animate-in fade-in duration-150"
      onClick={onClose}
    >
      <div
        className="relative max-w-4xl w-full my-auto bg-zinc-950 border border-zinc-800 rounded-2xl p-6 sm:p-8 max-h-[90vh] overflow-y-auto shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-lg bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-white hover:bg-zinc-800 transition-colors cursor-pointer"
          aria-label={language === "en" ? "Close modal" : "Fechar modal"}
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header */}
        <div className="mb-6 pr-8">
          <div className="flex items-center gap-2 mb-2">
            <span className="text-xs font-mono text-zinc-400">{project.domain}</span>
            <span className="text-zinc-700">/</span>
            <span className="text-xs font-mono text-zinc-400">{project.role}</span>
          </div>
          <div className="flex flex-wrap items-center gap-3">
            {project.id === "familia-escola" && (
              <div className="relative w-8 h-8 rounded-lg overflow-hidden shrink-0 bg-zinc-900 border border-zinc-800 p-1 flex items-center justify-center shadow-sm">
                <Image
                  src="/media/familia-escola/logo-familia-escola.png"
                  alt="Logo Família & Escola"
                  fill
                  className="object-contain p-0.5"
                />
              </div>
            )}
            <h3 className="text-2xl sm:text-3xl font-bold text-zinc-100 tracking-tight">
              {project.title}
            </h3>
            {project.statusBadge && (
              <span className="px-2 py-0.5 rounded bg-zinc-900 border border-zinc-800 text-xs font-mono text-emerald-400">
                {project.statusBadge}
              </span>
            )}
          </div>
          <p className="text-sm text-zinc-400 mt-1">{project.tagline}</p>
        </div>

        {/* Visual Proof Mockup in Modal */}
        <div className="mb-6">
          <h4 className="text-xs font-mono font-semibold text-zinc-400 uppercase tracking-wider mb-2.5">
            {content.nav.visualProofLabel}
          </h4>
          <ProjectVisualMockup project={project} isModal />
        </div>

        {/* Metrics Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 mb-6 p-4 rounded-xl bg-zinc-900/60 border border-zinc-800">
          {project.metrics.map((m, idx) => (
            <div key={idx} className="flex flex-col">
              <span className="text-base font-bold font-mono text-zinc-100">
                {m.value}
              </span>
              <span className="text-[11px] font-mono text-zinc-400 mt-0.5">
                {m.label}
              </span>
            </div>
          ))}
        </div>

        {/* Problem, Solution & Impact */}
        <div className="space-y-4 mb-6">
          <div className="p-4 rounded-xl bg-zinc-900/30 border border-zinc-800/80">
            <h4 className="text-xs font-mono font-semibold text-zinc-400 uppercase tracking-wider mb-1.5">
              {content.nav.problemLabel}
            </h4>
            <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
              {project.problem}
            </p>
          </div>

          <div className="p-4 rounded-xl bg-zinc-900/30 border border-zinc-800/80">
            <h4 className="text-xs font-mono font-semibold text-zinc-200 uppercase tracking-wider mb-1.5">
              {content.nav.solutionLabel}
            </h4>
            <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
              {project.solution}
            </p>
          </div>

          <div className="p-4 rounded-xl bg-zinc-900/30 border border-zinc-800/80">
            <h4 className="text-xs font-mono font-semibold text-emerald-400 uppercase tracking-wider mb-1.5">
              {content.nav.impactLabel}
            </h4>
            <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
              {project.impact}
            </p>
          </div>
        </div>

        {/* Execution Flow */}
        <div className="mb-6">
          <h4 className="text-xs font-mono font-semibold text-zinc-400 uppercase tracking-wider mb-3">
            {content.nav.flowLabel}
          </h4>
          <div className="space-y-2">
            {project.architecture.flow.map((step, idx) => (
              <div
                key={idx}
                className="p-3 rounded-lg bg-zinc-900/40 border border-zinc-800 text-xs text-zinc-300 leading-relaxed font-mono"
              >
                {step}
              </div>
            ))}
          </div>
        </div>

        {/* Key Technical Decisions */}
        <div className="mb-6">
          <h4 className="text-xs font-mono font-semibold text-zinc-400 uppercase tracking-wider mb-2.5">
            {content.nav.decisionsLabel}
          </h4>
          <ul className="space-y-2">
            {project.architecture.technicalDecisions.map((decision, idx) => (
              <li key={idx} className="flex items-start gap-2.5 text-xs text-zinc-300">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                <span className="leading-relaxed">{decision}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Stack Tags */}
        <div className="mb-8">
          <h4 className="text-xs font-mono font-semibold text-zinc-400 uppercase tracking-wider mb-2">
            {content.nav.stackLabel}
          </h4>
          <div className="flex flex-wrap gap-1.5">
            {project.stack.map((t, idx) => (
              <Badge key={idx} variant="secondary">
                {t}
              </Badge>
            ))}
          </div>
        </div>

        {/* Footer Actions */}
        <div className="flex flex-wrap items-center justify-between gap-3 pt-4 border-t border-zinc-800">
          <div className="flex flex-wrap items-center gap-2">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-zinc-900 border border-zinc-700 hover:border-emerald-500 hover:text-white text-zinc-200 text-xs font-mono transition-colors font-medium cursor-pointer"
              >
                <Globe className="w-3.5 h-3.5 text-emerald-400" />
                <span>{content.nav.visitLive}</span>
                <ArrowUpRight className="w-3 h-3 text-zinc-400" />
              </a>
            )}
          </div>

          <button
            type="button"
            onClick={onClose}
            className="px-3 py-1.5 rounded-lg text-xs font-mono text-zinc-400 hover:text-white hover:bg-zinc-900 transition-colors cursor-pointer"
          >
            {content.nav.close}
          </button>
        </div>
      </div>
    </div>
  );
};
