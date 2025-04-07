import PaginaRefeicao from "../../components/PaginaRefeicao/PaginaRefeicao";

export default function Almoco(){

    const comidas =[ {

        Nome:'Frango a Parmegiana',
        Refeicao: 'Frango a parmegiana com molho de tomate e queijo gratinado, acompanhado de arroz e batata frita.\n Tamanhos: P, M, G.',
        Imagem: './src/assets/parmegiana.jpeg',
        QuantidadeMaxima: 12,
        quantidade : 0,
        Preco: 49.00
    },{
        Nome:'Carne do Sol com Fritas',
        Refeicao: "Carne do Sol acompanhado com Batata ou Polenta Frita. Serve até 2 pessoas",
        Imagem: './src/assets/carnedosol.jpg',
        QuantidadeMaxima: 7,
        quantidade : 0,
        Preco: 30.00
    },{
        Nome:'Carbonara',
        Refeicao: "Macarrão feito ao molho branco, bacon e queijo parmesão. Serve 1 pessoa",
        Imagem: './src/assets/carbonara.jpg',
        QuantidadeMaxima: 9,
        quantidade : 0,
        Preco: 38.00
    },{
        Nome:'Ratatouille',
        Refeicao: "Ratatouille feito com berinjela, abobrinha, pimentão, tomate e cebola. Serve 1 ou 2 pessoas",
        Imagem: './src/assets/ratattoile.jpg',
        QuantidadeMaxima: 10,
        quantidade : 0,
        Preco: 42.00
    },{
        Nome:'Feijoada',
        Refeicao: "Feijoada completa com arroz, couve, farofa, laranja e torresmo. Tamanhos: P, M, G.",
        Imagem: './src/assets/feijoada.jpg',
        QuantidadeMaxima: 4,
        quantidade : 0,
        Preco: 43.00
    },{    
        Nome:'Strogonoff de Frango',
        Refeicao: "Strogonoff de frango com arroz e batata palha. Serve 2 pessoas",
        Imagem: './src/assets/strogonoff.jpg',
        QuantidadeMaxima: 6,
        quantidade : 0,
        Preco: 34.00
    }

]

return <PaginaRefeicao titulo="Almoço" comidas={comidas} />;}