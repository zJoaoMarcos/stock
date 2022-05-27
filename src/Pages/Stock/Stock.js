import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getFirestore, getDocs, collection } from "firebase/firestore";
import { app } from "../../firebaseConfig";


export default function Insumos() {

    const navigate = useNavigate();
    const db = getFirestore(app);
    
    const [items, setItems]= useState([]);
    
    useEffect(() => {
       const fetchItems = async () => {
        const collectionRef = collection(db, "insumos");
        const data = await getDocs(collectionRef);
        setItems(data.docs.map((doc) => ({...doc.data(), id: doc.id})));
       };
       fetchItems();
    }, [])


    
    return (
        <div>
            <h1>Insumos</h1>

            <div>
                <ul>
                    {items.map(item => {
                        return (
                            <div key={item.id}>
                                <li>Tipo: {item.type}, Descrição: {item.description}, Estoque Atual: {item.stock}, Estoque Minimo: {item.stockMin}</li>
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