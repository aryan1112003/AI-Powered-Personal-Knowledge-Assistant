import React from 'react';
import { Header } from './components/Header';
import { KnowledgeBase } from './components/KnowledgeBase';
import { Assistant } from './components/Assistant';
import { Watermark } from './components/Watermark';
import { GradientBackground } from './components/ui/GradientBackground';

export function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-50">
      <GradientBackground />
      <Header />
      <main className="max-w-7xl mx-auto px-4 py-6 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
          <KnowledgeBase />
          <Assistant />
        </div>
      </main>
      <Watermark />
    </div>
  );
}