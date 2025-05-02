import React from 'react';
import '../styles/SearchBar.css';

const SearchBar = ({ searchTerm, onSearchChange }) => {
  return (
    <div className="search-container">
      <input
        type="text"
        className="search-input"
        placeholder="Pesquisar usuários..."
        value={searchTerm}
        onChange={(e) => onSearchChange(e.target.value)}
      />
      <i className="fas fa-search search-icon"></i>
    </div>
  );
};

export default SearchBar;