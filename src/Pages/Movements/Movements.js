import React, { useState, useEffect } from "react";
import { getFirestore, collection, onSnapshot, query, orderBy } from "firebase/firestore";
import { app } from "../../Services/firebaseConfig";
import { Container } from "./Style";

import TableMoviments from "./TableMoviments";
import Header from "../../Components/Navbar/Navbar";

export default function Movements() {

    const db = getFirestore(app);

    const [movements, setMovements] = useState([]);

    useEffect(() => {
    const q = query(collection(db, "movimentos"), orderBy("date", "asc"));
    const search = onSnapshot(q, (snapshot) => {
        let movementsArray = [];
        snapshot.forEach((doc) => {
            movementsArray.push({ ...doc.data(), id: doc.id });
        });
        setMovements(movementsArray);
    });
    return () => search();
    }, []);

    return (
        <Container>
            <Header />
            <h1>Movimentos</h1>

            <div>
                <TableMoviments  movements={movements} />
            </div>

        </Container>
    );
}