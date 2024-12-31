import React, { useCallback, useState } from 'react';
import { Upload, FileText } from 'lucide-react';
import { useDocumentStore } from '../store/documents';
import { parseDocument } from '../lib/documentParser';

export function DocumentUpload() {
  const [isDragging, setIsDragging] = useState(false);
  const addDocument = useDocumentStore((state) => state.addDocument);

  const handleFileUpload = useCallback(async (file: File) => {
    try {
      const parsedDoc = await parseDocument(file);
      addDocument(parsedDoc);
    } catch (error) {
      console.error('Failed to parse document:', error);
    }
  }, [addDocument]);

  const handleDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    
    const file = e.dataTransfer.files[0];
    if (file) handleFileUpload(file);
  }, [handleFileUpload]);

  return (
    <div
      onDragOver={(e) => {
        e.preventDefault();
        setIsDragging(true);
      }}
      onDragLeave={() => setIsDragging(false)}
      onDrop={handleDrop}
      className={`
        w-full p-8 border-2 border-dashed rounded-xl transition-all duration-200
        ${isDragging
          ? 'border-blue-500 bg-blue-50'
          : 'border-gray-300 hover:border-gray-400'
        }
      `}
    >
      <label className="flex flex-col items-center justify-center cursor-pointer">
        <div className="p-3 bg-blue-50 rounded-full">
          <Upload className="w-8 h-8 text-blue-500" />
        </div>
        <div className="mt-4 text-center">
          <p className="text-sm font-medium text-gray-700">Drop your documents here</p>
          <p className="mt-1 text-xs text-gray-500">or click to browse</p>
        </div>
        <div className="mt-4 flex items-center justify-center text-xs text-gray-500">
          <FileText className="w-4 h-4 mr-1" />
          Supports .txt and .md files
        </div>
        <input
          type="file"
          className="hidden"
          accept=".txt,.md"
          onChange={(e) => {
            const file = e.target.files?.[0];
            if (file) handleFileUpload(file);
          }}
        />
      </label>
    </div>
  );
}