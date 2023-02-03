import React from "react";
import "./Informations.css";

function Informations() {
  return (
    <div className="master_div">
      <h1 className="infos_title">QU'EST-CE QUE C'EST ?</h1>
      <div className="infos_div">
        <p className="infos_text" style={{ color: "white" }}>
          Who's the boss? est un site qui regroupe un bon nombres de boss
          emblématiques des jeux From Software© sous forme de cartes Magic The
          Gathering©.
          <br />
          Gérez, ajoutez et modifiez vos propres cartes à votre collection.
        </p>
      </div>
    </div>
  );
}

export default Informations;
