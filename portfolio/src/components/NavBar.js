import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { Link } from 'react-scroll';
import 'bootstrap/dist/css/bootstrap.min.css';
import './NavBar.css';

const gradientStyle = {
  background: 'linear-gradient(to right, #87C4FF, #9B83DF, #B554B1)'
};

export const NavBar = () => {
  return (
    <div>
      <Navbar bg="black" data-bs-theme="dark">
        <Container>
          <Navbar.Brand className="logo" href="#home">Maliha Fatima</Navbar.Brand>
          <Nav className="navbar-nav">
            <Nav.Link as={Link} to="About" spy={true} smooth={true} offset={-30} duration={200}>
              About
            </Nav.Link>
            <Nav.Link as={Link} to="Projects" spy={true} smooth={true} offset={-70} duration={500}>
              Projects
            </Nav.Link>
            <Nav.Link as={Link} to="Experience" spy={true} smooth={true} offset={-70} duration={500}>
              Experience
            </Nav.Link>
            <Nav.Link as={Link} to="Contact" spy={true} smooth={true} offset={-70} duration={500}>
              Contact
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
}

export default NavBar;
