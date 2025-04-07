import "../Header/index.css";
import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { useUI } from "../../context/UIContext";
import { useCarrinho } from "../../context/CarrinhoContext";
import Carrinho from "../Carrinho/Carrinho";

export default function Header() {
  const { mostrarCarrinho, fecharCarrinho, abrirCarrinho } = useUI(); // <- usa os 3
  const { itensCarrinho } = useCarrinho();

  return (
    <div className="header-box">
      <Link id="icon-link" to={'/'}>
        <div className="titleheader-box">
          <img className="title-img" src="./src/assets/restaurant-menu-svgrepo-com.svg" />
          <span className="title-header">Quentinhas do Grau</span>
        </div>
      </Link>

      <div className="headertype-box">
        <Link id="type-link" to={"/cafe"}><span className="type-header">Café da Manhã</span></Link>
        <Link id="type-link" to={"/almoco"}><span className="type-header">Almoço</span></Link>
        <Link id="type-link" to={"/jantar"}><span className="type-header">Jantar</span></Link>
        <Link id="type-link" to={"/sobremesas"}><span className="type-header">Sobremesas</span></Link>
        <Link id="type-link" to={"/bebidas"}><span className="type-header">Bebidas</span></Link>
      </div>

      <div className="personal-box">
        <div id="type-link" onClick={abrirCarrinho}> {/* <- usa a função do contexto */}
          <div className="profile-box">
            <img className="profile-pic" src="./src/assets/cart2.svg" />
            <span className="profile-header">Carrinho</span>
          </div>
        </div>
        
        <Link id="type-link" to={"/login"}>
          <div className="profile-box">
            <img className="profile-pic" src="./src/assets/profile-circle-svgrepo-com.svg" />
            <span className="profile-header">Login</span>
          </div>
        </Link>
      </div>

      <Offcanvas
        show={mostrarCarrinho}
        onHide={fecharCarrinho}
        placement={'end'}
        scroll={true}
        backdrop={false}
        id="offcanvas"
      >
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Pedido</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Carrinho />
        </Offcanvas.Body>
      </Offcanvas>
    </div>
  );
}
