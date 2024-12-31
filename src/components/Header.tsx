import React from 'react';
import { BrainCircuit, Github, Sparkles } from 'lucide-react';

export function Header() {
  return (
    <header className="bg-white/70 backdrop-blur-md shadow-sm sticky top-0 z-10 border-b border-purple-100">
      <div className="max-w-7xl mx-auto px-4 py-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="p-2.5 bg-gradient-to-br from-purple-500 to-blue-600 rounded-xl shadow-lg shadow-purple-500/20">
              <BrainCircuit className="w-6 h-6 text-white" />
            </div>
            <div className="flex flex-col">
              <h1 className="text-2xl font-bold bg-gradient-to-r from-purple-600 via-blue-600 to-indigo-600 text-transparent bg-clip-text">
                AI Knowledge Assistant
              </h1>
              <p className="text-xs text-gray-500 flex items-center">
                <Sparkles className="w-3 h-3 mr-1 text-yellow-500" />
                Powered by Neural Networks
              </p>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <a
              href="https://github.com/aryan1112003"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 text-sm text-gray-600 hover:text-purple-600 transition-colors"
            >
              <Github className="w-5 h-5" />
              <span className="hidden sm:inline">@aryan1112003</span>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}