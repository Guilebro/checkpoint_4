import React from "react";
import "./Home.css";

function Home() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginTop: "35vh",
      }}
    >
      <h1
        style={{ color: "white", fontSize: "8rem", fontFamily: "Planewalker" }}
      >
        Welcome{" "}
      </h1>
    </div>
  );
}

export default Home;
