import { useEffect} from 'react'
import './indexSobremesas.css'

export default function Sobremesas(){

    const comidas =[ {

        Nome:'Pudim',
        Preco: `R$ ${11}`,
        Refeicao: 'O tradicional, simples e delicioso pudim de leite condensado com calda de caramelo.',
        Imagem: './src/assets/pudim.jpg',
    },{
        Nome:'Mousse De Maracuja',
        Preco: `R$ ${14}`,
        Refeicao: "Mousse de maracuja coberto com um delicioso creme de chocolate, com raspas de chocolate por cima.",
        Imagem: './src/assets/mousse.jpg',
    },{
        Nome:'Banoffee',
        Preco: `R$ ${18}`,
        Refeicao: "Torta de banana com doce de leite e chantilly, coberta por raspas de chocolate",
        Imagem: './src/assets/banoffe.jpg',
    },{
        Nome:'Fatia de Torta de Limão',
        Preco: `R$ ${16}`,
        Refeicao: "Torta de limão com massa crocante e recheio cremoso, coberta por merengue e raspas de limão.",
        Imagem: './src/assets/tortadelimao.jpg',
    },{
        Nome:'Petit Gateau',
        Preco: `R$ ${21}`,
        Refeicao: "Bolinho quente de chocolate com recheio cremoso, acompanhado por sorvete de creme.",
        Imagem: './src/assets/petitgateau.jpeg',
        
    },{    
        Nome:'Grand Gateau',
        Preco: `R$ ${34}`,
        Refeicao: "Picole afundado em um bolinho quente de chocolate com recheio cremoso, acompanhado por sorvete de creme e calda de chocolate. ",
        Imagem: './src/assets/grandgateau.jpg',
    }

]

    useEffect(()=>{
        
    },[])
    
    return(
        <>
        <div className='comidas-container'>
            <div className='comidas-title'>
                <span id='comidas-title'>Sobremesas</span>
            </div>

            <div className='box-comida' key={1}>
                {comidas.map((comida)=> (
                    <>
                        <div className='comida' key={1}>
                            <div className='comida-imagem-container'>
                                <img className='comida-imagem' src={comida.Imagem} alt={comida.Nome} />
                            </div>
                            <div className='comida-descricao'>
                                <span className='comida-nome'>{comida.Nome}</span>
                                <span className='comida-preco'>{comida.Preco}</span>
                                <span className='comida-refeicao'>{comida.Refeicao}</span>
                            </div>
                        </div>
                </>
                )
            )}
        </div>
            </div>
        </>   
    )
}