import React from 'react';
import { cn } from '../../lib/utils';

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
}

export function GlassCard({ children, className }: GlassCardProps) {
  return (
    <div className={cn(
      "relative overflow-hidden",
      "bg-white/40 backdrop-blur-md rounded-2xl p-6",
      "border border-white/20",
      "shadow-xl shadow-purple-500/5",
      "before:absolute before:inset-0 before:-translate-y-full hover:before:translate-y-0",
      "before:bg-gradient-to-b before:from-white/5 before:to-transparent",
      "before:transition-transform before:duration-500",
      className
    )}>
      {children}
    </div>
  );
}