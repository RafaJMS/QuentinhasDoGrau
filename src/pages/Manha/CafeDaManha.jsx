import PaginaRefeicao from "../../components/PaginaRefeicao/PaginaRefeicao"

export default function Cafe(){

    const comidas =[ {

        Nome:'Misto Quente',
        Preco: 8.00,
        QuantidadeMaxima: 50,
        Refeicao: 'Pão com manteiga, recheado com queijo e peito de peru.',
        Imagem: 'https://t2.uc.ltmcdn.com/pt/posts/4/6/0/como_fazer_um_misto_quente_24064_orig.jpg',
    },{
        Nome:'Escondidinho de Charque',
        Preco: 21.00,
        QuantidadeMaxima: 31,
        Refeicao: "Escondidinho de Macaxeira com Charque, temperada com ervas.",
        Imagem: 'https://receitinhas.com.br/wp-content/uploads/2023/07/127235746_422063668823565_2982702623690103001_n-730x365.jpg',
    },{
        Nome:'Cuzcuz com Manteiga (Veggie)',
        Preco: 14.00,
        QuantidadeMaxima: 20,
        Refeicao: "Cuzcuz amanteigado com manteiga de palma.",
        Imagem: 'https://receitastanahora.com.br/wp-content/uploads/2021/07/cuscuz.jpg',
    },{
        Nome:'Cuzcuz Recheado',
        Preco: 18.00,
        QuantidadeMaxima: 20,
        Refeicao: "Cuzcuz amanteigado recheado com charque, ovos ou frango, a sua escolha.",
        Imagem: 'https://i.ytimg.com/vi/rVy7e4GH08g/maxresdefault.jpg',
    },{
        Nome:'Tapioca Recheada',
        Preco: 20.00,
        QuantidadeMaxima: 20,
        Refeicao: "Tapioca amanteigada recheada com charque, frango, ovos ou peito de peru, a sua escolha.",
        Imagem: 'https://static.baratocoletivo.com.br/2020/0717/oferta_15950166727609_destaque.jpg',
        
    },{    
        Nome:'Café da Manhã Americano',
        Preco: 25.00,
        QuantidadeMaxima: 20,
        Refeicao: "Panquecas com manteiga acompanhadas por ovos e bacon em tiras.",
        Imagem: 'https://cdn.deliway.com.br/blog/base/442/b07/715/cafe-da-manha-americano.jpg',
    }

]

return <PaginaRefeicao titulo="Café da Manhã" comidas={comidas} />;}