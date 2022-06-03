import React from "react";
import { CardGroup } from "react-bootstrap";
import Card2 from "../Card2/Card2";

const CardGroup2 = () => {
  const products = [
    { id: 1, name: "lioo" },
    { id: 2, name: "opjjn" },
    { id: 3, name: "tyyoo" },
  ];
  return (
    <div>
      <h2>This is card grop</h2>
      <CardGroup>
        {products.map((product) => (
          <Card2 key={product.id} product={product}></Card2>
        ))}
      </CardGroup>
    </div>
  );
};

export default CardGroup2;
