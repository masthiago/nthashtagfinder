import React, { useContext, useState } from 'react';
import {
  Access,
  ErrorText,
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
  const [errors, setErrors] = useState({})
  const { login } = useContext(AuthContext);
  const navigate = useNavigate()

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setErrors((prevErrors) => ({ ...prevErrors, [name]: '' }))
    if (name === 'userName') {
      setUserName(value)
    } else if (name === 'password') {
      setPassword(value)
    }
  }


  const handleSubmit = (e) => {
    e.preventDefault();

    const newErrors = {}

    if (!userName) { 
      newErrors.userName = 'O campo Usuário é obrigatório'
    }

    if (!password) { 
      newErrors.password = 'O campo de senha é obrigatório'
    }

    if(Object.keys(newErrors).length > 0) {
      setErrors(newErrors)
      return
    }

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
        setErrors({ general: 'Credenciais inválidas'})
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
              name='userName'
              value={userName}
              onChange={handleInputChange}
            />
            {errors.userName && <ErrorText>{errors.userName}</ErrorText>}
            <Field
              type='password'
              placeholder='Senha'
              name='password'
              value={password}
              onChange={handleInputChange}
            />
            {errors.password && <ErrorText>{errors.password}</ErrorText>}
            {errors.general && <ErrorText>{errors.general}</ErrorText>}

            <Access 
              type='submit' 
              onClick={handleSubmit}
            >
              ACESSAR
            </Access>
          </FormFields>
        </FormContainer>
      </Wrapper>
    </>
  );
}
