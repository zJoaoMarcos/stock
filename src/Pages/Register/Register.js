import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Form } from '@unform/web';
import Input from '../../Components/Form/Input';
import { AuthLoginContext } from "../../Contexts/AuthLogin";
import { getFirestore } from "firebase/firestore";
import { collection, addDoc } from "firebase/firestore";
import { app } from "../../firebaseConfig";
 
export default function Register() {
    const navigate = useNavigate();
    const {  signOut  } = useContext(AuthLoginContext);
    const db = getFirestore(app);
    
    
    function handleRegister(data) {
        
        const tipo = data.type
        const descricao = data.description
        const estoque = data.stock
        const estoqueMin = data.stockMin
        
        // Add a new document with a generated id.
        const docRef =  addDoc(collection(db, "insumos"), {
            description: descricao,
            stock: estoque,
            stockMin: estoqueMin,
            type: tipo
        });
        console.log("Document written with ID: ", docRef.id )
        navigate('/home')
        
    }
    
    
    return (
        <div>
            <h2>Cadastre um item</h2>

            <Form onSubmit={handleRegister}>
                <Input name="type" required placeholder="Tipos"/>
                <Input name="description" required placeholder="Descrição"/>
                <Input name="stock" required placeholder="Estoque"/>
                <Input name="stockMin" required placeholder="EstoqueMin"/>

                <button type="submit">Cadastrar</button>
            </Form>


            <button onClick={() => navigate('/home')}>Home</button>
            <button onClick={() => signOut()}>Sair</button>
        </div>
    );
}