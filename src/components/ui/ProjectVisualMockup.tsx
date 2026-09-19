"use client";

import React, { useState } from "react";
import { CaseStudy } from "@/types";
import {
  Smartphone,
  Maximize2,
  X,
  ChevronLeft,
  ChevronRight,
  Eye,
  CheckCircle2,
  Bell,
  Zap,
} from "lucide-react";
import { cn } from "@/lib/utils";

interface ProjectVisualMockupProps {
  project: CaseStudy;
  className?: string;
  isModal?: boolean;
}

export const ProjectVisualMockup: React.FC<ProjectVisualMockupProps> = ({
  project,
  className,
}) => {
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);

  const gallery =
    project.visualPreview.gallery ||
    (project.visualPreview.mediaUrl
      ? [
          {
            title: project.title,
            url: project.visualPreview.mediaUrl,
            caption: project.visualPreview.caption,
          },
        ]
      : null);

  // Case 1: Real Production Screenshots Gallery (fluênciaCAP & SIMREC)
  if (gallery && gallery.length > 0) {
    const currentItem = gallery[activeImageIndex] || gallery[0];

    return (
      <div className={cn("w-full flex flex-col space-y-3 select-none", className)}>
        {/* Gallery Segmented Switcher */}
        {gallery.length > 1 && (
          <div className="flex items-center gap-1.5 overflow-x-auto p-1 rounded-lg bg-zinc-900/90 border border-zinc-800 w-fit max-w-full">
            {gallery.map((item, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => setActiveImageIndex(idx)}
                className={cn(
                  "px-3 py-1 rounded-md text-xs font-mono whitespace-nowrap transition-all cursor-pointer",
                  activeImageIndex === idx
                    ? "bg-zinc-800 text-zinc-100 font-semibold shadow-sm border border-zinc-700"
                    : "text-zinc-400 hover:text-zinc-200 hover:bg-zinc-800/40"
                )}
              >
                {item.title}
              </button>
            ))}
          </div>
        )}

        {/* Screenshot Window Container */}
        <div className="relative overflow-hidden rounded-xl border border-zinc-800 bg-zinc-950 shadow-lg group">
          {/* Top Window Bar */}
          <div className="flex items-center justify-between px-3.5 py-2 border-b border-zinc-800 bg-zinc-900/80">
            <div className="flex items-center gap-2">
              <div className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-zinc-700" />
                <span className="w-2.5 h-2.5 rounded-full bg-zinc-700" />
                <span className="w-2.5 h-2.5 rounded-full bg-zinc-700" />
              </div>
              <span className="ml-2 text-xs font-mono text-zinc-300 truncate max-w-[200px] sm:max-w-md">
                {currentItem.title}
              </span>
            </div>

            <div className="flex items-center gap-2">
              <span className="text-[11px] font-mono text-zinc-400">
                {activeImageIndex + 1} / {gallery.length}
              </span>
              <button
                type="button"
                onClick={() => setLightboxOpen(true)}
                className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded bg-zinc-800/80 text-zinc-300 hover:text-white hover:bg-zinc-700 transition-colors text-xs font-mono cursor-pointer border border-zinc-700/60"
                title="Ampliar captura em alta resolução"
              >
                <Maximize2 className="w-3 h-3" />
                <span className="hidden sm:inline">Ampliar</span>
              </button>
            </div>
          </div>

          {/* Screenshot Viewport */}
          <div
            className={cn(
              "relative aspect-[16/9] w-full overflow-hidden bg-zinc-950 cursor-pointer flex items-center justify-center",
              currentItem.url.includes("logo") && "bg-gradient-to-b from-zinc-900/90 via-zinc-950 to-zinc-900/90"
            )}
            onClick={() => setLightboxOpen(true)}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={currentItem.url}
              alt={currentItem.title}
              className={cn(
                "transition-transform duration-200 group-hover:scale-[1.01]",
                currentItem.url.includes("logo")
                  ? "w-full h-full object-contain p-6 drop-shadow-[0_15px_30px_rgba(0,0,0,0.6)]"
                  : "w-full h-full object-cover object-top"
              )}
            />

            {/* Hover overlay hint */}
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2 text-xs font-mono text-white pointer-events-none">
              <Eye className="w-4 h-4" />
              <span>Clique para ampliar a captura</span>
            </div>
          </div>

          {/* Caption strip */}
          <div className="px-3.5 py-2.5 border-t border-zinc-800 bg-zinc-900/60 text-xs font-mono text-zinc-400 flex flex-col sm:flex-row sm:items-center justify-between gap-1">
            <span className="truncate">{currentItem.caption}</span>
            <span className="text-[10px] text-zinc-400 uppercase tracking-wider shrink-0 font-medium">
              {project.visualPreview.badge}
            </span>
          </div>
        </div>

        {/* 3 Pillars of Mobile Engineering for familia-escola */}
        {project.id === "familia-escola" && (
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-1">
            <div className="p-3 rounded-lg bg-zinc-900/60 border border-zinc-800/80">
              <div className="flex items-center gap-1.5 text-zinc-200 font-bold text-[11px] mb-1">
                <Zap className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span>Chamada em Lote</span>
              </div>
              <p className="text-[11px] text-zinc-400 leading-relaxed font-sans">
                Registro de frequência em menos de 2 minutos por turma, desenhado para sala de aula.
              </p>
            </div>

            <div className="p-3 rounded-lg bg-zinc-900/60 border border-zinc-800/80">
              <div className="flex items-center gap-1.5 text-zinc-200 font-bold text-[11px] mb-1">
                <Bell className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span>Notificações FCM</span>
              </div>
              <p className="text-[11px] text-zinc-400 leading-relaxed font-sans">
                Disparo instantâneo de alertas de ausência no celular dos pais cadastrados.
              </p>
            </div>

            <div className="p-3 rounded-lg bg-zinc-900/60 border border-zinc-800/80">
              <div className="flex items-center gap-1.5 text-zinc-200 font-bold text-[11px] mb-1">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span>Validação IHC</span>
              </div>
              <p className="text-[11px] text-zinc-400 leading-relaxed font-sans">
                Fluxo avaliado por métodos formais de IHC para garantir usabilidade sem atrito.
              </p>
            </div>
          </div>
        )}

        {/* Fullscreen Lightbox Modal */}
        {lightboxOpen && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/90 backdrop-blur-sm animate-in fade-in duration-150"
            onClick={() => setLightboxOpen(false)}
          >
            <div
              className="relative max-w-5xl w-full max-h-[92vh] bg-zinc-950 border border-zinc-800 rounded-xl p-4 overflow-hidden shadow-2xl flex flex-col"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between pb-3 mb-2 border-b border-zinc-800">
                <div className="flex items-center gap-2">
                  <span className="text-sm font-bold font-mono text-zinc-100">
                    {currentItem.title}
                  </span>
                  <span className="text-xs text-zinc-500 font-mono">
                    ({activeImageIndex + 1}/{gallery.length})
                  </span>
                </div>
                <button
                  type="button"
                  onClick={() => setLightboxOpen(false)}
                  className="p-1.5 rounded-lg bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-white transition-colors cursor-pointer"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              <div className="relative flex-1 flex items-center justify-center overflow-auto max-h-[75vh]">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={currentItem.url}
                  alt={currentItem.title}
                  className={cn(
                    "rounded-lg",
                    currentItem.url.includes("logo")
                      ? "max-w-full max-h-full object-contain p-4 drop-shadow-[0_20px_40px_rgba(0,0,0,0.8)]"
                      : "max-w-full max-h-full object-contain"
                  )}
                />
              </div>

              {gallery.length > 1 && (
                <div className="flex items-center justify-between pt-3 mt-2 border-t border-zinc-800 text-xs font-mono">
                  <button
                    type="button"
                    onClick={() =>
                      setActiveImageIndex((prev) =>
                        prev > 0 ? prev - 1 : gallery.length - 1
                      )
                    }
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-zinc-900 border border-zinc-800 text-zinc-300 hover:text-white cursor-pointer"
                  >
                    <ChevronLeft className="w-4 h-4" />
                    <span>Anterior</span>
                  </button>

                  <span className="text-xs text-zinc-400 text-center max-w-md truncate px-2">
                    {currentItem.caption}
                  </span>

                  <button
                    type="button"
                    onClick={() =>
                      setActiveImageIndex((prev) =>
                        prev < gallery.length - 1 ? prev + 1 : 0
                      )
                    }
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-zinc-900 border border-zinc-800 text-zinc-300 hover:text-white cursor-pointer"
                  >
                    <span>Próxima</span>
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    );
  }

  // Case 2: Clean Mobile Architecture Showcase (Sistema Família & Escola)
  if (project.id === "familia-escola") {
    return (
      <div
        className={cn(
          "w-full rounded-xl border border-zinc-800 bg-zinc-950 p-5 font-mono text-xs shadow-md select-none",
          className
        )}
      >
        <div className="flex items-center justify-between pb-3 mb-4 border-b border-zinc-800 text-zinc-400">
          <div className="flex items-center gap-2">
            <Smartphone className="w-4 h-4 text-emerald-400" />
            <span className="text-zinc-200 font-bold">
              Aplicativo Mobile · Flutter & Riverpod
            </span>
          </div>
          <span className="text-[11px] px-2.5 py-0.5 rounded bg-zinc-900 border border-zinc-800 text-zinc-300">
            Firebase Realtime Sync
          </span>
        </div>

        {/* 3 Pillars of Mobile Engineering */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-4">
          <div className="p-3 rounded-lg bg-zinc-900/60 border border-zinc-800/80">
            <div className="flex items-center gap-1.5 text-zinc-200 font-bold text-[11px] mb-1">
              <Zap className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
              <span>Chamada em Lote</span>
            </div>
            <p className="text-[11px] text-zinc-400 leading-relaxed font-sans">
              Registro de frequência em menos de 2 minutos por turma, desenhado para rotinas
              rápidas de sala de aula.
            </p>
          </div>

          <div className="p-3 rounded-lg bg-zinc-900/60 border border-zinc-800/80">
            <div className="flex items-center gap-1.5 text-zinc-200 font-bold text-[11px] mb-1">
              <Bell className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
              <span>Notificações FCM</span>
            </div>
            <p className="text-[11px] text-zinc-400 leading-relaxed font-sans">
              Disparo instantâneo de alertas de ausência direto para o celular dos pais e
              responsáveis cadastrados.
            </p>
          </div>

          <div className="p-3 rounded-lg bg-zinc-900/60 border border-zinc-800/80">
            <div className="flex items-center gap-1.5 text-zinc-200 font-bold text-[11px] mb-1">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
              <span>Validação IHC</span>
            </div>
            <p className="text-[11px] text-zinc-400 leading-relaxed font-sans">
              Fluxo avaliado por métodos formais de Interação Humano-Computador, garantindo
              baixa carga cognitiva para os professores.
            </p>
          </div>
        </div>

        {/* Technical Pipeline Strip */}
        <div className="p-3 rounded-lg bg-zinc-900/40 border border-zinc-800 text-[11px] text-zinc-400 flex flex-wrap items-center justify-between gap-2">
          <span className="text-zinc-300">
            Arquitetura: <span className="text-zinc-400">Riverpod (State) ➔ Cloud Firestore (Streams) ➔ FCM (Push)</span>
          </span>
          <span className="text-emerald-400 font-medium">Multiplataforma (Android & iOS)</span>
        </div>
      </div>
    );
  }

  return null;
};
