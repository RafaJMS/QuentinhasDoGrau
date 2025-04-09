// components/BotaoFlutuante.jsx
import './index.css';
import AcessibilidadeMenu from '../AcessibilidadeMenu/AcessibilidadeMenu';
import { useState } from 'react';

export default function BotaoAcessibilidade() {
    const [mostrarMenu, setMostrarMenu] = useState(false);
  
    const toggleMenu = () => {
      setMostrarMenu((prev) => !prev);
    };
  
    return (
      <div className="botao-acessibilidade-container" onClick={toggleMenu}>
        <img className='botao-acessibilidade' alt="Acessibilidade"
          src="/assets/accessibility-outlined-svgrepo-com.svg" />
        {mostrarMenu && <AcessibilidadeMenu />}
      </div>
    );
  }