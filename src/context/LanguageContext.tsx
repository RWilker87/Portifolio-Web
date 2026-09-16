"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import { Language, PortfolioContent } from "@/types";
import { portfolioContent } from "@/lib/data";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  toggleLanguage: () => void;
  content: PortfolioContent;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [language, setLanguageState] = useState<Language>("pt");

  useEffect(() => {
    try {
      const savedLang = localStorage.getItem("rw_portfolio_lang") as Language;
      if (savedLang === "en" || savedLang === "pt") {
        setLanguageState(savedLang);
      } else {
        const browserLang = navigator.language.toLowerCase();
        if (browserLang.startsWith("en")) {
          setLanguageState("en");
        } else {
          setLanguageState("pt");
        }
      }
    } catch {
      // Ignore localStorage restrictions
    }
  }, []);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    try {
      localStorage.setItem("rw_portfolio_lang", lang);
    } catch {
      // Ignore
    }
  };

  const toggleLanguage = () => {
    const nextLang = language === "en" ? "pt" : "en";
    setLanguage(nextLang);
  };

  const content = portfolioContent[language] || portfolioContent.pt;

  return (
    <LanguageContext.Provider
      value={{
        language,
        setLanguage,
        toggleLanguage,
        content,
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};
