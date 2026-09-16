import React from "react";
import { cn } from "@/lib/utils";

interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: "default" | "outline" | "secondary" | "success";
  size?: "sm" | "md";
  children: React.ReactNode;
}

export const Badge: React.FC<BadgeProps> = ({
  variant = "default",
  size = "sm",
  className,
  children,
  ...props
}) => {
  const variantStyles = {
    default: "bg-zinc-800 text-zinc-200 border-zinc-700/80",
    outline: "bg-transparent text-zinc-300 border-zinc-700 hover:border-zinc-500",
    secondary: "bg-zinc-900 text-zinc-400 border-zinc-800",
    success: "bg-emerald-950/60 text-emerald-300 border-emerald-800/60",
  };

  const sizeStyles = {
    sm: "text-xs px-2.5 py-0.5",
    md: "text-xs px-3 py-1",
  };

  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 font-mono font-medium rounded-md border tracking-tight transition-colors",
        variantStyles[variant],
        sizeStyles[size],
        className
      )}
      {...props}
    >
      {children}
    </span>
  );
};
