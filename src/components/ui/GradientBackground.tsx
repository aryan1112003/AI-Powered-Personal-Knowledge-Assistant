import React from 'react';

export function GradientBackground() {
  return (
    <>
      <div className="fixed inset-0 -z-10 bg-[radial-gradient(45%_25%_at_50%_50%,rgba(139,92,246,0.05),rgba(255,255,255,0))]" />
      <div className="fixed inset-0 -z-10 bg-[radial-gradient(45%_25%_at_75%_25%,rgba(56,189,248,0.05),rgba(255,255,255,0))]" />
      <div className="fixed bottom-0 left-0 right-0 h-32 -z-10 bg-gradient-to-t from-white/20 to-transparent" />
    </>
  );
}