import React, { useState, useEffect } from "react";
import { getFirestore, collection, onSnapshot } from "firebase/firestore";
import { app } from "../../Services/firebaseConfig";
import Header from "../../Components/Navbar/Navbar";
import TablePrinters from "./TablePrinters";
import { Container } from "./Style";

export default function Printers() {

    const db = getFirestore(app);

    const [printers, setPrinters] = useState([]);

    useEffect(() => {
        onSnapshot(collection(db, "impressoras"), (data) =>
            setPrinters(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
        )
    }, []);

    return (
        <Container>
            <Header />
            <h1>Impressoras</h1>

            <div>
                
                <TablePrinters printers={printers}/>

            </div>


        </Container>
    );
}