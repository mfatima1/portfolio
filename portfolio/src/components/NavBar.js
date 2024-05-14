import React from 'react'
import { Navbar, Container, Nav} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './NavBar.css';
const gradientStyle = {
    background: 'linear-gradient(to right, #87C4FF, #9B83DF, #B554B1)'
  };

export const NavBar = () => {
    return (
        <div>
          <Navbar bg="dark" data-bs-theme="dark">
            <Container>
              <Navbar.Brand className="logo" href="#home" >Maliha Fatima</Navbar.Brand>
              <Nav className="navbar-nav">
                <Nav.Link href="#home"  >About</Nav.Link>
                <Nav.Link href="#features" >Education</Nav.Link>
                <Nav.Link href="#pricing"  >Projects</Nav.Link>
              </Nav>
            </Container>
          </Navbar>
          <br />     
        </div>
      );
    
}

export default NavBar;