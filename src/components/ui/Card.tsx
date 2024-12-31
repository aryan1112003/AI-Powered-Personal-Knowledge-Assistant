import React from 'react';
import { cn } from '../../lib/utils';

interface CardProps {
  children: React.ReactNode;
  className?: string;
}

export function Card({ children, className }: CardProps) {
  return (
    <div className={cn(
      "bg-white/70 backdrop-blur-md rounded-2xl p-6 shadow-xl shadow-purple-500/5 border border-purple-100/50",
      "hover:shadow-purple-500/10 transition-shadow duration-300",
      className
    )}>
      {children}
    </div>
  );
}