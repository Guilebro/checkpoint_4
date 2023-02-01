import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <div className="navbar">
      <div className="first_try">
        <Link to="/" style={{ color: "gainsboro", textDecoration: "none" }}>
          <p>Who's the boss</p>
        </Link>
      </div>
      <div className="nav_title">
        <Link to="/boss" style={{ color: "gainsboro", textDecoration: "none" }}>
          <p className="infos">Mes Boss</p>
        </Link>
        <Link
          to="/infos"
          style={{ color: "gainsboro", textDecoration: "none" }}
        >
          <p className="infos">Informations</p>
        </Link>
        <Link to="/add" style={{ color: "gainsboro", textDecoration: "none" }}>
          <p className="add">Ajouter une carte</p>
        </Link>
        <Link
          to="/thanks"
          style={{ color: "gainsboro", textDecoration: "none" }}
        >
          <p className="thanks">Remerciements</p>
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
