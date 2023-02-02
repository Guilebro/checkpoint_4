import React, { useState, useEffect } from "react";
import AddCardInput from "../components/AddCardInput";
import { useAuth } from "../contexts/AuthContext";
import inputArray from "../utils/input_array";
import "./AddCard.css";

function AddCard() {
  const { getGameList, gameList } = useAuth();
  const [addNewBoss, setAddNewBoss] = useState({
    name: null,
    localisation: null,
    picture: null,
    description: null,
    mandatory: null,
    difficulty: null,
    video: null,
  });

  useEffect(() => {
    getGameList();
  }, []);

  return (
    <div className="main_addCard_div">
      <form className="form" action="add_card">
        <select name="game_select" id="game">
          <option value="">Choisissez votre jeu</option>
          {gameList.map((el) => (
            <option>{el.title}</option>
          ))}
        </select>
        {inputArray.map((element) => (
          <AddCardInput
            id={element.id}
            label={element.label}
            value={addNewBoss[element.name] || ""}
            type={element.type}
            name={element.name}
            placeholder={element.placeholder}
            addNewBoss={addNewBoss}
            setAddNewBoss={setAddNewBoss}
          />
        ))}
        <button className="button" type="submit">
          Générer
        </button>
      </form>
    </div>
  );
}

export default AddCard;
