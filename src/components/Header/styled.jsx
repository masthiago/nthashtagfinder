import styled from "styled-components";

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
    prop.backgroundColor ? prop.backgroundColor : "#1E3E7B"};

  color: ${(prop) => (prop.color ? prop.color : "#fff")};

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