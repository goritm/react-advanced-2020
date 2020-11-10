import React, { useState, useEffect } from "react";
import { data } from "../../../data";
import { Link, useParams } from "react-router-dom";

const Person = () => {
  const [name, setName] = useState("");
  const { id } = useParams();

  useEffect(() => {
    const { name } = data.find((person) => person.id === parseInt(id));
    setName(name);
  }, [id]);

  return (
    <div>
      <h1>Hello {name}!</h1>
      <Link to="/people" className="btn">
        go back
      </Link>
    </div>
  );
};

export default Person;
