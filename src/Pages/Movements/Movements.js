import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getFirestore, collection, onSnapshot } from "firebase/firestore";
import { app } from "../../firebaseConfig";
import { Container } from "./Style";

import TableMoviments from "../../Components/Table/TableMoviments";
import Header from "../../Components/Navbar/Navbar";

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
        <Container>
            <Header />
            <h1>Movimentos</h1>

            <div>
                <TableMoviments  movements={movements} />
            </div>

        </Container>
    );
}