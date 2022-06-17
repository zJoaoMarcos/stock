import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getFirestore, collection, onSnapshot } from "firebase/firestore";
import { app } from "../../firebaseConfig";

export default function Movements() {

    const navigate = useNavigate();
    const db = getFirestore(app);

    const [movements, setMovements] = useState([]);

    useEffect(() => {
        onSnapshot(collection(db, "movimentos"), (data) =>
            setMovements(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
        )
    }, []);

    return (
        <div>
            <h1>Movimentos</h1>

            <div>
                <ul>
                    {movements.map(movement => {
                        return (
                            <div key={movement.id}>
                                <li>
                                    Movimento: {movement.movement},
                                    Quantidade: {movement.quantity},
                                    Item: {movement.item},
                                    Técnico: {movement.technician},
                                    Data: {movement.date}
                                </li>
                            </div>
                        )
                    })}
                </ul>
            </div>

            <button onClick={() => navigate('/home')}>Home</button>
            <button onClick={() => navigate('/stock')}>Estoque</button>

        </div>
    );
}