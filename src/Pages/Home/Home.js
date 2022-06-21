import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthLoginContext } from "../../Contexts/AuthLogin";
import { Container, Title, Options } from "./Style";

export default function Home() {
    const navigate = useNavigate();
    const { user, signOut  } = useContext(AuthLoginContext);
    let userLogado = JSON.parse(user)
    return (
        <Container>
            <Title>Estoque TI </Title>
            <Options>

                <button onClick={() => navigate('/register')}>Cadastrar Item</button>
                <button onClick={() => navigate('/stock')}>Estoque</button>
                <button onClick={() => navigate('/shop')}>Lista de Compras</button>
                <button onClick={() => navigate('/movements')}>Movimentos</button>
                <button onClick={() => signOut()}>Sair</button>
            </Options>
        </Container>
    );
}