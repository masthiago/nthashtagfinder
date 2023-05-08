import React from 'react'
import { Access, Field, FormContainer, FormFields, Title, Wrapper } from './style'
import Header from '../Header/indexHeader';
import Footer from '../Footer/indexFooter';

export default function Login() {
  return (
    <>
    <Header /> 
      <Wrapper>
        <FormContainer>
          <FormFields>
            <Title>Login</Title>
            <Field type="text" placeholder="Usuário"/>
            <Field type="password" placeholder="Senha"/>
            <Access>ACESSAR</Access>
          </FormFields>
        </FormContainer>
      </Wrapper> 
      <Footer /> 
    </>
  );
}