import React, { useState } from "react";

const UseStateBasics = () => {
  const [title, setTitle] = useState("random title");

  const onClickHandler = () => {
    if (title === "random title") {
      setTitle("EPIC");
    } else {
      setTitle("random title");
    }
  };

  return (
    <>
      <h2>{title}</h2>
      <button className="btn" onClick={onClickHandler}>
        change title
      </button>
    </>
  );
};

export default UseStateBasics;
