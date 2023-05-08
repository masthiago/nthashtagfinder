import styled from 'styled-components';
import heroBg from '../assets/heroBg.jpg';
import mobileHeroBg from '../assets/mobileHeroBg.jpg';
import iconSearch from '../assets/iconSearch.svg';

/*Estilização do header*/
export const StyledHeader = styled.header`
  width: 100%;
  height: 70px;
  padding: 35px;
  background-color: #0a1744;
  display: flex;
  justify-content: space-between;
  align-items: center;

  div {
    display: flex;
  }
  
  a { 
    text-decoration: none;
  }

  @media screen and (max-width: 440px) {
    padding: 10px;
    place-content: space-evenly;
  }
`;

/*Inclusão dos elementos no header*/
export const StyledButton = styled.button`
  background-color: ${(prop) =>
    prop.backgroundColor ? prop.backgroundColor : '#1E3E7B'};

  color: ${(prop) => (prop.color ? prop.color : '#fff')};

  font-family: Rubik, sans-serif;
  width: 100px;
  height: 30px;
  margin: 8px;
  border: none;
  border-radius: 50px;
  cursor: pointer;
  &:hover {
    transition: all 0.1s ease;
    transform: translate(2%) scale(0.8);
  }
  .iconHeader {
    margin-right: 10px;
    width: 10px;
  }

  @media screen and (max-width: 440px) {
    width: 85px;
  }
`;

/* Inclusão e estilização da imagem Home*/
export const StyledMain = styled.main`
  background-image: url(${heroBg});
  background-size: cover;
  height: 100vh;

  @media screen and (max-width: 440px) {
    background-image: url(${mobileHeroBg});
  }

  h1 {
    position: relative;
    font-family: Rubik, sans-serif;
    font-size: 60px;
    top: 17vh;
    left: 8vw;

    @media screen and (max-width: 440px) {
      font-size: 30px;
      top: 8vh;
      left: 6vw;
    }
    @media screen and (max-width: 700px) {
      font-size: 45px;
      top: 9vh;
      left: 6vw;
    }
  }

  p {
    position: relative;
    font-size: 20px;
    top: 17vh;
    left: 8vw;

    @media screen and (max-width: 440px) {
      font-size: 12px;
      top: 8vh;
      left: 6vw;
    }

    @media screen and (max-width: 700px) {
      font-size: 16px;
      top: 9vh;
      left: 6vw;
    }
  }
  /*Form para barra e botão de pesquisa */
  form {
    display: flex;
    position: relative;
    top: 40vh;
    left: 20vw;

    @media screen and (max-width: 700px) {
      top: 22vh;
      left: 3vw;
    }
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

    @media screen and (max-width: 440px) {
      padding: 10px;
      width: 70vw;
    }

    /*Placeholder para diversos navegadores*/
    ::-webkit-input-placeholder {
      color: #bbbbbb;
      font-size: 20px;
    }
  }
`;

export const StyledFooter = styled.footer`
  background-color: #1e3e7b;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 12px;
  text-align: center;
  height: 80px;
`;
