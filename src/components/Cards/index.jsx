import { useEffect, useState } from 'react'
import './index.css'

export default function Cards(){

    const comidas =[ {

        Nome:'Batata Palha',
        Preco: `R$${6}`,
        Descricao: 'Comida gostosa',
        Refeicao: "Almoço"
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
            <div>
                {comidas.map((comida)=> (
                     <div className='comida' key={1}>
                     <span className='comida-nome'>{comida.Nome}</span>
                 </div>

                )
            )}
            </div>
                
            
            
        )

    

}