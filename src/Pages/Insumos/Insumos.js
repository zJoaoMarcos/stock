import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { collection, getFirestore, getDocs, query } from "firebase/firestore";
import { app } from "../../firebaseConfig";


export default function Insumos() {

    const navigate = useNavigate();
    const db = getFirestore(app);
    
    const [items, setItems]= useState([]);
    
    useEffect(() => {
        fetchItems();
    }, [])

    const fetchItems =async()=>{

        const q = query(collection(db, "insumos"));

        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
        setItems([...items, doc.data()])
        /* console.log(doc.id, " => ", doc.data()); */
        });
    
    }

    
    return (
        <div>
            <h1>Insumos</h1>

            {
                setItems && items.map(item=>{
                    return(
                        <div>
                            
                            <ul>Descrição: {item.description}, Tipo: {item.type}, Estoque: {item.stock}, Estoque Min: {item.stockMin} </ul>
                        </div>
                    )
                })
            }

            <button onClick={() => navigate('/home')}>Home</button>

        </div>
    );
}