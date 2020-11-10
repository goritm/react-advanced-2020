import React from "react";

const ErrorExample = () => {
  let title = "random title";

  const onClickHandler = (event) => {
    title = "epic";
    console.log(title);
  };

  return (
    <>
      <h2>{title}</h2>
      <button type="button" className="btn" onClick={onClickHandler}>
        Change title
      </button>
    </>
  );
};

export default ErrorExample;
