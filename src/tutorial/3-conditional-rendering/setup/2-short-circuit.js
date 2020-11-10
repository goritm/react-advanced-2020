import React, { useState } from "react";
// short-circuit evaluation
// ternary operator

const ShortCircuit = () => {
  const [text, setText] = useState("");
  const [isError, setIsError] = useState(false);
  // const firstValue = text || "hello world";
  // const secondValue = text && "hello world";

  return (
    <>
      {/* <h1>First Value: {firstValue}</h1>
      <h1>Second Value: {secondValue}</h1> */}
      {/* <h1>{text && <h3>hello word</h3>}</h1>
      <h1>{!text && <h3>hello word</h3>}</h1> */}

      {/* <h1>{text || "pog"}</h1> */}
      <button className="btn" onClick={() => setIsError(!isError)}>
        toggle error
      </button>
      {/* {isError && <h2>Error...</h2>} */}
      {isError ? (
        <h2>Error: true</h2>
      ) : (
        <div>
          <h2>Error: false</h2>
        </div>
      )}
    </>
  );
};

export default ShortCircuit;
