import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Boss from "../components/Boss";
import { useAuth } from "../contexts/AuthContext";
import "./BossList.css";

function BossList() {
  const { getGameList, gameList, getBossList, bossList } = useAuth();
  const [gameSelected, setGameSelected] = useState("");

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
