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
  padding: 100px 20px;
  h2.listTitle {
    font-weight: 400;
    font-size: 32px;
    display: none;
    margin-bottom: 72px;
    @media screen and (min-width: 1024px) {
      display: block;
    }
  }
  span.tagName {
    font-weight: 700;
  }
  span.tagCount {
    font-weight: 700;
  }
  div.listContainer {
    display: grid;
    grid-template-columns: 3fr 4fr;
    justify-content: start;
    align-items: start;
    width: 100%;
    max-width: 1280px;
  }
  ul.listImages {
    display: grid;
    grid-template-columns: 1fr 1fr;
    justify-content: center;
    align-items: start;
    box-sizing: border-box;
    padding: 25px;
    padding-top: 0;
    gap: 25px;
    width: 100%;
  }
  ul.listImages li {
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    border-radius: 20px;
    padding-top: 80%;
    padding-bottom: 10%;
    padding-left: 10%;
    width: 100%;
    min-height: 180px;
    min-width: 180px;
    justify-content: start;
    box-sizing: border-box;
    font-size: 14px;
  }
  span.imageUser {
    font-size: 16px;
    font-weight: 700;
    display: inline-block;
    padding-top: 5px;
  }
  ul.listPost {
    padding-left: 0;
    @media screen and (min-width: 1024px) {
      padding-left: 20px;
    }
  }
  ul.listPost li {
    align-items: start;
    background-color: #ffffff05;
    border-radius: 10px;
    border: 1px solid #ffffff20;
    box-sizing: border-box;
    display: flex;
    padding: 32px;
    gap: 32px;
    justify-content: start;
    margin-bottom: 25px;
    min-height: 100px;
    width: 100%;
  }
  img.userAvatar {
    border-radius: 100%;
    height: 64px;
    width: 64px;
  }
  div.tweetContainer {
  }
  h4.userInfo {
    font-size: 24px;
    font-weight: 700;
    padding-bottom: 16px;
  }
  span.userName {
    font-size: 16px;
    font-weight: 400;
    color: #ffffffa0;
  }
  p.userPost {
    font-size: 16px;
    font-weight: 400;
    color: #ffffffd0;
    padding-bottom: 32px;
  }
  a.userLink {
    color: #72efdb;
    font-size: 16px;
    font-weight: 700;
    text-decoration: none;
    :hover {
      color: #72efdbc0;
    }
  }
`;

export const Tab = styled.button`
  background-color: transparent;
  border: 0;
  cursor: pointer;
  color: #72efdb;
  font-size: 20px;
  outline: 0;
  padding: 10px 0;
  min-width: 180px;
  max-width: 460px;
  width: 90%;
  box-sizing: border-box;
  border-bottom: 2px solid #72efdb;
  ${({ active }) =>
    active &&
    `
    border-bottom: 6px solid #72efdb;
  `}
`;

export const ButtonGroup = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 64px;
  width: 100%;
  box-sizing: border-box;
`;
