import { ParsedDocument } from './documentParser';

export interface SearchResult {
  documentId: string;
  title: string;
  excerpt: string;
  relevanceScore: number;
}

export function searchDocuments(query: string, documents: ParsedDocument[]): SearchResult[] {
  const searchTerms = query.toLowerCase().split(' ').filter(Boolean);
  
  return documents
    .map(doc => {
      const relevanceScore = calculateRelevance(searchTerms, doc.content.toLowerCase());
      const excerpt = generateExcerpt(doc.content, searchTerms);
      
      return {
        documentId: doc.title, // Using title as ID since that's what we use in the store
        title: doc.title,
        excerpt,
        relevanceScore,
      };
    })
    .filter(result => result.relevanceScore > 0)
    .sort((a, b) => b.relevanceScore - a.relevanceScore);
}

function calculateRelevance(searchTerms: string[], content: string): number {
  return searchTerms.reduce((score, term) => {
    // Escape special regex characters
    const escapedTerm = term.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    const regex = new RegExp(escapedTerm, 'gi');
    const matches = content.match(regex);
    return score + (matches?.length || 0);
  }, 0);
}

function generateExcerpt(content: string, searchTerms: string[]): string {
  const excerptLength = 150;
  const escapedTerms = searchTerms.map(term => 
    term.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
  );
  
  const firstMatch = escapedTerms
    .map(term => ({ 
      term, 
      index: content.toLowerCase().indexOf(term.toLowerCase()) 
    }))
    .filter(({ index }) => index !== -1)
    .sort((a, b) => a.index - b.index)[0];

  if (!firstMatch) return content.slice(0, excerptLength) + '...';

  const start = Math.max(0, firstMatch.index - 50);
  const end = Math.min(content.length, start + excerptLength);
  return (start > 0 ? '...' : '') + content.slice(start, end) + (end < content.length ? '...' : '');
}