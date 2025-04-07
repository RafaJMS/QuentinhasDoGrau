// components/AcessibilidadeMenu.jsx
import { useAcessibilidade } from "../../context/AcessibilidadeContext";
import { Button } from "react-bootstrap";
import "./index.css";

export default function AcessibilidadeMenu() {
  const {
    aumentarFonte,
    diminuirFonte,
    toggleContraste,
    resetar,
  } = useAcessibilidade();

  return (
    <div className="menu-acessibilidade">
      <Button onClick={aumentarFonte}>A+</Button>
      <Button onClick={diminuirFonte}>A-</Button>
      <Button onClick={toggleContraste}>Alto Contraste</Button>
      <Button onClick={resetar}>Resetar</Button>
    </div>
  );
}
