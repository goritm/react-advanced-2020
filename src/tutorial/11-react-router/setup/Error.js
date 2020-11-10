import React from "react";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div>
      <h1>You seem a little lost</h1>
      <Link to="/" className="btn">
        Go to Home Page (:
      </Link>
    </div>
  );
};

export default Error;
