import React from "react";
import { cn } from "@/lib/utils";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
  variant = "primary",
  size = "md",
  className,
  children,
  ...props
}) => {
  const variantStyles = {
    primary:
      "bg-zinc-100 text-zinc-950 hover:bg-white hover:shadow-sm font-semibold active:scale-[0.99]",
    secondary:
      "bg-zinc-900 text-zinc-200 border border-zinc-800 hover:bg-zinc-800 hover:text-white active:scale-[0.99]",
    outline:
      "bg-transparent text-zinc-300 border border-zinc-700 hover:border-zinc-500 hover:text-white active:scale-[0.99]",
    ghost:
      "bg-transparent text-zinc-400 hover:text-zinc-100 hover:bg-zinc-900/60 active:scale-[0.99]",
  };

  const sizeStyles = {
    sm: "text-xs px-3 py-1.5 rounded-lg",
    md: "text-xs sm:text-sm px-4 py-2 rounded-lg",
    lg: "text-sm sm:text-base px-5 py-2.5 rounded-xl",
  };

  return (
    <button
      className={cn(
        "inline-flex items-center justify-center gap-2 whitespace-nowrap font-mono transition-all duration-150 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-zinc-400 disabled:opacity-50 disabled:pointer-events-none cursor-pointer",
        variantStyles[variant],
        sizeStyles[size],
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
};
