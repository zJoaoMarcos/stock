import React, { useState, useEffect } from "react";
import { getFirestore, collection, onSnapshot } from "firebase/firestore";
import { app } from "../../Services/firebaseConfig";
import Header from "../../Components/Navbar/Navbar";
import TableStock from "./TableStock";
import { Container } from "./Style";

export default function Stock() {

    const db = getFirestore(app);

    const [items, setItems] = useState([]);

    useEffect(() => {
        onSnapshot(collection(db, "estoque"), (data) =>
            setItems(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
        )
    }, []);

    return (
        <Container>
            <Header />
            <h1>Estoque</h1>

            <div>
                
                <TableStock items={items}/>

            </div>


        </Container>
    );
}