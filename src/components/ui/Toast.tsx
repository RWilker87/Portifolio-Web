"use client";

import React from "react";
import { Check, AlertCircle, X } from "lucide-react";
import { cn } from "@/lib/utils";

interface ToastProps {
  message: string;
  type?: "success" | "error";
  isOpen: boolean;
  onClose: () => void;
}

export const Toast: React.FC<ToastProps> = ({
  message,
  type = "success",
  isOpen,
  onClose,
}) => {
  if (!isOpen) return null;

  return (
    <div
      className={cn(
        "fixed bottom-6 right-6 z-50 flex items-center gap-3 px-4 py-3 rounded-xl border shadow-2xl backdrop-blur-md transition-all animate-in fade-in duration-200",
        type === "success"
          ? "bg-zinc-900 border-zinc-700 text-zinc-100"
          : "bg-zinc-900 border-rose-800 text-rose-200"
      )}
      role="alert"
    >
      {type === "success" ? (
        <Check className="w-4 h-4 text-emerald-400 shrink-0" />
      ) : (
        <AlertCircle className="w-4 h-4 text-rose-400 shrink-0" />
      )}
      <span className="text-xs font-mono">{message}</span>
      <button
        onClick={onClose}
        className="ml-2 text-zinc-400 hover:text-white transition-colors"
        aria-label="Close notification"
      >
        <X className="w-3.5 h-3.5" />
      </button>
    </div>
  );
};
