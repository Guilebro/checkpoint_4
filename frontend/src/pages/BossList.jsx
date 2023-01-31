import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
// eslint-disable-next-line import/no-extraneous-dependencies
import axios from "axios";
import Boss from "../components/Boss";
import "./BossList.css";

function BossList() {
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
      <div className="main">
        {bossList.map((element) => (
          <div>
            <Link to={`/boss/${element.id}`} key={element.id}>
              <Boss
                name={element.name}
                location={element.location}
                mandatory={element.mandatory}
                description={element.description}
                difficulty={element.difficulty}
                picture={element.picture}
              />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default BossList;
