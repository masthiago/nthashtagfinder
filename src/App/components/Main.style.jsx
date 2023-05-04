import styled from 'styled-components';
import heroBg from '../assets/heroBg.jpg';
import iconSearch from '../assets/iconSearch.svg';

/* Inclusão e estilização da imagem Home*/
export const StyledMain = styled.main`
  background-image: url(${heroBg});
  background-size: cover;
  height: 100vh;

  h1 {
    position: relative;
    font-family: Rubik, sans-serif;
    font-size: 60px;
    top: 17vh;
    left: 8vw;
  }

  p {
    position: relative;
    font-size: 20px;
    top: 17vh;
    left: 8vw;
  }

  form {
    display: flex;
    position: relative;
    top: 40vh;
    left: 20vw;
  }

  button.buttonSearch {
    background-color: #1e3e7b;
    background-image: url(${iconSearch});
    background-repeat: no-repeat;
    background-position: right center;
    background-size: 15px;
    padding: 20px;
    border: none;
    border-radius: 50px 0px 0px 50px;
  }

  input.textSearch {
    background-color: #1e3e7b;
    padding: 25px;
    width: 85vh;
    border-radius: 0px 50px 50px 0px;
    border: none;
    align-items: center;

    /*Placeholder para diversos navegadores*/
    ::-webkit-input-placeholder {
      color: #bbbbbb;
      font-size: 20px;
    }
  }
`;
