import styled from "styled-components";

export const ResultsContainer = styled.div`
  align-items: center;
  background-color: #0a1744;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: start;
  margin: 0;
  min-height: 100vh;
  padding: 100px 0;
`;

export const ResultsHeader = styled.div`
  color: #ececec;
  display: none;
  font-size: 32px;
  font-weight: bold;
  padding: 0 0 32px 0;
  @media screen and (min-width: 1024px) {
    display: block;
  }
`;

export const ResultsDynamicContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  width: 100%;
  max-width: 1280px;
  min-width: 340px;
  @media screen and (min-width: 1024px) {
    display: grid;
    grid-template-columns: 3fr 4fr;
    grid-template-rows: 1fr;
    align-items: start;
  }
`;

export const ResultsImageContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: start;
  padding: 5px;
  width: 100%;
`;

export const ResultImage = styled.div`
  background-image: url(${props => props.background});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: 10%;
  cursor: pointer;
  margin: 0 5% 5% 5%;
  padding-bottom: 15px;
  padding-left: 15px;
  padding-top: calc(40% - 40px);
  width: 40%;
  box-sizing: border-box;
`;

export const ResultsPostContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 5px;
  padding-right: 20px;
`;

export const ResultPost = styled.div`
  padding: 20px;
  display: flex;
  gap: 20px;
  justify-content: start;
  align-items: start;
  background-color: #ffffff05;
  border-radius: 10px;
  margin-bottom: 25px;
  border: 1px solid #ffffff20;
`;

export const Tab = styled.button`
  background-color: transparent;
  border: 0;
  cursor: pointer;
  color: #72efdb;
  font-size: 20px;
  outline: 0;
  padding: 10px 60px;
  border-bottom: 2px solid #72efdb;
  ${({ active }) =>
    active &&
    `
    border-bottom: 6px solid #72efdb;
  `}
`;

export const ButtonGroup = styled.div`
  display: flex;
  /* margin-bottom: 32px; */
`;
