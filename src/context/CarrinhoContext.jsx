import React, { createContext, useContext, useState } from 'react';

// Criando o contexto
const CarrinhoContext = createContext();

// Hook para facilitar o uso do contexto
export const useCarrinho = () => useContext(CarrinhoContext);

// Componente provedor
export const CarrinhoProvider = ({ children }) => {
  const [itensCarrinho, setCarrinho] = useState([]);

  const adicionarAoCarrinho = (item) => {
    setCarrinho((carrinhoAtual) => {
      const itemExistente = carrinhoAtual.find((itemDoCarrinho) => itemDoCarrinho.Nome === item.Nome);
        
      if (itemExistente) {
        if (itemExistente.quantidade < item.QuantidadeMaxima) {
          return carrinhoAtual.map((itemDoCarrinho) =>
            itemDoCarrinho.Nome === item.Nome
              ? { ...itemDoCarrinho, quantidade: itemDoCarrinho.quantidade + 1 }
              : itemDoCarrinho
          );
        } else {
          return carrinhoAtual;
        }
      } else {
        return [...carrinhoAtual, { ...item, quantidade: 1 }];
      }
    });
  };

  const removerDoCarrinho = (nome) => {
    setCarrinho((carrinhoAtual) =>
      carrinhoAtual.filter((item) => item.Nome !== nome)
    );
  };

  const limparCarrinho = () => {
    setCarrinho([]);
  };

  const atualizarQuantidade = (nome, novaQuantidade) => {
    setCarrinho((carrinhoAtual) => {
      if (novaQuantidade <= 0) {
        return carrinhoAtual.filter((item) => item.Nome !== nome);
      }
      
      return carrinhoAtual.map((item) =>
        item.Nome === nome
          ? {
              ...item,
              quantidade:
                novaQuantidade <= item.QuantidadeMaxima
                  ? novaQuantidade
                  : item.QuantidadeMaxima,
            }
          : item
      );
    });
  };

  const valorTotal = itensCarrinho.reduce((total, item) => {
    return total + item.Preco.toFixed(2) * item.quantidade;
  }, 0);

  return (
    <CarrinhoContext.Provider
      value={{
        itensCarrinho,
        adicionarAoCarrinho,
        removerDoCarrinho,
        limparCarrinho,
        atualizarQuantidade,
        valorTotal,
      }}
    >
      {children}
    </CarrinhoContext.Provider>
  );
};
