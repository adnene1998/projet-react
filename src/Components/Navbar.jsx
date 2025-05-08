// src/Components/Navbar.jsx
import React, { useContext } from 'react'
import { Navbar, Nav, Container, Badge } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { CartContext } from '../context/CartContext'

const NavigationBar = () => {
  const { cartItems } = useContext(CartContext)

  return (
    <Navbar style={{ backgroundColor: '#ff9800' }} variant="dark" expand="lg">
      <Container>
        <Navbar.Brand as={Link} to="/" className="fw-bold text-uppercase text-dark">
          🛒 E-Commerce 
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" className="border-0" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto align-items-center">
            <Nav.Link as={Link} to="/" className="text-dark">Accueil</Nav.Link>
            <Nav.Link as={Link} to="/signin" className="text-dark">Se connecter</Nav.Link>
            <Nav.Link as={Link} to="/signup" className="text-dark">S'inscrire</Nav.Link>
            <Nav.Link as={Link} to="/cart" className="text-dark">
              Panier <Badge bg="success" className="ms-1">{cartItems.length}</Badge>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default NavigationBar
