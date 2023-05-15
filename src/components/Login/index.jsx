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
import { useNavigate } from 'react-router-dom';

export default function Login() {
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const { login } = useContext(AuthContext);
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault();

    let config = {
      method: 'get',
      maxBodyLength: Infinity,
      url:
        "https://api.airtable.com/v0/app6wQWfM6eJngkD4/Login?view=Grid%20view&filterByFormula=AND({Squad} = '05-23', {Email} = '" +
        userName +
        "', {Senha} = '" +
        password +
        "')",
      headers: {
        Authorization: 'Bearer keykXHtsEPprqdSBF',
      },
    };

    axios
    .request(config)
    .then((response) => {
      console.log(JSON.stringify(response.data));
      const records = response.data.records;
  
      if (records && records.length > 0) {
        const record = records[0]; // Acessando o primeiro registro da matriz
        const squadValue = record.fields.Squad; // Obtendo o valor da propriedade "Squad"
  
        if (squadValue === '05-23') {
          login();
          navigate('/search');
        }
      } else {
        console.log('Nenhum registro encontrado.');
      }
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
