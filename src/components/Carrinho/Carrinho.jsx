import React from 'react';
import Button from 'react-bootstrap/Button';
import { useCarrinho } from '../../context/CarrinhoContext';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { useEffect } from 'react';
import './index.css';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { useUI } from '../../context/UIContext';

export default function Carrinho() {
  const {
    itensCarrinho,
    removerDoCarrinho,
    limparCarrinho,
    atualizarQuantidade,
    valorTotal,
  } = useCarrinho();

  const { mostrarCarrinho, fecharCarrinho, abrirCarrinho } = useUI()
  const location = useLocation();

  useEffect(() => {
  fecharCarrinho; // sua função para esconder o Offcanvas
  }, [location]);

  return (
    <>
      <Offcanvas.Header closeButton>
        <Offcanvas.Title>Pedido</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body id="offcanvas-body" style={{ display: 'flex', flexDirection: 'column', justifyContent: itensCarrinho.length === 0 ? 'center' : 'flex-start' }}>
        {itensCarrinho.length === 0 ?
        (
          <strong style={{fontSize:"1.15em"}}>Seu carrinho está vazio</strong>
        ) : (
          <ul className="cart-list">
            {itensCarrinho.map((item, index) => (
              <li key={index} className="cart-item" style={{ marginBottom: '1rem' }}>
                <div className='cart-content'>
                  <img
                    src={item.Imagem}
                    alt={item.Nome}
                    className="cart-img"
                    style={{ width: 120 }}
                  />
                  <div className="cart-info">
                    <strong>{item.Nome}</strong>
                    <br />
                    <small>R$ {item.Preco * item.quantidade}.00</small>
                    <div className="quantity-controls" >
                    <div className='controls'>
                      <div className='quantity'>
                      <Button
                        size="sm" variant="outline-secondary" onClick={() => atualizarQuantidade(item.Nome, item.quantidade - 1) }
                        disabled={item.quantidade < 1}
                        style={{ marginRight: '0.5rem' }}>
                        −
                      </Button>
                      <span>{item.quantidade}</span>
                      <Button size="sm" variant="outline-secondary" onClick={() => atualizarQuantidade(item.Nome, item.quantidade + 1) }
                        disabled={item.quantidade >= item.QuantidadeMaxima}
                        style={{ marginLeft: '0.5rem' }}>
                        +
                      </Button>
                      </div>
                      <small style={{color:"grey"}}> Max: {item.QuantidadeMaxima}</small>
                      </div>
                      <Button variant="outline-danger" className='botao-hover' size="sm" onClick={() => removerDoCarrinho(item.Nome)} >
                      <div id='trash-img'  onClick={() => removerDoCarrinho(item.Nome)} >
                      </div>
                      </Button>
                  
                    </div>
                  </div>
                </div>
                <div id='remove-div' style={{textAlign: 'center' }}>
                
                </div>
              </li>
            ))}
          </ul>
        )}
        
        {itensCarrinho.length > 0 && (
          <>
          <span style={{borderTop: "1px solid #DADDD8", width:"100%", padding:"0.5rem", display:"block" , fontWeight:"700"}}>Valor Total : R$ {valorTotal}.00 </span>
          <div className="buttons" style={{ marginTop:`1rem`, display: 'flex', justifyContent: 'space-between' }}>
            <Button variant="secondary" id='' 
              onClick={() => {
              limparCarrinho();
              }}> Limpar Carrinho </Button>
            <Link to={"/payment"}><Button onClick={fecharCarrinho} id='payment-button'>Confirmar Pagamento </Button></Link>
        </div>
        </>
        )}
      </Offcanvas.Body>
    </>
  );
  
}
