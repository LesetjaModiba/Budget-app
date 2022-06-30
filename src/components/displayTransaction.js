import "../css/display.css";
import React from "react";

function DisplayTransaction (props){
    return (
     <div className="textContainer">
      {props.list.map((item,uid)=>{
        
            if(item.transactionType ==="Expense")
            {
              return(

                            <div key={uid} className="expense">
                            <h4>{item.item}</h4>
                            <h4>{item.amount}</h4>
                            {/* <h4>{item.transactionType}</h4> */}
                
                        </div>       
                        )    
            }
            else
            {
            return(

                          <div key={uid} className="income">
              
                            <h4>{item.item}</h4>
                          <h4>{item.amount}</h4>
                          {/* <h4>{item.transactionType}</h4> */}
              
                      </div>       
                      )  
            }  
        
            

      })}
      
     </div>
     );
    }
export {DisplayTransaction} ;

