// src/components/PaginaRefeicao.jsx
import './index.css'
import { useCarrinho } from '../../context/CarrinhoContext'
import { useUI } from '../../context/UIContext';

export default function PaginaRefeicao({ titulo, comidas }) {
  const { adicionarAoCarrinho } = useCarrinho();
  const { abrirCarrinho } = useUI();
  const handleCliqueComida = (comida) => {
    adicionarAoCarrinho(comida);
    abrirCarrinho(); // isso faz abrir o carrinho
  };

  return (
    <div className='comidas-container'>
      <div className='comidas-title'>
        <span id='comidas-title'>{titulo}</span>
      </div>

      <div className='box-comida'>
        {comidas.map((comida, index) => (
          <div className='comida' key={index}  onClick={() => handleCliqueComida(comida)}>
            <div className='comida-imagem-container'>
              <img className='comida-imagem' src={comida.Imagem} alt={comida.Nome} />
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
