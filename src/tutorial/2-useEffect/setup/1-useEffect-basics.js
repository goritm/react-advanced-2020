import React, { useState, useEffect } from "react";
// by default runs after every re-render
// cleanup function
// second parameter
const UseEffectBasics = () => {
  const [value, setValue] = useState(0);

  useEffect(() => {
    console.log("initial render useEffect");
  }, []);

  useEffect(() => {
    console.log("use effect call");
    if (value > 0) document.title = `New Messages(${value}) - Gori App`;
  }, [value]);

  console.log("component render");

  return (
    <>
      <h1>{value}</h1>
      <button
        className="btn"
        onClick={() => setValue((prevValue) => prevValue + 1)}
      >
        click me!
      </button>
    </>
  );
};

export default UseEffectBasics;
