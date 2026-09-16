"use client";

import React, { useState, useEffect } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { cn } from "@/lib/utils";

export const Header: React.FC = () => {
  const { language, setLanguage, content } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "#projects", label: content.nav.projects },
    { href: "#skills", label: content.nav.skills },
    { href: "#experience", label: content.nav.experience },
    { href: "#about", label: content.nav.about },
    { href: "#contact", label: content.nav.contact },
  ];

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-40 transition-all duration-200",
        scrolled
          ? "bg-zinc-950/90 backdrop-blur-md border-b border-zinc-800/80 py-3 shadow-md"
          : "bg-transparent py-4 sm:py-5"
      )}
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-4">
        {/* Left: Brand Identity */}
        <a href="#" className="flex flex-col leading-tight shrink-0 group">
          <span className="text-sm font-semibold text-zinc-100 tracking-tight group-hover:text-emerald-400 transition-colors">
            {content.profile.name}
          </span>
          <span className="text-[11px] font-mono text-zinc-400">
            UFAPE · Full Stack
          </span>
        </a>

        {/* Center: Desktop Nav Links (Ordered by Priority) */}
        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-xs font-mono text-zinc-400 hover:text-zinc-100 transition-colors whitespace-nowrap"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Right: Actions & Language Toggle */}
        <div className="hidden md:flex items-center gap-3 shrink-0">
          {/* Segmented Language Switcher */}
          <div className="flex items-center p-0.5 rounded-lg bg-zinc-900 border border-zinc-800">
            <button
              onClick={() => setLanguage("pt")}
              className={cn(
                "px-2 py-0.5 rounded-md text-[11px] font-mono font-medium transition-all cursor-pointer",
                language === "pt"
                  ? "bg-zinc-800 text-zinc-100 shadow-sm"
                  : "text-zinc-400 hover:text-zinc-200"
              )}
            >
              PT
            </button>
            <button
              onClick={() => setLanguage("en")}
              className={cn(
                "px-2 py-0.5 rounded-md text-[11px] font-mono font-medium transition-all cursor-pointer",
                language === "en"
                  ? "bg-zinc-800 text-zinc-100 shadow-sm"
                  : "text-zinc-400 hover:text-zinc-200"
              )}
            >
              EN
            </button>
          </div>

          <a
            href={content.profile.contact.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs font-mono text-zinc-400 hover:text-zinc-100 transition-colors px-1"
          >
            GitHub
          </a>

          <a
            href={content.profile.contact.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs font-mono text-zinc-400 hover:text-zinc-100 transition-colors px-1"
          >
            LinkedIn
          </a>

          {content.profile.contact.cvUrl && (
            <a
              href={content.profile.contact.cvUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-mono text-zinc-400 hover:text-zinc-100 transition-colors px-1"
              title="Curriculum Vitae (PDF)"
            >
              CV
            </a>
          )}

          <a
            href="#contact"
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium text-zinc-950 bg-zinc-100 hover:bg-white transition-colors shrink-0"
          >
            <span>{content.nav.contact}</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Mobile View Toggle */}
        <div className="flex md:hidden items-center gap-2">
          {/* Mobile Language Switcher */}
          <div className="flex items-center p-0.5 rounded-lg bg-zinc-900 border border-zinc-800">
            <button
              onClick={() => setLanguage("pt")}
              className={cn(
                "px-2 py-0.5 rounded-md text-[10px] font-mono font-medium cursor-pointer",
                language === "pt" ? "bg-zinc-800 text-zinc-100" : "text-zinc-400"
              )}
            >
              PT
            </button>
            <button
              onClick={() => setLanguage("en")}
              className={cn(
                "px-2 py-0.5 rounded-md text-[10px] font-mono font-medium cursor-pointer",
                language === "en" ? "bg-zinc-800 text-zinc-100" : "text-zinc-400"
              )}
            >
              EN
            </button>
          </div>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            type="button"
            className="p-1.5 rounded-lg border border-zinc-800 bg-zinc-900 text-zinc-300 hover:text-white cursor-pointer"
            aria-label="Abrir menu de navegação"
          >
            {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-zinc-950 border-b border-zinc-800 px-6 py-5 shadow-2xl">
          <div className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-xs font-mono text-zinc-300 py-2 border-b border-zinc-900 hover:text-white flex items-center justify-between"
              >
                <span>{link.label}</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-zinc-600" />
              </a>
            ))}
            <div className="flex items-center justify-between pt-3 text-xs font-mono">
              <a
                href={content.profile.contact.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-zinc-400 hover:text-white"
              >
                GitHub ↗
              </a>
              <a
                href={content.profile.contact.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-zinc-400 hover:text-white"
              >
                LinkedIn ↗
              </a>
              {content.profile.contact.cvUrl && (
                <a
                  href={content.profile.contact.cvUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-zinc-400 hover:text-white"
                >
                  CV ↗
                </a>
              )}
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="font-medium px-3 py-1 rounded-md bg-zinc-100 text-zinc-950"
              >
                {content.nav.contact}
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
