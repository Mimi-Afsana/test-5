import React from "react";
import Card from "./Card/Card";

const CardGroup = () => {
  const products = [
    {
      id: 1,
      name: "lolo",
      price: 2000,
    },
    {
      id: 2,
      name: "tuku",
      price: 2000,
    },
    {
      id: 3,
      name: "buku",
      price: 2000,
    },
  ];
  return (
    <div>
      <h2>this is my card</h2>
      <div className="card-group">
        {products.map((product) => (
          <Card key={product.id} product={product}></Card>
        ))}
      </div>
    </div>
  );
};

export default CardGroup;
