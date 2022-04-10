import React from "react";
import Navbar from "react-bootstrap/Navbar";

import { Container } from "react-bootstrap";
import { Link} from "react-router-dom";

function NavBar() {
  return (
    <Navbar className="bg-success shadow fixed-top">
      <Container>
        <Link to="/">
        <Navbar.Brand  className="text-white">My Contacts</Navbar.Brand> </Link>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Brand>
            <Link
              to="/addContact"
              className="btn btn-default bg-white
             text-dark"
            >
              Add Contact
            </Link>
          </Navbar.Brand>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
