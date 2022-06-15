import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getFirestore, collection, doc, deleteDoc, onSnapshot, updateDoc } from "firebase/firestore";
import { app } from "../../firebaseConfig";
import ButtonUpdate from "../../Components/Popup/Update.js";

export default function Stock() {

    const navigate = useNavigate();
    const db = getFirestore(app);

    const [items, setItems] = useState([]);

    useEffect(() => {
        onSnapshot(collection(db, "estoque"), (data) =>
            setItems(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
        )
    }, []);

    async function deleteItem(id) {
        const itemDoc = doc(db, "estoque", id);
        await deleteDoc(itemDoc);
    }

    const inputStock = async (id, stock, stockCurrent) => {
        const itemDoc = doc(db, "estoque", id);

        const newItems = { stock: Number(stockCurrent) + stock };
        await updateDoc(itemDoc, newItems);
    };

    const outputStock = async (id, stock, stockCurrent) => {
        const itemDoc = doc(db, "estoque", id);

        const newItems = { stock: Number(stockCurrent) - stock };
        await updateDoc(itemDoc, newItems);
    };


    return (
        <div>
            <h1>Estoque</h1>

            <div>
                <ul>
                    {items.map(item => {
                        return (
                            <div key={item.id}>
                                <li>
                                    Tipo: {item.type},
                                    Descrição: {item.description},
                                    Estoque Atual: {item.stock},
                                    Estoque Minimo: {item.stockMin}
                                    <button onClick={() => deleteItem(item.id)}>Deletar</button>
                                    <ButtonUpdate description={item.description} id={item.id}
                                        stockCurrent={item.stock} inputStock={inputStock} outputStock={outputStock} />
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