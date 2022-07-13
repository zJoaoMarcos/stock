import React, { useState, useEffect } from "react";
import { getFirestore, collection, query, onSnapshot, orderBy } from "firebase/firestore";
import { app } from "../../Services/firebaseConfig";
import { Container } from './Style';
import Header from '../../Components/Navbar/Navbar';
import TableShop from "./TableShop";

export default function Shop() {

    const db = getFirestore(app);

    const [purchases, setPurchases] = useState([]);
    
    
    useEffect(() => {
        const q = query(collection(db, "estoque"), orderBy("stock", "desc"));
        const search = onSnapshot(q, (snapshot) => {
            let purchasesArray = [];
            snapshot.forEach((doc) => {
                purchasesArray.push({ ...doc.data(), id: doc.id });
            });
            const shop = purchasesArray.filter(item => item.stock <= item.stockMin)

            console.log(shop)
            setPurchases(shop);
        });
        return () => search();
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