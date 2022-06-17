import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthLoginContext } from "../../Contexts/AuthLogin";

export default function Home() {
    const navigate = useNavigate();
    const { user, signOut  } = useContext(AuthLoginContext);
    let userLogado = JSON.parse(user)
    return (
        <div>
            <h2>Wellcome to HomePage: {userLogado.email}</h2>

            <button onClick={() => navigate('/register')}>Cadastrar Item</button>
            <button onClick={() => navigate('/stock')}>Estoque</button>
            <button onClick={() => navigate('/shop')}>Lista de Compras</button>
            <button onClick={() => navigate('/movements')}>Movimentos</button>
            <button onClick={() => signOut()}>Sair</button>
        </div>
    );
}