export interface ChatMessage {
  id: string;
  content: string;
  sender: 'user' | 'assistant';
  timestamp: Date;
  context?: {
    documentIds: string[];
    relevantExcerpts: string[];
  };
}

export function generateResponse(query: string, searchResults: any[]): ChatMessage {
  const relevantDocs = searchResults.slice(0, 3); // Top 3 most relevant results
  
  const response = relevantDocs.length
    ? `Based on your documents, here's what I found:\n\n${
        relevantDocs
          .map(doc => `From "${doc.title}":\n${doc.excerpt}`)
          .join('\n\n')
      }`
    : 'I couldn\'t find any relevant information in your documents.';

  return {
    id: crypto.randomUUID(),
    content: response,
    sender: 'assistant',
    timestamp: new Date(),
    context: {
      documentIds: relevantDocs.map(doc => doc.documentId),
      relevantExcerpts: relevantDocs.map(doc => doc.excerpt),
    },
  };
}