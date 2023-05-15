import React, { useContext, useState } from 'react';
import {
  Access,
  Field,
  FormContainer,
  FormFields,
  Title,
  Wrapper,
} from './styled';
import Header from '../Header';
import { AuthContext } from './AuthContext';
import axios from 'axios';
import { Navigate } from 'react-router-dom';

export default function Login() {
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const { login } = useContext(AuthContext);


  const handleSubmit = (e) => {
    e.preventDefault();

    let config = {
      method: 'get',
      maxBodyLength: Infinity,
      url: 'https://api.airtable.com/v0/app6wQWfM6eJngkD4/Login?view=Grid%20view&filterByFormula=AND({Squad} = \'05-23\', {Email} = \''+ userName +'\', {Senha} = \''+ password +'\')',
      headers: {
        Authorization: 'Bearer keykXHtsEPprqdSBF',
      },
    };

    axios
      .request(config)
      .then((response) => {
        console.log(JSON.stringify(response.data));
        login();
        Navigate('/search');
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <Header />
      <Wrapper>
        <FormContainer>
          <FormFields>
            <Title>Login</Title>
            <Field
              type='text'
              placeholder='Usuário'
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
            />
            <Field
              type='password'
              placeholder='Senha'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <Access type='submit' onClick={handleSubmit}>
              ACESSAR
            </Access>
          </FormFields>
        </FormContainer>
      </Wrapper>
    </>
  );
}
