import React from 'react';
import { Github, BrainCircuit } from 'lucide-react';

export function Watermark() {
  return (
    <div className="fixed bottom-4 right-4 flex items-center space-x-3 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg border border-purple-100">
      <BrainCircuit className="w-4 h-4 text-purple-600" />
      <a
        href="https://github.com/aryan1112003"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center space-x-2 text-sm font-medium bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent hover:opacity-80 transition-opacity"
      >
        <Github className="w-4 h-4 text-purple-600" />
        <span>Created by Aryan Acharya</span>
      </a>
    </div>
  );
}