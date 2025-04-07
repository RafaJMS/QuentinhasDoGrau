
import PaginaRefeicao from "../../components/PaginaRefeicao/PaginaRefeicao"
export default function Jantar(){

    const comidas =[ {

        Nome:'Hamburguer Artesanal com Fritas (Acompanha Refri e Molhos)',
        Preco: 36.00,
        QuantidadeMaxima: 20,
        Refeicao: 'Pão com carne artesanal, bacon em tiras, queijo cheddar, alface, tomate e cebola caramelizada. Acompanha fritas, refrigerante e molhos.',
        Imagem: './src/assets/hamburguer.jpg',
    },{
        Nome:'Fatia única de pizza (Sabor a escolher)',
        Preco: 22.00,
        QuantidadeMaxima: 20,
        Refeicao: "Fatia de pizza de 15cm. Sabores: Marguerita, 4 Queijos, Frango com Catupiry, Calabresa, Portuguesa, Pepperoni.",
        Imagem: './src/assets/pizza.jpg',
    },{
        Nome:'Almôndegas ao Sugo',
        Preco: 30.00,
        QuantidadeMaxima: 10,
        Refeicao: "Almôndegas de carne moída ao molho de tomate, acompanhadas por arroz branco e batata palha.",
        Imagem: './src/assets/almondegas.jpg',
    },{
        Nome:'Macarrão com Camarões ao Molho Branco',
        Preco: 37.00,
        QuantidadeMaxima: 10,
        Refeicao: "Macarrão ao molho branco com camarões, temperado com ervas finas e queijo parmesão ralado.",
        Imagem: './src/assets/macarrao.jpg',
    },{
        Nome:'Salmão Grelhado',
        Preco: 40.00,
        QuantidadeMaxima: 5,
        Refeicao: "Salmão grelhado com molho de manteiga e ervas, acompanhado por arroz branco, salada e legumes assados.",
        Imagem: './src/assets/salmao.jpg',
        
    },{    
        Nome:'Risoto de Cogumelos',
        Preco: 38.00,
        QuantidadeMaxima: 8,
        Refeicao: "Risoto de cogumelos frescos, temperado com ervas finas e queijo parmesão ralado.",
        Imagem: './src/assets/risoto.jpg',
    }

]

return <PaginaRefeicao titulo="Jantar" comidas={comidas} />;}