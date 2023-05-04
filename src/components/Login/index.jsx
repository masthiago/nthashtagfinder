import React from 'react'
import { Access, Box, Field, FormFields, Title, Wrapper } from './style'

export default function Login() {
  return (
    <>
      <Wrapper>
        <Box>
          <FormFields action="">
            <Title>Login</Title>
            <Field type="text" placeholder="Usuário"/>
            <Field type="password" placeholder="Senha"/>
            <Access>ACESSAR</Access>
          </FormFields>
        </Box>
      </Wrapper> 
    </>
  )
}