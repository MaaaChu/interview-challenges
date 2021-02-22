import React from 'react';
import Search from '../icons/search';

const SearchBar = () => {
  return (
    <div className="searchbarContainer">
      <Search classNames="icon" />
      <input
        type="search"
        id="search"
        name="search"
        className="searchbar"
        placeholder="Search"
      />
    </div>
  );
};

export default SearchBar;
