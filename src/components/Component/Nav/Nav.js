import React from "react";
import { Navbar, NavLink } from "react-bootstrap";

const Nav = (props) => {
  const { name, price } = props.product;
  return (
    <div>
      <Navbar expand="lg" variant="light" bg="light">
        <NavLink href="#action1">Home</NavLink>
      </Navbar>
    </div>
  );
};

export default Nav;
