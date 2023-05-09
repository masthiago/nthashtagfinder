import styled from 'styled-components';
import heroBg from '../../assets/img/heroBg.jpg';
import mobileHeroBg from '../../assets/img/mobileHeroBg.jpg';
import iconSearch from '../../assets/img/iconSearch.svg';

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
  font-weight: bold;
  cursor: pointer;
  &:hover {
    transition: all 0.1s ease;
    transform: translate(1.5%) scale(1.1);
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
    background-size: cover;
  }

  div.presentationText {
    display: flex;
    flex-flow: column;

    h1 {
      margin-top: 115px;
      margin-left: 70px;
      font-size: 55px;
      font-weight: bold;

      @media screen and (max-width: 700px) {
        margin-top: 50px;
        margin-left: 40px;
        font-size: 45px;
        font-weight: bold;
      }

      @media screen and (max-width: 440px) {
        margin-top: 65px;
        margin-left: 40px;
        font-size: 35px;
      }
    }

    p {
      margin-left: 70px;
      font-size: 20px;

      @media screen and (max-width: 700px) {
        margin-left: 40px;
        font-size: 15px;
      }

      @media screen and (max-width: 440px) {
        margin-left: 40px;
        font-size: 14px;
      }
    }
  }
  /*Form para barra e botão de pesquisa */
  form {
    display: flex;
    margin-top: 150px;
    justify-content: center;

    @media screen and (max-width: 700px) {
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
    outline: none;

    @media screen and (max-width: 700px) {
      width: 60vh;
      padding: 20px;
    }

    @media screen and (max-width: 440px) {
      padding: 10px;
      width: 70vw;
    }

    /*Ajuste no Placeholder*/
    ::-webkit-input-placeholder {
      color: #bbbbbb;
      font-size: 20px;
    }
  }
`;

/*Estilização do Footer*/
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
