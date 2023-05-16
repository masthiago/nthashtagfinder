import React, { useState } from 'react';
import { StyledMain } from './styled';
import axios from 'axios';

export const SearchBar = ({ onSearch }) => {
  const [searchTwitter, setSearchTwitter] = useState('');

  /*Função de alerta para o carácter "#"  */
  const handleChange = (event) => {
    const value = event.target.value;
    if (value.includes('#')) {
      alert('Não é preciso adicionar o "#"');
      setSearchTwitter(value.replace('#', ''));
    } else {
      setSearchTwitter(value);
    }
  };

  /*Função para verificar o campo de busca, retornando um alerta caso esteja vazia*/
  const handleSubmit = (event) => {
    event.preventDefault();
    if (!searchTwitter.trim()) {
      alert('Digite uma hashtag');
      return;
    }

    /*Função com os parâmetros a serem passados para a API*/
    const apiKey = 'keykXHtsEPprqdSBF';
    const url = `https://api.airtable.com/v0/app6wQWfM6eJngkD4/tbl4mrtX1Owvos7eB/`;
    const data = {
      fields: {
        Squad: '05-23',
        Hashtag: searchTwitter,
        Data: Date.now(),
      },
    };

    /*Chamada da API e envio dos parâmetros */
    axios
      .post(url, data, {
        headers: {
          Authorization: `Bearer ${apiKey}`,
          'Content-Type': 'application/json',
        },
      })
      .then((response) => {
        console.log('Sucesso:', response.data);
      })
      .catch((error) => {
        console.error('Erro:', error);
      });

    /*Limpeza da Barra de pesquisa*/
    setSearchTwitter('');
    onSearch(searchTwitter);
  };
  return (
    /*Formulário com botão de pesquisa, area de texto e botão de limpeza, nessa ordem abaixo*/
    <form id='searchForm' className='searchBar' onSubmit={handleSubmit}>
      <button type='submit' className='buttonSearch' />

      <input
        className='textSearch'
        type='text'
        placeholder='Buscar...'
        value={searchTwitter}
        onChange={handleChange}
        maxLength={279}
      />
      <button
        type='button'
        className='buttonClear'
        onClick={() => setSearchTwitter('')}>
        X
      </button>
    </form>
  );
};

/*Corpo do código Home */

const Home = () => {
  const handleSearch = (texto) => {
    console.log('Buscando por: ' + texto);
  };

  return (
    <>
      <StyledMain>
        <div className='presentationText'>
          <h1>
            Encontre hashtags <br />
            de maneira fácil.
          </h1>
          <p>
            Digite o que deseja no campo de buscas e <br />
            confira os resultados do Twitter abaixo
          </p>
        </div>
        <SearchBar onSearch={handleSearch} />
      </StyledMain>
    </>
  );
};

export default Home;
