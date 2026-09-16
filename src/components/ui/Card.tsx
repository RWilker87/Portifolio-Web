import React from "react";
import { cn } from "@/lib/utils";

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

export const Card: React.FC<CardProps> = ({ className, children, ...props }) => {
  return (
    <div
      className={cn(
        "rounded-xl bg-zinc-950/70 border border-zinc-800 p-6 sm:p-8 transition-colors",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};
