import React from 'react';
import { FileText, Bookmark, StickyNote, Trash2 } from 'lucide-react';
import { useDocumentStore } from '../store/documents';
import { ParsedDocument } from '../lib/documentParser';

const iconMap: Record<ParsedDocument['type'], React.ComponentType> = {
  text: FileText,
  markdown: StickyNote,
  pdf: Bookmark,
};

export function DocumentList() {
  const documents = useDocumentStore((state) => state.documents);
  const removeDocument = useDocumentStore((state) => state.removeDocument);

  if (documents.length === 0) {
    return (
      <div className="w-full p-8 text-center text-gray-500">
        No documents uploaded yet
      </div>
    );
  }

  return (
    <div className="w-full max-w-2xl space-y-4">
      {documents.map((doc) => {
        const Icon = iconMap[doc.type] || FileText;
        return (
          <div
            key={doc.title}
            className="flex items-center justify-between p-4 bg-white rounded-lg shadow"
          >
            <div className="flex items-center space-x-4">
              <Icon className="w-5 h-5 text-gray-500" />
              <div>
                <h3 className="font-medium">{doc.title}</h3>
                <p className="text-sm text-gray-500">
                  {doc.metadata.wordCount} words • {formatFileSize(doc.metadata.fileSize)}
                </p>
              </div>
            </div>
            <button
              onClick={() => removeDocument(doc.title)}
              className="p-2 text-gray-400 hover:text-red-500 transition-colors"
              aria-label="Remove document"
            >
              <Trash2 className="w-5 h-5" />
            </button>
          </div>
        );
      })}
    </div>
  );
}

function formatFileSize(bytes: number): string {
  if (bytes < 1024) return `${bytes} B`;
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
  return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
}