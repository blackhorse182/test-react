import React from 'react';

function Filters({ setFilters }) {
  return (
    <div className="filters">
      <h3>Filters</h3>
      <label>
        Category:
        <select onChange={(e) => setFilters({ category: e.target.value })}>
          <option value="">All</option>
          <option value="sneakers">Sneakers</option>
          <option value="boots">Boots</option>
        </select>
      </label>
    </div>
  );
}

export default Filters;