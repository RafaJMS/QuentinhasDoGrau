import { useEffect} from 'react'
import './indexSobremesas.css'

export default function Sobremesas(){

    const comidas =[ {

        Nome:'Pudim',
        Preco: `R$ ${11}`,
        Refeicao: 'O tradicional, simples e delicioso pudim de leite condensado com calda de caramelo.',
        Imagem: 'https://www.aperitifalafrancaise.com.br/wp-content/uploads/2023/06/Receita-de-Pudim-de-Leite-Condensado.webp',
    },{
        Nome:'Mousse De Maracuja',
        Preco: `R$ ${14}`,
        Refeicao: "Mousse de maracuja coberto com um delicioso creme de chocolate, com raspas de chocolate por cima.",
        Imagem: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiNq8lvXdMOlyBH_ndf43St52PNCOiYkS1NYB1jVWjMfHAYijIwqRpEslXeo_68hSArNQZL4Gf5X3pes6I74-oRPyJ9o4buITRgoJOJ-EG6i3yYhuwCG2LR3-RGjIK8uTRJiW-ZcOQ8c9o8PfKGUGa8NC6fZP0p36_ZVuBw_ql8HVwXGDYkRaAYJKn9Hg/s4480/mousse-de-maracuja-com-chocolate-1.webp',
    },{
        Nome:'Banoffee',
        Preco: `R$ ${18}`,
        Refeicao: "Torta de banana com doce de leite e chantilly, coberta por raspas de chocolate",
        Imagem: 'https://marcasmais.com.br/wp-content/uploads/2023/04/Torta-Banoffee-1-1024x742.jpg',
    },{
        Nome:'Fatia de Torta de Limão',
        Preco: `R$ ${16}`,
        Refeicao: "Torta de limão com massa crocante e recheio cremoso, coberta por merengue e raspas de limão.",
        Imagem: 'https://guiadacozinha.com.br/wp-content/uploads/2019/10/torta-de-limao-com-merengue-33070.jpg',
    },{
        Nome:'Petit Gateau',
        Preco: `R$ ${21}`,
        Refeicao: "Bolinho quente de chocolate com recheio cremoso, acompanhado por sorvete de creme.",
        Imagem: 'https://img.cybercook.com.br/receitas/434/petit-gateau.jpeg',
        
    },{    
        Nome:'Grand Gateau',
        Preco: `R$ ${34}`,
        Refeicao: "Picole afundado em um bolinho quente de chocolate com recheio cremoso, acompanhado por sorvete de creme e calda de chocolate. ",
        Imagem: 'https://uploads.metropoles.com/wp-content/uploads/2019/10/25171251/Grand-Gateau-Nikkei-Davi-Fernandes-1.jpg',
    }

]

    useEffect(()=>{
        
    },[])
    
        return(
            <>

            <div className='sobremesas-title'>
                <span id='doces-title'>Sobremesas</span>
            </div>

            <div className='box-comida' key={1}>
                {comidas.map((comida)=> (
                    <>
                    <div className='comida' key={1}>
                     <img className='comida-imagem' src={comida.Imagem}></img>
                     <span className='comida-nome'>{comida.Nome}</span>
                     <span className='comida-preco'>{comida.Preco}</span>
                     <span className='comida-refeicao'>{comida.Refeicao}</span>
                 </div>
                     
                 </>

                )
            )}
            </div>
            </>   
            
            
        )

    

}