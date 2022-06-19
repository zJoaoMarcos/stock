import { Form } from '../Style';
import Input from '../../../Components/Form/Input';

export default function FormLogin(props) {
  
    const handleLogin = (data) => {
        const email = data.email;
        const password = data.password;

        props.login(email, password);
    }
  
    return ( 
        <Form onSubmit={handleLogin}>
            <h2>Login</h2>
            <Input name="email"  type="email" required/>
            <Input name="password" type="password" required/>

            <button type='submit'>Enviar</button>
        </Form>
  );
}