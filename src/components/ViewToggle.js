import React from 'react';
import '../styles/ViewToggle.css';

const ViewToggle = ({ viewMode, onViewModeChange }) => {
  return (
    <div className="view-toggle-container">
      <div className="view-toggle-label">Visualização:</div>
      <div className="view-toggle-buttons">
        <button
          className={`view-toggle-btn ${viewMode === 'cards' ? 'active' : ''}`}
          onClick={() => onViewModeChange('cards')}
        >
          <i className="fas fa-th-large"></i>
          Cards
        </button>
        <button
          className={`view-toggle-btn ${viewMode === 'list' ? 'active' : ''}`}
          onClick={() => onViewModeChange('list')}
        >
          <i className="fas fa-list"></i>
          Lista
        </button>
      </div>
    </div>
  );
};

export default ViewToggle;