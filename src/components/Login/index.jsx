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
  const { login, userName, password, setUserName, setPassword } = useContext(AuthContext);
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

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
    if (!userName || !/^.*@.*$/.test(userName)) {
      newErrors.userName = 'Insira um endereço de email válido';
    }

    if (!password) {
      newErrors.password = 'O campo de senha é obrigatório';
    }

    //checks for errors in the fields and stops the code if so.
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    instanceAxios
      .get('Login', {
        params: {
          view: 'Grid view',
          filterByFormula: `AND({Squad} = '05-23', {Email} = '${userName}', {Senha} = '${password}')`,
        },
      })
      .then((response) => {
        const records = response.data.records;
        const record = records && records.length > 0 ? records[0] : null;
        const squadValue = record?.fields.Squad;

        if (squadValue === '05-23') {
          login();
          navigate('/search');
        } else {
          setErrors({ general: 'Credenciais inválidas' });
        }
      })
      .catch((error) => {
        console.log(error);
        setErrors({ general: 'Ocorreu um erro durante a autenticação' });
      })
      .finally(() => {
        setUserName('');
        setPassword('');
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
