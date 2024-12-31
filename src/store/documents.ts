import { create } from 'zustand';
import { ParsedDocument } from '../lib/documentParser';
import { searchDocuments, SearchResult } from '../lib/search';

interface DocumentStore {
  documents: ParsedDocument[];
  searchResults: SearchResult[];
  addDocument: (doc: ParsedDocument) => void;
  removeDocument: (title: string) => void;
  search: (query: string) => SearchResult[];
}

export const useDocumentStore = create<DocumentStore>((set, get) => ({
  documents: [],
  searchResults: [],
  
  addDocument: (doc) => {
    set((state) => ({
      documents: [...state.documents, doc],
    }));
  },
  
  removeDocument: (title) => {
    set((state) => ({
      documents: state.documents.filter((doc) => doc.title !== title),
    }));
  },
  
  search: (query) => {
    const results = searchDocuments(query, get().documents);
    set({ searchResults: results });
    return results;
  },
}));