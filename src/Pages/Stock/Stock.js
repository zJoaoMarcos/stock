import React, { useState, useEffect } from "react";
import { getFirestore, collection, onSnapshot, query, orderBy } from "firebase/firestore";
import { app } from "../../Services/firebaseConfig";
import Header from "../../Components/Navbar/Navbar";
import TableStock from "./TableStock";
import { useNavigate } from "react-router-dom";
import { Container, Button } from "./Style";

export default function Stock() {

    const db = getFirestore(app);
    const navigate = useNavigate();
    const [items, setItems] = useState([]);

    
    useEffect(() => {
        const q = query(collection(db, "estoque"), orderBy("description", "asc"));
        const search = onSnapshot(q, (snapshot) => {
            let itemsArray = [];
            snapshot.forEach((doc) => {
                itemsArray.push({ ...doc.data(), id: doc.id });
            });
            setItems(itemsArray);
        });
        return () => search();
        }, []);

    return (
        <Container>
            <Header />
            <h1>Estoque</h1>

            <Button onClick={() => navigate('/register')}>Registrar</Button>

            <div>
                
                <TableStock items={items}/>

            </div>


        </Container>
    );
}