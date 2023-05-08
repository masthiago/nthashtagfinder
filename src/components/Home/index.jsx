import React, { useState } from 'react';
import {   StyledMain } from './styled';


export function SearchBar(props) {
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

function Home() {
  return (
    <>

      <StyledMain>
        <h1>
          Encontre hashtags <br />
          de maneira fácil.
        </h1>
        <p>
          Digite o que deseja no campo de buscas e <br />
          confira os resultados do Twitter abaixo
        </p>
        <SearchBar />
      </StyledMain>
    </>
  );
}

export default Home;

