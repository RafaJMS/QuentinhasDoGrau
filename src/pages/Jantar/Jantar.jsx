
import PaginaRefeicao from "../../components/PaginaRefeicao/PaginaRefeicao"
export default function Jantar(){

    const comidas = [
        {
          Nome: 'Hamburguer Artesanal com Fritas (Acompanha Refri e Molhos)',
          Preco: 36.0,
          QuantidadeMaxima: 20,
          Refeicao:
            'Pão com carne artesanal, bacon em tiras, queijo cheddar, alface, tomate e cebola caramelizada. Acompanha fritas, refrigerante e molhos.',
          Imagem: '/assets/hamburguer.jpg',
        },
        {
          Nome: 'Fatia única de pizza (Sabor a escolher)',
          Preco: 22.0,
          QuantidadeMaxima: 20,
          Refeicao:
            'Fatia de pizza de 15cm. Sabores: Marguerita, 4 Queijos, Frango com Catupiry, Calabresa, Portuguesa, Pepperoni.',
          Imagem: '/assets/pizza.jpg',
        },
        {
          Nome: 'Almôndegas ao Sugo',
          Preco: 30.0,
          QuantidadeMaxima: 10,
          Refeicao:
            'Almôndegas de carne moída ao molho de tomate, acompanhadas por arroz branco e batata palha.',
          Imagem: '/assets/almondegas.jpg',
        },
        {
          Nome: 'Macarrão com Camarões ao Molho Branco',
          Preco: 37.0,
          QuantidadeMaxima: 10,
          Refeicao:
            'Macarrão ao molho branco com camarões, temperado com ervas finas e queijo parmesão ralado.',
          Imagem: '/assets/macarrao.jpg',
        },
        {
          Nome: 'Salmão Grelhado',
          Preco: 40.0,
          QuantidadeMaxima: 5,
          Refeicao:
            'Salmão grelhado com molho de manteiga e ervas, acompanhado por arroz branco, salada e legumes assados.',
          Imagem: '/assets/salmao.jpg',
        },
        {
          Nome: 'Risoto de Cogumelos',
          Preco: 38.0,
          QuantidadeMaxima: 8,
          Refeicao:
            'Risoto de cogumelos frescos, temperado com ervas finas e queijo parmesão ralado.',
          Imagem: '/assets/risoto.jpg',
        },
      ];

return <PaginaRefeicao titulo="Jantar" comidas={comidas} />;}