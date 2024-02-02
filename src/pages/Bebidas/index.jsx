import { useEffect } from 'react'
import './indexBebidas.css'

export default function Bebidas(){

    const comidas =[ {

        Nome:'Drinks (Verificar Disponibilidade)',
        Preco: `R$ ${21}`,
        Refeicao: 'Drinks variados, com ou sem álcool, a sua escolha. Por exemplo: Sex on the Beach, Lagoa Azul, Coqueteis, etc.',
        Imagem: 'https://claudia.abril.com.br/wp-content/uploads/2022/11/garota-drink-1154.jpg?quality=85&strip=info',
    },{
        Nome:'Refrigerantes (Verificar Disponibilidade)',
        Preco: `R$ ${13}`,
        Refeicao: "Copo de 750ml com refrigerantes diversos a sua escolha, como Coca-Cola, Guaraná, Sprite, Fanta, etc.",
        Imagem: 'https://s2.glbimg.com/GUda5oj9xkd_yQNyn36mDn9XJmo=/620x455/e.glbimg.com/og/ed/f/original/2018/08/17/beber-refrigerante-todos-os-dias-esta-te-matando.jpg',
    },{
        Nome:'Café com ou sem Leite',
        Preco: `R$ ${7}`,
        Refeicao: "Café puro ou com leite, a sua escolha.",
        Imagem: 'https://static.itdg.com.br/images/1200-630/00fc39645a2f0552e50f874b79a8523e/cafe.jpg',
    },{
        Nome:'Água sem / com gás',
        Preco: `R$ ${5}`,
        Refeicao: "Água mineral com ou sem gás, a sua escolha.",
        Imagem: 'https://integrative.med.br/wp-content/uploads/2023/01/Ja-bebeu-agua-hoje-Entao-entenda-a-importancia-da-agua-para-o-corpo.jpg',
    },{
        Nome:'Sucos (Verificar Disponibilidade)',
        Preco: `R$ ${13}`,
        Refeicao: "Copo de 750ml com suco natural de frutas a sua escolha, como laranja, limão, abacaxi, maracujá, etc.",
        Imagem: 'https://www.emporiobahamas.com.br/wp-content/uploads/2023/08/AdobeStock_223473605-scaled.jpeg',
        
    },{    
        Nome:'Água de Coco',
        Preco: `R$ ${15}`,
        Refeicao: "Copo de 750ml com água de coco natural, direto do coco verde.",
        Imagem: 'https://alavoura.com.br/wp-content/uploads/2022/04/coco-verde.jpg',
    }

]

    useEffect(()=>{
        
    },[])
    
        return(
            <>

            <div className='bebidas-title'>
                <span id='title-bebida'>Bebidas</span>
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