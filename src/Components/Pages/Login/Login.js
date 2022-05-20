import React from 'react';
import { Form } from '@unform/web';
import { auth } from '../../../firebaseConfig';
import { signInWithEmailAndPassword } from 'firebase/auth'
import Input from './Form/Input';

export default function Login() {
    
    function handleSubmit(data) {

        const email = data.email;
        const password = data.password;
        
        signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        alert(user.email)
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert(errorMessage, errorCode);
      });

    }


    
    
    return (
        <div>
            <h2>Login</h2>

            <Form onSubmit={handleSubmit}>
                <Input name="email" />
                <Input name="password" type="password"/>

                <button type='submit'>Enviar</button>
            </Form>
        </div>
    );
}