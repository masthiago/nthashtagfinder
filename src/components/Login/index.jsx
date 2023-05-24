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
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Hook/AuthContext';
import { instanceAxios } from '../../services/Api';

export default function Login() {
  const { login, userName, password } = useContext(AuthContext);
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();
  const setUserName = useContext(AuthContext).setUserName;
  const setPassword = useContext(AuthContext).setPassword;

  //updates `userName` and `password` states with input values and removes error message related to modified fields.
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setErrors((prevErrors) => ({ ...prevErrors, [name]: '' }));
    if (name === 'userName') {
      setUserName(value);
    } else if (name === 'password') {
      setPassword(value);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault(); //prevents default behavior

    //checks if fields are empty and adds corresponding error message.
    const newErrors = {};
    if (!userName) {
      newErrors.userName = 'O campo usuário é obrigatório';
    }

    if (!password) {
      newErrors.password = 'O campo de senha é obrigatório';
    }

    //checks for errors in the fields and stops the code if so.
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    //creation and configuration to make a GET request to the Airtable API.
    // let config = {
    //   method: 'get',
    //   maxBodyLength: Infinity,
    //   url:
    //     "https://api.airtable.com/v0/app6wQWfM6eJngkD4/Login?view=Grid%20view&filterByFormula=AND({Squad} = '05-23', {Email} = '" + userName +"', {Senha} = '" +password +"')",
    //   headers: {
    //     Authorization: 'Bearer keykXHtsEPprqdSBF',
    //   },
    // };
    
    instanceAxios
    .get('Login', {
      params: {
        view: 'Grid view',
        filterByFormula: `AND({Squad} = '05-23', {Email} = '${userName}', {Senha} = '${password}')`,
      },
    })
    .then((response) => {
      const records = response.data.records;
  
      if (records && records.length > 0) {
        const record = records[0];
        const squadValue = record.fields.Squad;
  
        if (squadValue === '05-23') {
          login();
          navigate('/search');
        } else {
          setErrors({ general: 'Credenciais inválidas' });
        }
      } else {
        setErrors({ general: 'Credenciais inválidas' });
      }
    })
    .catch((error) => {
      console.log(error)
    })
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
              maxLength={6}
            />
            {errors.password && <ErrorText>{errors.password}</ErrorText>}
            {errors.general && <ErrorText>{errors.general}</ErrorText>}

            <Access type='submit' onClick={handleSubmit}>
              ACESSAR
            </Access>
          </FormFields>
        </FormContainer>
      </Wrapper>
    </>
  );
}
