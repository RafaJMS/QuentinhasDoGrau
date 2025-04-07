import { createContext, useContext, useState } from 'react';

const UIContext = createContext();

export const useUI = () => useContext(UIContext);

export const UIProvider = ({ children }) => {
  const [mostrarCarrinho, setMostrarCarrinho] = useState(false);

  const abrirCarrinho = () => setMostrarCarrinho(true);
  const fecharCarrinho = () => setMostrarCarrinho(false);

  return (
    <UIContext.Provider value={{ mostrarCarrinho, abrirCarrinho, fecharCarrinho }}>
      {children}
    </UIContext.Provider>
  );
};
