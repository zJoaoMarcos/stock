import React, { useState, useEffect } from "react";
import { getFirestore, collection, onSnapshot, query, orderBy } from "firebase/firestore";
import { app } from "../../Services/firebaseConfig";
import Header from "../../Components/Navbar/Navbar";
import TableMachines from "./TableMachines";
import { Container } from "./Style";

export default function Machines() {

    const db = getFirestore(app);

    const [items, setItems] = useState([]);

    
    useEffect(() => {
        const q = query(collection(db, "maquinas"), orderBy("hostName", "asc"));
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
            <h1>Inventário de Máquinas</h1>

            <div>
                
                <TableMachines items={items}/>

            </div>


        </Container>
    );
}