import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getFirestore, collection, query, where, onSnapshot } from "firebase/firestore";
import { app } from "../../firebaseConfig";


export default function Shop() {

    const navigate = useNavigate();
    const db = getFirestore(app);

    const [purchases, setPurchases] = useState([]);
    
    useEffect(() => {
        const q = query(collection(db, "estoque"), where("stock", "<=", 5));
        onSnapshot(q, (data) =>
            setPurchases(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
        )
    }, []);


    return (
        <div>
            <h1>Lista de Compras</h1>

            <div>
                <ul>
                    {purchases.map(item => {
                        return (
                            <div key={item.id}>
                                <li>
                                    Tipo: {item.type},
                                    Descrição: {item.description},
                                    Estoque Atual: {item.stock},
                                    Estoque Minimo: {item.stockMin}
                                </li>
                            </div>
                        )
                    })}
                </ul>
            </div>

            <button onClick={() => navigate('/home')}>Home</button>
            <button onClick={() => navigate('/register')}>Cadastrar Item</button>

        </div>
    );
}