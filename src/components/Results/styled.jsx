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
  background-color: blueviolet;
  padding: 5px;
`;

export const ResultsImageContainer = styled.div`
  background-color: pink;
  padding: 5px;
`;

export const ResultImage = styled.div`
  background-color: orange;
  padding: 5px;
`;

export const ResultsPostContainer = styled.div`
  background-color: olivedrab;
  padding: 5px;
`;

export const ResultPost = styled.div`
  background-color: aquamarine;
  padding: 5px;
`;

export const Tab = styled.button`
  background-color: transparent;
  border: 0;
  cursor: pointer;
  color: #ffffff;
  font-size: 20px;
  outline: 0;
  padding: 10px 60px;
  border-bottom: 2px solid #ffffff;
  ${({ active }) =>
    active && `
    border-bottom: 6px solid #ffffff;
  `}
`;

export const ButtonGroup = styled.div`
  display: flex;
`;
