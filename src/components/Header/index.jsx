import "../Header/index.css";
import { Link } from "react-router-dom";
import Offcanvas from 'react-bootstrap/Offcanvas';
import { useUI } from "../../context/UIContext";
import { useCarrinho } from "../../context/CarrinhoContext";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

import Carrinho from "../Carrinho/Carrinho";
import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';

export default function Header() {
  const { mostrarCarrinho, fecharCarrinho, abrirCarrinho } = useUI()
  const { itensCarrinho } = useCarrinho();

  return (
    <>
    <Navbar expand="lg" className="shadow-sm px-3 header-box" sticky="top" style={{ backgroundColor: '#274029'}}>
      <Container>
        <Navbar.Brand as={Link} to="/" id="icon-link" className="fw-bold d-flex align-items-center titleheader-box">
            <img src="/assets/restaurant-menu-svgrepo-com.svg"
            alt="Logo do Quentinhas Do Grau"
            width="40"
            height="40"
            className="me-2 title-img"
          />
          <span className="title-header">Quentinhas do Grau</span>
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="offcanvasNavbar" as="div">
        <button className="icon-button">
          <img src="\assets\menu.svg" alt="Menu" className="icon-img" />
        </button>
        </Navbar.Toggle>

        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="m-auto">
            <Nav.Link id="type-link" as={Link} to="/cafe">Café</Nav.Link>
            <Nav.Link id="type-link" as={Link} to="/almoco">Almoço</Nav.Link>
            <Nav.Link id="type-link" as={Link} to="/jantar">Jantar</Nav.Link>
            <Nav.Link id="type-link" as={Link} to="/sobremesas">Sobremesas</Nav.Link>
            <Nav.Link id="type-link" as={Link} to="/bebidas">Bebidas</Nav.Link>
          </Nav>
        </Navbar.Collapse>
        <div className="personal-box">
            <Navbar.Brand as={Link} id="type-link" to="/login" className="fw-bold d-flex align-items-center">
            <div className="profile-box">
              <img className="profile-pic" alt='Icone de Login' src="/assets/profile-circle-svgrepo-com.svg"/>
              <span className="profile-header">Login</span>
            </div>
            </Navbar.Brand>
        <Navbar.Brand id="type-link" onClick={abrirCarrinho} className="fw-bold d-flex align-items-center ">
          <div className="profile-box">
              <img className="profile-pic"  alt='Icone de Carrinho' src="/assets/cart2.svg"/>
              <span className="profile-header">Carrinho</span>
          </div>
            </Navbar.Brand>
        </div>
        
      </Container>
    </Navbar>

      

      <Offcanvas
        show={mostrarCarrinho}
        onHide={fecharCarrinho}
        placement={'end'}
        scroll={true}
        backdrop={false}
        id="offcanvas"
      >
        <Carrinho/>
      </Offcanvas>
      </>
  );
}
