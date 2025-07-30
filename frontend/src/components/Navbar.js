// src/components/Navbar.js
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Container } from 'react-bootstrap';
import { FaRobot } from 'react-icons/fa';

const NavBar = () => {
  return (
    <Navbar bg="primary" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand href="/">
          <FaRobot style={{ marginRight: "8px" }} />
          Ask AI - OpenRouter
        </Navbar.Brand>
      </Container>
    </Navbar>
  );
};

export default NavBar;
