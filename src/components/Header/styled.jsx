import styled from 'styled-components';

/*Estilização do header*/
export const StyledHeader = styled.header`
  width: 100%;
  height: 117px;
  padding: 35px;
  display: flex;
  position: fixed;
  align-items: center;
  justify-content: space-between;
  background: #000927a6 0% 0% no-repeat padding-box;
  box-shadow: 0px 3px 29px #00000000;
  backdrop-filter: blur(30px);

  div {
    display: flex;
  }

  a {
    text-decoration: none;
  }

  /*Logo da hashtagfinder feito manualmente devido a erro no asset disponibilizado*/
  p {
    font-size: 39px;
    span {
      font-weight: bolder;
    }
  }

  @media screen and (max-width: 720px) {
    p {
      font-size: 20px;
    }
  }
  @media screen and (max-width: 420px) {
    height: 82px;
    padding: 10px;
    place-content: space-evenly;

    p {
      font-size: 12px;
    }
  }
`;

/*Estilização dos botões do Header*/
export const StyledButton = styled.button`
  background-color: ${(prop) =>
    prop.backgroundColor ? prop.backgroundColor : '#1E3E7B'};

  color: ${(prop) => (prop.color ? prop.color : '#fff')};

  width: 170px;
  height: 49px;
  margin: 8px;
  border-radius: 50px;
  border: none;
  font-size: 17px;
  font-weight: bold;
  cursor: pointer;
  &:hover {
    transition: all 0.1s ease;
    transform: translate(1.5%) scale(1.1);
  }
  .iconHeader {
    margin-right: 10px;
    width: 13px;
  }

  @media screen and (max-width: 720px) {
    width: 100px;
    height: 30px;
    font-size: 10px;
  }

  @media screen and (max-width: 420px) {
    width: 70px;
    font-size: 7px;
    height: 20px;

    .iconHeader {
      margin-right: 5px;
      width: 9px;
    }
  }
`;
