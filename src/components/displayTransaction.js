import "../css/display.css";
import React, { useEffect, useState } from "react";
import { onSnapshot, collection } from "firebase/firestore";
import { db } from "../config/firebase";

function DisplayTransaction() {
  const [info, setInfo] = useState([]);


  useEffect(() => {
    onSnapshot(collection(db, "transaction"), (snapshot) => {
      setInfo(
        snapshot.docs.map((dat) => ({
          item: dat.data().item,
          amount: dat.data().amount,
          transactionType: dat.data().transactionType,
        }))
      );
    });
  }, []);
  console.log("from info array", info);

  return (
    <div className="textContainer">
      {info.map((inf, uid) => {
        if (inf.transactionType === "Expense") {
          return (
            <div key={uid} className="expense">
              <h4>{inf.item}</h4>
              <h4>R{inf.amount}</h4>
            </div>
          );
        } else {
          return (
            <div key={uid} className="income">
              <h4>{inf.item}</h4>
              <h4>R{inf.amount}</h4>
            </div>
          );
        }
      })}
    </div>
  );
}
export { DisplayTransaction };
