import React, { useState, useEffect } from "react";
// eslint-disable-next-line import/no-extraneous-dependencies
import axios from "axios";

function Home() {
  const [bossList, setBossList] = useState([]);

  const getBossList = () => {
    const url = "http://localhost:8000/api/boss";
    axios.get(url).then((response) => setBossList(response.data));
  };

  useEffect(() => {
    getBossList();
  }, []);

  return (
    <div>
      <p>Home</p>
      <ul>
        {bossList.map((element) => (
          <li>{element.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default Home;
