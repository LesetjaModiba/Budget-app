import "../css/add.css";
import React, {useState} from "react";

function AddItem(props){

    const[amount, setAmount]=useState('');
    const[item, setItem]=useState('');
    const[transactionType, setTransactionType]=useState('');
   
    const Add=(()=>
    {
        // console.log(item);
        // console.log(amount);
        // console.log(transactionType);
        props.Add(amount, item, transactionType);
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