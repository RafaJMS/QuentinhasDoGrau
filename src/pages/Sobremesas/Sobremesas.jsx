import PaginaRefeicao from "../../components/PaginaRefeicao/PaginaRefeicao.jsx";

export default function Sobremesas() {
  const comidas = [
    {
      Nome: 'Pudim',
      Preco: 11.0,
      QuantidadeMaxima: 20,
      Refeicao:
        'O tradicional, simples e delicioso pudim de leite condensado com calda de caramelo.',
      Imagem: '/assets/pudim.jpg',
    },
    {
      Nome: 'Mousse De Maracujá',
      Preco: 14.0,
      QuantidadeMaxima: 20,
      Refeicao:
        'Mousse de maracujá coberto com um delicioso creme de chocolate, com raspas de chocolate por cima.',
      Imagem: '/assets/mousse.jpg',
    },
    {
      Nome: 'Banoffee',
      Preco: 18.0,
      QuantidadeMaxima: 20,
      Refeicao:
        'Torta de banana com doce de leite e chantilly, coberta por raspas de chocolate.',
      Imagem: '/assets/banoffe.jpg',
    },
    {
      Nome: 'Fatia de Torta de Limão',
      Preco: 16.0,
      QuantidadeMaxima: 20,
      Refeicao:
        'Torta de limão com massa crocante e recheio cremoso, coberta por merengue e raspas de limão.',
      Imagem: '/assets/tortadelimao.jpg',
    },
    {
      Nome: 'Petit Gateau',
      Preco: 21.0,
      QuantidadeMaxima: 20,
      Refeicao:
        'Bolinho quente de chocolate com recheio cremoso, acompanhado por sorvete de creme.',
      Imagem: '/assets/petitgateau.jpeg',
    },
    {
      Nome: 'Grand Gateau',
      Preco: 34.0,
      QuantidadeMaxima: 3,
      Refeicao:
        'Picolé afundado em um bolinho quente de chocolate com recheio cremoso, acompanhado por sorvete de creme e calda de chocolate.',
      Imagem: '/assets/grandgateau.jpg',
    },
  ];

  return <PaginaRefeicao titulo="Sobremesas" comidas={comidas} />;
}
