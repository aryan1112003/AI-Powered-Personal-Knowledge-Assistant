import React from 'react';
import { SearchBar } from './SearchBar';
import { Chat } from './Chat';
import { MessageSquareCode } from 'lucide-react';
import { GlassCard } from './ui/GlassCard';

export function Assistant() {
  return (
    <div className="space-y-6">
      <GlassCard>
        <div className="flex items-center space-x-3 mb-6">
          <div className="p-2 bg-gradient-to-br from-blue-500/10 to-indigo-500/10 rounded-lg">
            <MessageSquareCode className="w-5 h-5 text-blue-600" />
          </div>
          <h2 className="text-lg font-semibold text-gray-800">AI Assistant</h2>
        </div>
        <SearchBar />
        <div className="mt-6">
          <Chat />
        </div>
      </GlassCard>
    </div>
  );
}