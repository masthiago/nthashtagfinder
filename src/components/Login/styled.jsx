import styled from "styled-components";
import heroBg from "../../assets/img/heroBg.jpg";
import mobileHeroBg from "../../assets/img/mobileHeroBg.jpg";

// style for main container
export const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url(${heroBg});
  background-size: cover;
  background-position: center;
  
  @media screen and (max-width: 414px) {
    background-image: url(${mobileHeroBg});
  }
`;

// style for form container
export const FormContainer = styled.div`
  width: 558px;
  height: 608px;
  background-color: rgba(24, 50, 107, 0.5);
  backdrop-filter: blur(6px);
  border-radius: 14px;
  
  @media screen and (max-width: 600px) {
    width: 320px;
    height: 460px;
  }
`;

// style for the form itself
export const FormFields = styled.form`
  display: flex;
  flex-direction: column;
  margin: 120px 48px;

  @media screen and (max-width: 600px) {
    margin: 62px 37px;
  }
`;

// style for form title
export const Title = styled.h1`
  color: #72efdb;
  display: flex;
  justify-content: center;
  margin-bottom: 50px;
  font-family: Rubik, Bold;
`;

// style for input field
export const Field = styled.input`
  border: none;
  background: none;
  border-bottom: 1px solid #e9e9f0;
  margin-bottom: 44px;
  height: 31px;
  color: #ffffff;
  font-size: ;
  font-family: Rubik, Regular;

  :focus {
    box-shadow: 0 0 0 0;
    outline: 0;
  }

  ::placeholder {
    color: #ffffff;
  }
`;

// access button style
export const Access = styled.button`
  width: 204px;
  height: 46px;
  border: none;
  font-family: Rubik, Medium;
  border-radius: 24px;
  background: #72efdb;
  margin: 10px 126px 0;
  color: #0b1741;

  @media screen and (max-width: 600px) {
    margin: 0 30px;
  }
`;
