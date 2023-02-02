import React, { useState } from "react";
import AddCardInput from "../components/AddCardInput";
import inputArray from "../utils/input_array";
import "./AddCard.css";

function AddCard() {
  const [addNewBoss, setAddNewBoss] = useState({
    name: null,
    localisation: null,
    picture: null,
    description: null,
    mandatory: null,
    difficulty: null,
    video: null,
  });

  return (
    <div className="main_addCard_div">
      <form className="form" action="add_card">
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
      </form>
    </div>
  );
}

export default AddCard;
