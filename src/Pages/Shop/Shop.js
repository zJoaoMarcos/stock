import React, { useState, useEffect } from "react";
import { getFirestore, collection, query, where, onSnapshot } from "firebase/firestore";
import { app } from "../../firebaseConfig";
import { Container } from './Style';
import Header from '../../Components/Navbar/Navbar';
import TableShop from "../../Components/Table/TableShop";

export default function Shop() {

    const db = getFirestore(app);

    const [purchases, setPurchases] = useState([]);
    
    useEffect(() => {
        const q = query(collection(db, "estoque"), where("stock", "<=", 5));
        onSnapshot(q, (data) =>
            setPurchases(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
        )
    }, []);


    return (
        <Container>

            <Header />

            <h1>Lista de Compras</h1>

            <div>
                <TableShop purchases={purchases}/>
            </div>

        </Container>
    );
}