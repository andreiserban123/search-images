import { useState } from 'react';

import './SearchBar.css';

const SearchBar = ({ onSubmit }) => {
  const [term, setTerm] = useState('');

  const handleOnChange = (e) => {
    setTerm(e.target.value);
  };
  const handleFormSubmit = (e) => {
    e.preventDefault();
    onSubmit(term);
  };
  return (
    <div className="search-bar">
      <form onSubmit={handleFormSubmit}>
        <label>Enter Search Term</label>
        <input value={term} onChange={handleOnChange} />
      </form>
    </div>
  );
};
export default SearchBar;
