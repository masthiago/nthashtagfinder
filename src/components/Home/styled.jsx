import styled from "styled-components";
import heroBg from "../../assets/img/heroBg.jpg";
import mobileHeroBg from "../../assets/img/mobileHeroBg.jpg";
import iconSearch from "../../assets/img/iconSearch.svg";

/* Inclusão e estilização da imagem Home*/
export const StyledMain = styled.main`
  background-image: url(${heroBg});
  background-size: cover;
  height: 100vh;

  @media screen and (max-width: 440px) {
    background-image: url(${mobileHeroBg});
  }

  h1 {  /* Causando transbordamento */
    position: relative;
    font-family: Rubik, sans-serif;
    font-size: 60px;
    top: 17vh;
    left: 8vw;
    font-weight: bold;

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

  p { /* Causando transbordamento */
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
  form { /* Causando transbordamento */
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

