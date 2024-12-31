import React, { useState } from 'react';
import { Search } from 'lucide-react';
import { useDocumentStore } from '../store/documents';

export function SearchBar() {
  const [query, setQuery] = useState('');
  const search = useDocumentStore((state) => state.search);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (!query.trim()) return;
    search(query);
  };

  return (
    <form onSubmit={handleSearch} className="w-full">
      <div className="relative group">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search your knowledge base..."
          className="w-full px-4 py-2.5 pl-11 border border-blue-100 rounded-xl bg-white/50 focus:bg-white transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500"
        />
        <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 h-5 w-5 text-blue-400 group-focus-within:text-blue-500 transition-colors duration-200" />
      </div>
    </form>
  );
}