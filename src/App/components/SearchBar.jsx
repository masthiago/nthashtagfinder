import React, { useState } from 'react';

function SearchBar(props) {
  const [searchTerm, setSearchTerm] = useState('');

  function handleChange(event) {
    setSearchTerm(event.target.value);
    props.onSearch(event.target.value);
  }

  return (
    <form className='searchBar'>
      <button type='submit' className='buttonSearch' />

      <input
        className='textSearch'
        type='text'
        placeholder='Buscar...'
        value={searchTerm}
        onChange={handleChange}
      />
    </form>
  );
}
export default SearchBar;
