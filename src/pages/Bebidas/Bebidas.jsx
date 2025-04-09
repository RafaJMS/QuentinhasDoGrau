import PaginaRefeicao from "../../components/PaginaRefeicao/PaginaRefeicao";

export default function Bebidas() {
  const comidas = [
    {
      Nome: 'Drinks (Verificar Disponibilidade)',
      Preco: 21,
      QuantidadeMaxima: 15,
      Refeicao:
        'Drinks variados, com ou sem álcool, a sua escolha. Por exemplo: Sex on the Beach, Lagoa Azul, Coquetéis, etc.',
      Imagem: '/assets/drinks.jpg',
    },
    {
      Nome: 'Refrigerantes (Verificar Disponibilidade)',
      Preco: 13,
      QuantidadeMaxima: 20,
      Refeicao:
        'Copo de 750ml com refrigerantes diversos a sua escolha, como Coca-Cola, Guaraná, Sprite, Fanta, etc.',
      Imagem: '/assets/refri.jpg',
    },
    {
      Nome: 'Café com ou sem Leite',
      Preco: 7,
      QuantidadeMaxima: 50,
      Refeicao: 'Café puro ou com leite, a sua escolha.',
      Imagem: '/assets/cafe.jpg',
    },
    {
      Nome: 'Água sem / com gás',
      Preco: 5,
      QuantidadeMaxima: 50,
      Refeicao: 'Água mineral com ou sem gás, a sua escolha.',
      Imagem: '/assets/agua.jpg',
    },
    {
      Nome: 'Sucos (Verificar Disponibilidade)',
      Preco: 13,
      QuantidadeMaxima: 20,
      Refeicao:
        'Copo de 750ml com suco natural de frutas a sua escolha, como laranja, limão, abacaxi, maracujá, etc.',
      Imagem: '/assets/suco.jpeg',
    },
    {
      Nome: 'Água de Coco',
      Preco: 15,
      QuantidadeMaxima: 13,
      Refeicao: 'Copo de 750ml com água de coco natural, direto do coco verde.',
      Imagem: '/assets/aguadecoco.jpg',
    },
  ];

  return <PaginaRefeicao titulo="Bebidas" comidas={comidas} />;
}
