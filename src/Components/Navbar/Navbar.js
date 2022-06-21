import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthLoginContext } from "../../Contexts/AuthLogin";
import { Header } from "./Style";

export default function Navbar() {
    const navigate = useNavigate();
    const { signOut } = useContext(AuthLoginContext);

    return (
        <Header>
            <button onClick={() => navigate('/home')}>Home</button>
            <button onClick={() => signOut()}>Sair</button>
        </Header>
    )
};