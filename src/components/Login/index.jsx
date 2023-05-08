import React from "react";
import { Access, Field, FormContainer, FormFields, Title, Wrapper } from "./styled";
import Header from "../Header";
import Footer from "../Footer";

export default function Login() {
  return (
    <>
      <Header />
      <Wrapper>
        <FormContainer>
          <FormFields>
            <Title>Login</Title>
            <Field type="text" placeholder="Usuário" />
            <Field type="password" placeholder="Senha" />
            <Access>ACESSAR</Access>
          </FormFields>
        </FormContainer>
      </Wrapper>
      <Footer />
    </>
  );
}
