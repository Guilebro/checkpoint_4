import React from "react";
import "./Navbar.css";

function Navbar() {
  return (
    <div className="navbar">
      <div className="first_try">
        <p>Who's the boss</p>
      </div>
      <div className="nav_title">
        <p className="infos">Informations</p>
        <p className="add">Ajouter une carte</p>
        <p className="thanks">Remerciments</p>
      </div>
    </div>
  );
}

export default Navbar;
