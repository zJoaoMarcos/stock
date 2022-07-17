import React, { useContext } from 'react';
import { AuthLoginContext } from '../../Contexts/AuthLogin';
import { Navigate } from 'react-router-dom';
import FormLogin from './FormLogin/FormLogin';

import { Container, Title } from './Style';

export default function Login() {
  const { signInFirebase, signed } = useContext(AuthLoginContext);
  const titleForm = Login
  async function login(email, password) {
    await signInFirebase(email, password);
  }

  if (!signed) {
  return (
      <div>
        <Container>
          <Title>Estoque Patriani T.I </Title>
          
          <FormLogin login={login} titleForm={titleForm}/>
        </Container>
      </div>
    );
  } else {
    return <Navigate to="/stock" />
  }
};