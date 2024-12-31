export interface ParsedDocument {
  title: string;
  content: string;
  type: 'text' | 'markdown' | 'pdf';
  metadata: {
    wordCount: number;
    createdAt: Date;
    fileSize: number;
  };
}

export function parseDocument(file: File): Promise<ParsedDocument> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    
    reader.onload = (e) => {
      const content = e.target?.result as string;
      
      resolve({
        title: file.name,
        content: content,
        type: getDocumentType(file.name),
        metadata: {
          wordCount: countWords(content),
          createdAt: new Date(),
          fileSize: file.size,
        },
      });
    };

    reader.onerror = () => reject(new Error('Failed to read file'));
    reader.readAsText(file);
  });
}

function getDocumentType(filename: string): ParsedDocument['type'] {
  if (filename.endsWith('.md')) return 'markdown';
  if (filename.endsWith('.pdf')) return 'pdf';
  return 'text';
}

function countWords(text: string): number {
  return text.trim().split(/\s+/).length;
}