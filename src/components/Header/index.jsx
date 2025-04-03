import "../Header/index.css"
import { Link } from "react-router-dom"
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { useState } from 'react';

export default function Header(){
  

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
    return(
        
        <div className="header-box">
          <Link id="icon-link" to={'/'}>
           <div className="titleheader-box">
            <img className="title-img" src="https://i.imgur.com/AMFouer.png"></img>
            <span className="title-header">Quentinhas do Grau</span>
           </div>
           </Link>
           <div className="headertype-box">
            <Link id="type-link" to={"/cafe"}><span className="type-header">Café da Manhã</span></Link>
            <Link id="type-link" to={"/almoco"}><span className="type-header">Almoço</span></Link>
            <Link id="type-link" to={"/jantar"}><span className="type-header">Jantar</span></Link>
            <Link id="type-link" to={"/sobremesas"}><span className="type-header">Sobremesas</span></Link>   
            <Link id="type-link" to={"/bebidas"}><span className="type-header">Bebidas</span> </Link>        
           </div> 
           <div className="personal-box">
           <Link id="type-link" onClick={handleShow}>
            <div className="profile-box" >
              <img className="profile-pic" src="./src/assets/cart.svg"></img>
              <span className="profile-header">Carrinho</span>
            </div>
          </Link>
           <Link id="type-link" to={"/login"} >
            <div className="profile-box">
              <img className="profile-pic" src="./src/assets/profile-circle-svgrepo-com.svg"></img>
              <span className="profile-header">Login</span>
            </div>
           </Link>
        </div>
        
      <Offcanvas show={show} onHide={handleClose} placement={'end'} scroll={true} backdrop={false}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Pedido</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          Some text as placeholder. In real life you can have the elements you
          have chosen. Like, text, images, lists, etc.
        </Offcanvas.Body>
      </Offcanvas>
        </div>
    )
}