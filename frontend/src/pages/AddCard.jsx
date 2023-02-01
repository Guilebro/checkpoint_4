import React from "react";
import "./AddCard.css";

function AddCard() {
  return (
    <div className="main_addCard_div">
      <p style={{ color: "white" }}>Ajouter une carte</p>
      <form action="add_card" />
    </div>
  );
}

export default AddCard;
