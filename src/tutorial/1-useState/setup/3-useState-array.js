import React from "react";
import { data } from "../../../data";

const UseStateArray = () => {
  const [people, setPeople] = React.useState(data);

  const removeItem = (id) => {
    const arrayWithoutID = people.filter((person) => person.id !== id);
    setPeople(arrayWithoutID);
  };

  return (
    <>
      {people.map((person) => {
        const { id, name } = person;
        return (
          <div key={id} className="item">
            <h4>{name}</h4>
            <button onClick={() => removeItem(id)}>remove item</button>
          </div>
        );
      })}
      <button className="btn" onClick={() => setPeople([])}>
        clear items
      </button>
      <button className="btn" onClick={() => setPeople(data)}>
        reset items
      </button>
    </>
  );
};

export default UseStateArray;
