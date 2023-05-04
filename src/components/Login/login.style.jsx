import styled from "styled-components";
import heroBg from '../../App/assets/heroBg.jpg'

export const Wrapper = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center; 
    align-items: center;
    background-image: url(${heroBg});
    background-size: cover;
    background-position: center;
`

export const Box = styled.div`
    width: 558px;
    height: 608px; 
    background-color: rgba(24, 50, 107, 0.5);
    backdrop-filter: blur(6px);
    border-radius: 14px;

    @media screen and (max-width: 600px) { 
        width: 320px;
        height: 460px;
    }
`
export const FormFields = styled.form`
    display: flex;
    flex-direction: column;
    margin: 120px 48px;

    @media screen and (max-width: 600px) {
        margin: 62px 37px;
    }
`
export const Title = styled.h1`
    color: #72EFDB;
    display: flex;
    justify-content: center;
    margin-bottom: 50px;
    font-family: Rubik, Bold;
`

export const Field = styled.input`
    border: none;
    background: none;
    border-bottom: 1px solid #E9E9F0;
    margin-bottom: 44px;
    height: 31px; 
    color: #FFFFFF;
    font-family: Rubik, Regular;
    
    :focus {
        box-shadow: 0 0 0 0;
        outline: 0;
    }

    ::placeholder { 
        color: #FFFFFF;
    }
` 

export const Access = styled.button`
    width: 204px; 
    height: 46px;
    border: none;
    font-family: Rubik, Medium;
    border-radius: 24px;
    background: #72EFDB;
    margin: 10px 126px 0;
    color: #0B1741;

    @media screen and (max-width: 600px) { 
        margin: 0 30px;
    }
`

