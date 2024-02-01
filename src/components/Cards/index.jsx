import { useEffect, useState } from 'react'
import './index.css'

export default function Cards(){

    const comidas =[ {

        Nome:'Batata Palha',
        Preco: `R$${6}`,
        Descricao: 'Comida gostosa',
        Refeicao: "Almoço",
        Imagem: 'https://www.receitasdeculinaria.tv/wp-content/uploads/2023/01/batata-palha-750x536.jpg',
    },{
        Nome:'Batata Frita',
        Preco: `R$${13}`,
        Descricao: 'Comida gostosona',
        Refeicao: "Almoço"
    },{
        Nome:'Batata Doce',
        Preco: `R$${21}`,
        Descricao: 'Comida gostosinha',
        Refeicao: "Jantar"
    }]

    useEffect(()=>{
        
    },[])
    
    
    
        return(
            <div className='box-comida'>
                {comidas.map((comida)=> (
                    <>
                    <a id='link-comida' target='_blank' href='https://www.google.com.br/?hl=pt-BR'><div className='comida' key={1}>
                     <img className='comida-imagem' src={comida.Imagem}></img>
                     <span className='comida-nome'>{comida.Nome}</span>
                     <span className='comida-preco'>{comida.Preco}</span>
                     <span className='comida-descricao'>{comida.Descricao}</span>
                     <span className='comida-refeicao'>{comida.Refeicao}</span>
                 </div></a>
                     
                 </>

                )
            )}
            </div>
                
            
            
        )

    

}