import React from "react";
import { Access, Field, FormContainer, FormFields, Title, Wrapper } from "./styled";
import Header from "../Header";


export default function Login() {


  const handleSubmit = (event) => {
    event.preventDefault();

  };

  return (
    <>
      <Header />
      <Wrapper>
        <FormContainer>
          <FormFields>
            <Title>Login</Title>
            <Field type="text" placeholder="Usuário" />
            <Field type="password" placeholder="Senha" />
            {/* access to search page */}
              <Access type="submit" onClick={handleSubmit }>ACESSAR</Access> 
          </FormFields>
        </FormContainer>
      </Wrapper>
    </>
  );
}
