import { useEffect, useState } from 'react'
import './indexManha.css'

export default function Cafe(){

    const comidas =[ {

        Nome:'Misto Quente',
        Preco: `R$ ${8}`,
        Refeicao: 'Pão com manteiga, recheado com queijo e peito de peru.',
        Imagem: 'https://t2.uc.ltmcdn.com/pt/posts/4/6/0/como_fazer_um_misto_quente_24064_orig.jpg',
    },{
        Nome:'Escondidinho de Charque',
        Preco: `R$ ${21}`,
        Refeicao: "Escondidinho de Macaxeira com Charque, temperada com ervas.",
        Imagem: 'https://receitinhas.com.br/wp-content/uploads/2023/07/127235746_422063668823565_2982702623690103001_n-730x365.jpg',
    },{
        Nome:'Cuzcuz com Manteiga (Veggie)',
        Preco: `R$ ${14}`,
        Refeicao: "Cuzcuz amanteigado com manteiga de palma.",
        Imagem: 'https://receitastanahora.com.br/wp-content/uploads/2021/07/cuscuz.jpg',
    },{
        Nome:'Cuzcuz Recheado',
        Preco: `R$ ${18}`,
        Refeicao: "Cuzcuz amanteigado recheado com charque, ovos ou frango, a sua escolha.",
        Imagem: 'https://i.ytimg.com/vi/rVy7e4GH08g/maxresdefault.jpg',
    },{
        Nome:'Tapioca Recheada',
        Preco: `R$ ${16}`,
        Refeicao: "Tapioca amanteigada recheada com charque, frango, ovos ou peito de peru, a sua escolha.",
        Imagem: 'https://static.baratocoletivo.com.br/2020/0717/oferta_15950166727609_destaque.jpg',
        
    },{    
        Nome:'Café da Manhã Americano',
        Preco: `R$ ${25}`,
        Refeicao: "Panquecas com manteiga acompanhadas por ovos e bacon em tiras.",
        Imagem: 'https://cdn.deliway.com.br/blog/base/442/b07/715/cafe-da-manha-americano.jpg',
    }

]
    
useEffect(()=>{
        
},[])

return(
    <>
    <div className='comidas-container'>
        <div className='comidas-title'>
            <span id='comidas-title'>Café Da Manhã</span>
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