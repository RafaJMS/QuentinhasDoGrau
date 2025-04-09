// src/components/PaginaRefeicao.jsx
import './index.css'
import { useCarrinho } from '../../context/CarrinhoContext'
import { useUI } from '../../context/UIContext';
import { useEffect } from 'react';

export default function PaginaRefeicao({ titulo, comidas }) {
  const { adicionarAoCarrinho } = useCarrinho();
  const { abrirCarrinho } = useUI();
  
  const handleCliqueComida = (comida) => {
    adicionarAoCarrinho(comida);
    abrirCarrinho();
  };

  useEffect(() => {
    const timeout = setTimeout(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' }); // ou 'instant' se preferir direto
    }, 100); // pequeno atraso pra garantir renderização
    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className='comidas-container'>
      <div className='comidas-title'>
        <h1 id='comidas-title'>{titulo}</h1>
      </div>

      <div className='box-comida'>
        {comidas.map((comida, index) => (
          <div className='comida' key={index}  onClick={() => handleCliqueComida(comida)}>
            <div className='comida-imagem-container'>
              <img className='comida-imagem' src={comida.Imagem} alt={`Imagem de um /${comida.Nome}`} />
            </div>
            <div className='comida-descricao'>
              <span className='comida-nome'>{comida.Nome}</span>
              <span className='comida-preco'>R$ {comida.Preco}.00</span>
              <span className='comida-refeicao'>{comida.Refeicao}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
