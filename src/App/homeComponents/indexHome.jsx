import React, { useState } from 'react';
import {
  StyledHeader,
  StyledButton,
  StyledMain,
  StyledFooter,
} from './homeStyle';
import iconAbout from '../assets/iconAbout.svg';
import iconUser from '../assets/iconUser.svg';

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
      <StyledHeader>
        <p>
          hashtag<strong>finder</strong>
        </p>
        <div>
          <StyledButton backgroundColor='#72EFDB' color='#0a1744'>
            <img className='iconHeader' src={iconAbout} alt='ícone Sobre' />
            Sobre
          </StyledButton>
          <StyledButton>
            <img className='iconHeader' src={iconUser} alt='ícone Login' />
            Login
          </StyledButton>
        </div>
      </StyledHeader>
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
export function Footer() {
  return (
    <>
      <StyledFooter>@Cocreare 2023. Todos os direitos reservados</StyledFooter>;
    </>
  );
}
