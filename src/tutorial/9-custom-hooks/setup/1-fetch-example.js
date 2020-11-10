import React from "react";
import { useFetch } from "./2-useFetch";

const url = "https://course-api.netlify.app/api/javascript-store-products";

const Example = () => {
  const { data, loading } = useFetch(url);

  console.log(data);

  return (
    <div>
      <h2>{loading ? "loading..." : "data"}</h2>
      <ul>
        {data.map((object) => {
          const {
            id,
            fields: {
              company,
              featured,
              price,
              name,
              image: [{ url }],
            },
          } = object;
          return (
            <li key={id}>
              <img src={url} alt={name} />
              <p>This is the company: {company}</p>
              <p>This is the featured: {featured}</p>
              <p>This is the price: ${price}</p>
              <p>This is the name: {name}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Example;
