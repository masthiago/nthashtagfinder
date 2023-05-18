import styled from 'styled-components';

export const ResultsContainer = styled.div`
  align-items: center;
  background-color: #0a1744;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: start;
  margin: 0;
  min-height: 20vh;
  padding: 100px 20px;
  h2.listTitle {
    text-align: center;
    font-weight: 400;
    font-size: 32px;
    display: none;
    margin-bottom: 72px;
    @media screen and (min-width: 1024px) {
      display: block;
    }
  }
  span.errorMsg {
    color: #ffcece;
    font-size: 50%;
    font-weight: 300;
  }
  span.tagName {
    font-weight: 400;
  }
  span.tagCount {
    font-weight: 400;
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
    @media screen and (min-width: 1024px) {
      gap: 45px;
    }
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
    min-height: 160px;
    min-width: 160px;
    justify-content: start;
    box-sizing: border-box;
    font-size: 12px;
    cursor: pointer;
    @media screen and (min-width: 1024px) {
      font-size: 14px;
    }
  }
  a.imageUser {
    font-size: 12px;
    font-weight: 500;
    display: inline-block;
    padding-top: 5px;
    @media screen and (min-width: 1024px) {
      font-size: 16px;
    }
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
    border-radius: 5px;
    border: 1px solid #ffffff20;
    box-sizing: border-box;
    display: flex;
    padding: 20px 16px;
    gap: 15px;
    justify-content: start;
    margin-bottom: 25px;
    min-height: 100px;
    width: 100%;
    @media screen and (min-width: 1024px) {
      border-radius: 15px;
      padding: 50px 42px;
      gap: 26px;
    }
  }
  img.userAvatar {
    border-radius: 100%;
    height: 54px;
    width: 54px;
    @media screen and (min-width: 1024px) {
      height: 82px;
      width: 82px;
    }
  }
  div.tweetContainer {
  }
  h4.userInfo {
    font-size: 12px;
    font-weight: 500;
    padding-bottom: 5px;
    @media screen and (min-width: 1024px) {
      font-size: 27px;
    }
  }
  span.userName {
    font-size: 8px;
    font-weight: 400;
    color: #ffffffa0;
    @media screen and (min-width: 1024px) {
      font-size: 20px;
    }
  }
  p.userPost {
    font-size: 12px;
    font-weight: 400;
    color: #ffffffd0;
    padding-bottom: 20px;
    width: 100%;
    @media screen and (min-width: 1024px) {
      font-size: 19px;
    }
  }
  a.userLink {
    color: #72efdb;
    font-size: 9px;
    font-weight: 500;
    text-decoration: none;
    :hover {
      color: #72efdbc0;
    }
    @media screen and (min-width: 1024px) {
      font-size: 20px;
    }
  }
`;

export const Tab = styled.button`
  background-color: transparent;
  border: 0;
  cursor: pointer;
  color: #ffffff;
  font-size: 16px;
  font-weight: 400;
  outline: 0;
  padding: 10px 0;
  min-width: 180px;
  max-width: 460px;
  width: 90%;
  line-height: 22px;
  box-sizing: border-box;
  border-bottom: 1px solid #72efdb50;
  ${({ active }) =>
    active &&
    `
    color: #72efdb;
    border-bottom: 4px solid #72efdb;
    font-weight: 500;
  `}
`;

export const ButtonGroup = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 64px;
  width: 100%;
  box-sizing: border-box;
`;

export const ModalContainer = styled.div`
  background-position: center center;
  background-repeat: no-repeat;
  background-size: contain;
  bottom: 5px;
  box-sizing: border-box;
  color: #000;
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: space-between;
  left: 5px;
  right: 5px;
  top: 5px;
  width: 100%;
  .modalHeader {
    color: inherit;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin: 20px;
    padding: 10px;
  }
  .modalFooter {
    background-color: #0000009e;
    border-radius: 20px;
    margin: 20px auto;
    max-width: 80%;
    text-align: center;
    padding: 10px;
    font-size: small;
  }
  .modalUser {
    background-color: #0000009e;
    border-radius: 20px;
    padding: 10px 40px;
    font-weight: bold;
  }

  .modalClose {
    color: #fff;
    border: 0;
    background-color: #0000009e;
    font-weight: bolder;
    font-size: 18px;
    border-radius: 20px;
    padding: 10px 40px;
    
  }
`;

export const Loading = styled.div`
  position: absolute;
  bottom: 0;
`;
