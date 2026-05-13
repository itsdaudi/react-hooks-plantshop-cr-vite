import React from 'react';

function Search({ searchTerm, onSearchChange }) {
  const handleSearch = (e) => {
    onSearchChange(e.target.value); // Update parent's search term
  };

  return (
    <div className="search">
      <input
        type="text"
        placeholder="Type a name to search..."
        value={searchTerm}
        onChange={handleSearch}
      />
    </div>
  );
}

export default Search;