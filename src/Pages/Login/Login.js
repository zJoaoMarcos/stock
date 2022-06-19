import React, { useContext } from 'react';
import { AuthLoginContext } from '../../Contexts/AuthLogin';
import { Navigate } from 'react-router-dom';
import FormLogin from './FormLogin/FormLogin';

import { Container, Title } from './Style';

export default function Login() {
  const { signInFirebase, signed } = useContext(AuthLoginContext);
  
  async function login(email, password) {
    await signInFirebase(email, password);
  }
  if (!signed) {
  return (
      <div>
        <Container>
          <Title>Estoque</Title>
          
          <FormLogin login={login} />
        </Container>
      </div>
    );
  } else {
    return <Navigate to="/home" />
  }
};