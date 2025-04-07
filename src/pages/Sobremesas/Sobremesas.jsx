import PaginaRefeicao from "../../components/PaginaRefeicao/PaginaRefeicao.jsx";

export default function Sobremesas(){

    const comidas =[ {

        Nome:'Pudim',
        Preco: 11.00,
        QuantidadeMaxima: 20,
        Refeicao: 'O tradicional, simples e delicioso pudim de leite condensado com calda de caramelo.',
        Imagem: './src/assets/pudim.jpg',
    },{
        Nome:'Mousse De Maracuja',
        Preco: 14.00,
        QuantidadeMaxima: 20,
        Refeicao: "Mousse de maracuja coberto com um delicioso creme de chocolate, com raspas de chocolate por cima.",
        Imagem: './src/assets/mousse.jpg',
    },{
        Nome:'Banoffee',
        Preco: 18.00,
        QuantidadeMaxima: 20,
        Refeicao: "Torta de banana com doce de leite e chantilly, coberta por raspas de chocolate",
        Imagem: './src/assets/banoffe.jpg',
    },{
        Nome:'Fatia de Torta de Limão',
        Preco: 16.00,
        QuantidadeMaxima: 20,
        Refeicao: "Torta de limão com massa crocante e recheio cremoso, coberta por merengue e raspas de limão.",
        Imagem: './src/assets/tortadelimao.jpg',
    },{
        Nome:'Petit Gateau',
        Preco: 21.00,
        QuantidadeMaxima: 20,
        Refeicao: "Bolinho quente de chocolate com recheio cremoso, acompanhado por sorvete de creme.",
        Imagem: './src/assets/petitgateau.jpeg',
        
    },{    
        Nome:'Grand Gateau',
        Preco: 34.00,
        QuantidadeMaxima: 3,
        Refeicao: "Picole afundado em um bolinho quente de chocolate com recheio cremoso, acompanhado por sorvete de creme e calda de chocolate. ",
        Imagem: './src/assets/grandgateau.jpg',
    }

]
    
return <PaginaRefeicao titulo="Sobremesas" comidas={comidas} />;}