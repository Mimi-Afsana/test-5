import React from "react";
import { Container } from "react-bootstrap";
import Nav from "../Nav/Nav";

const Navbar = () => {
  const products = [
    { id: 1, name: "lioo", link: "/lioo" },
    { id: 2, name: "opjjn", link: "/opjjn" },
    { id: 3, name: "tyyoo", link: "/tyyoo" },
  ];

  return (
    <div>
      <Container>
        {products.map((product) => (
          <Nav key={product.id} product={product}></Nav>
        ))}
      </Container>
    </div>
  );
};

export default Navbar;
