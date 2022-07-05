import "../css/add.css";
import React, {useState} from "react";
import { db } from "../config/firebase";
import { addDoc, collection } from "firebase/firestore";
function AddItem(){

    const[amount, setAmount]=useState('');
    const[item, setItem]=useState('');
    const[transactionType, setTransactionType]=useState('');
    
    const Add=(()=>
    {
        const collectionRef=collection(db, "transaction")
        const transaction={
            item:item,
            amount:amount,
            transactionType:transactionType
        };
        addDoc(collectionRef, transaction).then(()=>{
            alert("added successfully")
        }).catch((error)=>{console.log(error)})
        // props.Add(amount, item, transactionType);
    })
    
    return(
        <div className="container">
         <input placeholder="Enter item" onChange={(e)=>setItem(e.target.value)}/>
         <input placeholder="Enter amount" onChange={(e)=>setAmount(e.target.value)}/>
         
         <select onChange={(e)=>setTransactionType(e.target.value)}>
             <option value="Income">Income</option>
             <option value="Expense">Expense</option>
         </select>
        
        <button id="btn" onClick={Add}>Add</button>
        </div>

    );
}
export default AddItem; 