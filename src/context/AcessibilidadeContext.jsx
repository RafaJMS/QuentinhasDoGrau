// context/AcessibilidadeContext.jsx
import { createContext, useContext, useState } from "react";

const AcessibilidadeContext = createContext();

export const useAcessibilidade = () => useContext(AcessibilidadeContext);

export function AcessibilidadeProvider({ children }) {
  const [tamanhoFonte, setTamanhoFonte] = useState(16);
  const [contrasteAlto, setContrasteAlto] = useState(false);

  const aumentarFonte = () => setTamanhoFonte((prev) => prev + 2);
  const diminuirFonte = () => setTamanhoFonte((prev) => (prev > 12 ? prev - 2 : prev));
  const toggleContraste = () => setContrasteAlto((prev) => !prev);
  const resetar = () => {
    setTamanhoFonte(16);
    setContrasteAlto(false);
  };

  return (
    <AcessibilidadeContext.Provider
      value={{
        tamanhoFonte,
        contrasteAlto,
        aumentarFonte,
        diminuirFonte,
        toggleContraste,
        resetar,
      }}
    >
      {children}
    </AcessibilidadeContext.Provider>
  );
}
