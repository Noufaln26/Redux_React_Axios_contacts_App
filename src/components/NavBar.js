import React from "react";
import Navbar from "react-bootstrap/Navbar";

import { Container } from "react-bootstrap";

function NavBar() {
  return (
    <Navbar className="bg-success shadow fixed-top">
      <Container>
        <Navbar.Brand href="#home" className="text-white">My Contacts</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Brand>
            <a
              href="#add"
              className="btn btn-default bg-white
             text-dark"
            >
              Add Contact
            </a>
          </Navbar.Brand>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
