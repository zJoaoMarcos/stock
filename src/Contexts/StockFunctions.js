import { createContext } from "react";
import { app } from "../Services/firebaseConfig";
import { getFirestore ,collection, doc, updateDoc, addDoc, deleteDoc } from "firebase/firestore";

export const StockContext = createContext({});

export const StockProvider = ({ children }) => {
    
    const db = getFirestore(app); 

    const deleteItem = async (id) => {
        const itemDoc = doc(db, "estoque", id);
        await deleteDoc(itemDoc);
    }
    
    const inputStock = async (baseName, id, stock, stockCurrent) => {
        const itemDoc = doc(db, baseName, id);

        const newItems = { stock: Number(stockCurrent) + stock };
        await updateDoc(itemDoc, newItems);
    };

    const outputStock = async (baseName, id, stock, stockCurrent) => {
        const itemDoc = doc(db, baseName, id);

        const newItems = { stock: Number(stockCurrent) - stock };
        await updateDoc(itemDoc, newItems);
    };

    const registerMachines = async (cpu, hostName, memory, place, status, storage, type, graphicsCards) => {
        await addDoc(collection(db, "maquinas"), {
            cpu: cpu,
            hostName: hostName,
            memory: memory,
            place: place,
            status: status,
            storage: storage,
            type: type,
            graphicsCards: graphicsCards
        });
    }

    const editItem = async (id, type, description, stock, stockMin, place) => {
        const itemDoc = doc(db, 'estoque', id)

        const newItems = {
            description: description,
            stock: stock,
            stockMin: stockMin,
            place: place,
            type: type
        }

        await updateDoc(itemDoc, newItems);
    } 

    const movement = async (currentItem, quantity, movement, technician, departament, resquester) => {
        
        const currentDate = new Date().toLocaleDateString();
        
        await addDoc(collection(db, "movimentos"), {
            date: currentDate,
            item: currentItem,
            quantity: quantity,
            movement: movement,
            technician: technician,
            departament: departament,
            requester: resquester
        });
    }
    
    return (
        <StockContext.Provider
            value={{
                inputStock,
                outputStock,
                movement,
                deleteItem,
                registerMachines,
                editItem,
            }}
        >
            {children}    
        </StockContext.Provider>
    )
}
