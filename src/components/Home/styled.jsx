import styled from 'styled-components';
import heroBg from '../../assets/img/heroBg.jpg';
import mobileHeroBg from '../../assets/img/mobileHeroBg.jpg';
import iconSearch from '../../assets/img/iconSearch.svg';

/* Inclusão e estilização da imagem Home*/
export const StyledMain = styled.main`
  background-image: url(${heroBg});
  background-size: cover;
  width: 100%;
  height: 1137px;

  @media screen and (max-width: 420px) {
    background-image: url(${mobileHeroBg});
    background-size: cover;
    width: 100%;
    height: 680px;
  }

  div.presentationText {
    display: flex;
    flex-flow: column;

    h1 {
      margin-top: 232px;
      margin-left: 140px;
      font-size: 82px;
      font-weight: bold;

      @media screen and (max-width: 720px) {
        margin-top: 192px;
        margin-left: 60px;
        font-size: 60px;
      }

      @media screen and (max-width: 420px) {
        margin-top: 130px;
        margin-left: 40px;
        font-size: 35px;
      }
    }

    p {
      margin-left: 140px;
      margin-top: 28px;
      font-size: 31px;

      @media screen and (max-width: 720px) {
        margin-top: 20px;
        margin-left: 60px;
        font-size: 17px;
      }

      @media screen and (max-width: 420px) {
        margin-left: 40px;
        font-size: 14px;
      }
    }
  }
  /*Form para barra e botão de pesquisa */
  form {
    display: flex;
    margin-top: 360px;
    justify-content: center;

    @media screen and (max-width: 720px) {
      margin-top: 120px;
    }
    @media screen and (max-width: 420px) {
      margin-top: 155px;
    }
  }

  button.buttonSearch {
    background-color: #1e3e7b;
    background-image: url(${iconSearch});
    background-repeat: no-repeat;
    background-position: center;
    border: none;
    border-radius: 72px 0px 0px 72px;
    width: 125px;
    font-size: 50px;
    cursor: pointer;

    @media screen and (max-width: 420px) {
      width: 40px;
      font-size: 17px;
      background-size: 10px;
    }
  }

  input.textSearch {
    background-color: #1e3e7b;
    width: 875px;
    height: 109px;
    font-size: 50px;
    border-radius: 0px 72px 72px 0px;
    border: none;
    outline: none;

    @media screen and (max-width: 720px) {
      width: 440px;
      height: 90px;
      font-size: 25px;
    }

    @media screen and (max-width: 420px) {
      padding: 8px;
      width: 200px;
      height: 32px;
      font-size: 17px;
    }

    /*Ajuste no Placeholder*/
    ::-webkit-input-placeholder {
      color: #8d9da2;
      font-size: 50px;
      align-items: center;

      @media screen and (max-width: 420px) {
        font-size: 17px;
        align-items: center;
      }
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
