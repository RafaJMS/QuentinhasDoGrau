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
      const itemExistente = carrinhoAtual.find((c) => c.Nome === item.Nome);
        console.log(itemExistente)
      console.log(carrinhoAtual)
      if (itemExistente) {
        // Se já tiver no carrinho e ainda não atingiu o limite
        if (itemExistente.quantidade < item.QuantidadeMaxima) {
          return carrinhoAtual.map((c) =>
            c.Nome === item.Nome
              ? { ...c, quantidade: c.quantidade + 1 }
              : c
          );
        } else {
          return carrinhoAtual; // Já no máximo
        }
      } else {
        // Novo item no carrinho
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
    setCarrinho((carrinhoAtual) =>
      carrinhoAtual.map((item) =>
        item.Nome === nome
          ? {
              ...item,
              quantidade:
                novaQuantidade <= item.QuantidadeMaxima
                  ? novaQuantidade
                  : item.QuantidadeMaxima,
            }
          : item
      )
    );
  };

  return (
    <CarrinhoContext.Provider
      value={{
        itensCarrinho,
        adicionarAoCarrinho,
        removerDoCarrinho,
        limparCarrinho,
        atualizarQuantidade,
      }}
    >
      {children}
    </CarrinhoContext.Provider>
  );
};
