import React, { useContext } from 'react';
import { Form } from '@unform/web';
import Input from '../../Components/Form/Input';
import { AuthLoginContext } from '../../Contexts/AuthLogin';
import { Navigate } from 'react-router-dom';

export default function Login() {
  const { signInFirebase, signed } = useContext(AuthLoginContext);
  
  async function handleLogin(data) {

    const email = data.email;
    const password = data.password;
    
    await signInFirebase(email, password);
  }
  if (!signed) {
  return (
      <div>
          <h2>Login</h2>

          <Form onSubmit={handleLogin}>
              <Input name="email"  type="email" required/>
              <Input name="password" type="password" required/>

              <button type='submit'>Enviar</button>
          </Form>
      </div>
    );
  } else {
    return <Navigate to="/home" />
  }
};