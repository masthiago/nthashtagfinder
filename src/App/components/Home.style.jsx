import styled from 'styled-components';
import heroBg from '../assets/heroBg.jpg';

/*Estilização do header*/
export const StyledHeader = styled.header`
  width: 100%;
  height: 70px;
  padding: 35px;
  background-color: #0a1744;
  display: flex;
  justify-content: space-between;
  align-items: center;
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
`;

/* Inclusão e estilização da imagem Home*/
export const StyledMain = styled.main`
  background-image: url(${heroBg});
  background-size: cover;
  height: 100vh;
`;
