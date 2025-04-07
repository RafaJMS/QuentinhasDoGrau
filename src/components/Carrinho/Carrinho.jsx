import React from 'react';
import Button from 'react-bootstrap/Button';
import { useCarrinho } from '../../context/CarrinhoContext';
import './index.css';

export default function Carrinho() {
  const {
    itensCarrinho,
    removerDoCarrinho,
    limparCarrinho,
    atualizarQuantidade
  } = useCarrinho();

  return (
    <>
      {itensCarrinho.length === 0 ? (
        <p>Seu carrinho está vazio</p>
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
                  <small>R$ {item.Preco * item.quantidade}</small>
                  <div className="quantity-controls" style={{ marginTop: '0.5rem' }}>
                    <Button
                      size="sm"
                      variant="outline-secondary"
                      onClick={() =>
                        atualizarQuantidade(item.Nome, item.quantidade - 1)
                      }
                      disabled={item.quantidade <= 1}
                      style={{ marginRight: '0.5rem' }}
                    >
                      −
                    </Button>
                    <span>{item.quantidade}</span>
                    <Button
                      size="sm"
                      variant="outline-secondary"
                      onClick={() =>
                        atualizarQuantidade(item.Nome, item.quantidade + 1)
                      }
                      disabled={item.quantidade >= item.QuantidadeMaxima}
                      style={{ marginLeft: '0.5rem' }}
                    >
                      +
                    </Button>
                  </div>
                </div>
              </div>
              <Button
                variant="outline-danger"
                size="sm"
                onClick={() => removerDoCarrinho(item.Nome)}
                style={{ marginTop: '0.5rem' }}
              >
                Remover
              </Button>
            </li>
          ))}
        </ul>
      )}
      <div className="buttons" style={{ marginTop:`1rem`, display: 'flex', justifyContent: 'space-between' }}>
      {itensCarrinho.length > 0 && (
        <Button
          variant="outline-secondary"
          onClick={limparCarrinho}
        >
          Limpar Carrinho
        </Button>
      )}
       <Button
          variant="primary"
        >
          Confirmar Pagamento
        </Button>
      </div>
    </>
  );
}
