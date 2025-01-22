import React, { useState } from 'react';
import { useNotes } from '../context/NotesContext';

const SearchBar: React.FC = () => {
  const [query, setQuery] = useState('');
  const { searchNotes } = useNotes();

  const handleSearch = () => {
    searchNotes(query);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Search Notes"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
};

export default SearchBar;
