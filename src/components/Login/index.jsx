import React from 'react'
import { Access, Field, FormContainer, FormFields, Title, Wrapper } from './style'

export default function Login() {
  return (
    <>
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
    </>
  );
}