import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
// eslint-disable-next-line import/no-extraneous-dependencies
import axios from "axios";
import Boss from "../components/Boss";
import "./BossList.css";

function BossList() {
  const [bossList, setBossList] = useState([]);
  const [gameList, setGameList] = useState([]);
  const [gameSelected, setGameSelected] = useState("");

  const getBossList = () => {
    const url = "http://localhost:8000/api/boss";
    axios.get(url).then((response) => setBossList(response.data));
  };

  const getGameList = () => {
    const url = "http://localhost:8000/api/game";
    axios.get(url).then((response) => setGameList(response.data));
  };

  useEffect(() => {
    getBossList();
    getGameList();
  }, []);

  const handleChange = (e) => {
    setGameSelected(e.target.value);
  };

  return (
    <div>
      <div className="div_select">
        <select
          className="select"
          name="game_select"
          id="game"
          onChange={handleChange}
        >
          <option value="">Tout les jeux</option>
          {gameList.map((el) => (
            <option key={el.id} value={el.id}>
              {el.title}
            </option>
          ))}
        </select>
      </div>

      <div className="main">
        {bossList
          // eslint-disable-next-line eqeqeq
          .filter((toto) => gameSelected === "" || toto.game_id == gameSelected)
          .map((element) => (
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
