import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthLoginContext } from "../../Contexts/AuthLogin";

export default function Register() {
    const navigate = useNavigate();
    const { user, signOut  } = useContext(AuthLoginContext);
    let userLogado = JSON.parse(user)
    return (
        <div>
            <h2>{userLogado.email} Cadastre um item</h2>

            <button onClick={() => navigate('/home')}>Home</button>
            <button onClick={() => signOut()}>Sair</button>
        </div>
    );
}