import PaginaRefeicao from "../../components/PaginaRefeicao/PaginaRefeicao";

export default function Almoco() {
  const comidas = [
    {
      Nome: 'Frango a Parmegiana',
      Refeicao:
        'Frango a parmegiana com molho de tomate e queijo gratinado, acompanhado de arroz e batata frita.\n Tamanhos: P, M, G.',
      Imagem: '/assets/parmegiana.jpeg',
      QuantidadeMaxima: 12,
      quantidade: 0,
      Preco: 49.0,
    },
    {
      Nome: 'Carne do Sol com Fritas',
      Refeicao:
        'Carne do Sol acompanhado com Batata ou Polenta Frita. Serve até 2 pessoas',
      Imagem: '/assets/carnedosol.jpg',
      QuantidadeMaxima: 7,
      quantidade: 0,
      Preco: 30.0,
    },
    {
      Nome: 'Carbonara',
      Refeicao:
        'Macarrão feito ao molho branco, bacon e queijo parmesão. Serve 1 pessoa',
      Imagem: '/assets/carbonara.jpg',
      QuantidadeMaxima: 9,
      quantidade: 0,
      Preco: 38.0,
    },
    {
      Nome: 'Ratatouille',
      Refeicao:
        'Ratatouille feito com berinjela, abobrinha, pimentão, tomate e cebola. Serve 1 ou 2 pessoas',
      Imagem: '/assets/ratattoile.jpg',
      QuantidadeMaxima: 10,
      quantidade: 0,
      Preco: 42.0,
    },
    {
      Nome: 'Feijoada',
      Refeicao:
        'Feijoada completa com arroz, couve, farofa, laranja e torresmo. Tamanhos: P, M, G.',
      Imagem: '/assets/feijoada.jpg',
      QuantidadeMaxima: 4,
      quantidade: 0,
      Preco: 43.0,
    },
    {
      Nome: 'Strogonoff de Frango',
      Refeicao: 'Strogonoff de frango com arroz e batata palha. Serve 2 pessoas',
      Imagem: '/assets/strogonoff.jpg',
      QuantidadeMaxima: 6,
      quantidade: 0,
      Preco: 34.0,
    },
  ];

  return <PaginaRefeicao titulo="Almoço" comidas={comidas} />;
}
