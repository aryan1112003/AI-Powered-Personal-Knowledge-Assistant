import React from 'react';
import { DocumentUpload } from './DocumentUpload';
import { DocumentList } from './DocumentList';
import { Database } from 'lucide-react';
import { GlassCard } from './ui/GlassCard';

export function KnowledgeBase() {
  return (
    <div className="space-y-6">
      <GlassCard>
        <div className="flex items-center space-x-3 mb-6">
          <div className="p-2 bg-gradient-to-br from-purple-500/10 to-blue-500/10 rounded-lg">
            <Database className="w-5 h-5 text-purple-600" />
          </div>
          <h2 className="text-lg font-semibold text-gray-800">Knowledge Base</h2>
        </div>
        <DocumentUpload />
        <div className="mt-6">
          <DocumentList />
        </div>
      </GlassCard>
    </div>
  );
}