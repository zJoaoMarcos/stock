import { createContext } from "react";
import { app } from "../firebaseConfig";
import { getFirestore ,collection, doc, updateDoc, addDoc, deleteDoc } from "firebase/firestore";

export const StockContext = createContext({});

export const StockProvider = ({ children }) => {
    
    const db = getFirestore(app); 

    const deleteItem = async (id) => {
        const itemDoc = doc(db, "estoque", id);
        await deleteDoc(itemDoc);
    }
    
    const inputStock = async (id, stock, stockCurrent) => {
        const itemDoc = doc(db, "estoque", id);

        const newItems = { stock: Number(stockCurrent) + stock };
        await updateDoc(itemDoc, newItems);
    };

    const outputStock = async (id, stock, stockCurrent) => {
        const itemDoc = doc(db, "estoque", id);

        const newItems = { stock: Number(stockCurrent) - stock };
        await updateDoc(itemDoc, newItems);
    };

    const movement = async (currentItem, quantity, movement, technician) => {
        
        const currentDate = new Date().toLocaleDateString();
        
        await addDoc(collection(db, "movimentos"), {
            date: currentDate,
            item: currentItem,
            quantity: quantity,
            movement: movement,
            technician: technician
        });
    }
    
    return (
        <StockContext.Provider
            value={{
                inputStock,
                outputStock,
                movement,
                deleteItem,
            }}
        >
            {children}    
        </StockContext.Provider>
    )
}
