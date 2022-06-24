import React from "react";
import { collection, addDoc } from "firebase/firestore";
import { getFirestore } from "firebase/firestore";
import { app } from "../../firebaseConfig";
import { useNavigate } from "react-router-dom";
import Header from "../../Components/Navbar/Navbar";
import Input from '../../Components/Form/Input';
import Select from '../../Components/Form/Select';

import { Container, Form  } from "./Style";

export default function Register() {
    const navigate = useNavigate();
    const db = getFirestore(app);

    const selectOptions = [
        { value: 'Periférico', label: 'Periférico' },
        { value: 'Hardware', label: 'Hardware' }
    ]

    function handleRegister(data) {

        const type = data.type
        const descricao = data.description
        const estoque = Number(data.stock)
        const estoqueMin = Number(data.stockMin)

        // Add a new document with a generated id.
        const docRef = addDoc(collection(db, "estoque"), {
            description: descricao,
            stock: estoque,
            stockMin: estoqueMin,
            type: type
        });
        alert("Item registrado com sucesso!! ", docRef.description)
        navigate('/stock');

    }

    return (
        
        <Container>
            <Header />
                
            <Form onSubmit={handleRegister}>
                <h2>Cadastre um item</h2>
                <Select
                name="type"
                label="Tipo de Movimento"
                options={selectOptions} >
                {selectOptions.map(option => (
                    <option key={option.value} value={option.value}>
                    {option.label}
                    </option>
                ))}
                </Select>
                <Input name="description" type="text" required placeholder="Descrição" />
                <Input name="stock" type="number" required placeholder="Estoque" />
                <Input name="stockMin" type="number" required placeholder="Estoque Minimo" />

                <button type="submit">Cadastrar</button>
            </Form>

        </Container>
    );
}