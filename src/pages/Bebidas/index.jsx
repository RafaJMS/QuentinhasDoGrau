import { useEffect } from 'react'
import './indexBebidas.css'

export default function Bebidas(){

    const comidas =[ {

        Nome:'Drinks (Verificar Disponibilidade)',
        Preco: `R$ ${21}`,
        Refeicao: 'Drinks variados, com ou sem álcool, a sua escolha. Por exemplo: Sex on the Beach, Lagoa Azul, Coqueteis, etc.',
        Imagem: './src/assets/drinks.jpg',
    },{
        Nome:'Refrigerantes (Verificar Disponibilidade)',
        Preco: `R$ ${13}`,
        Refeicao: "Copo de 750ml com refrigerantes diversos a sua escolha, como Coca-Cola, Guaraná, Sprite, Fanta, etc.",
        Imagem: './src/assets/refri.jpg',
    },{
        Nome:'Café com ou sem Leite',
        Preco: `R$ ${7}`,
        Refeicao: "Café puro ou com leite, a sua escolha.",
        Imagem: './src/assets/cafe.jpg',
    },{
        Nome:'Água sem / com gás',
        Preco: `R$ ${5}`,
        Refeicao: "Água mineral com ou sem gás, a sua escolha.",
        Imagem: './src/assets/agua.jpg',
    },{
        Nome:'Sucos (Verificar Disponibilidade)',
        Preco: `R$ ${13}`,
        Refeicao: "Copo de 750ml com suco natural de frutas a sua escolha, como laranja, limão, abacaxi, maracujá, etc.",
        Imagem: './src/assets/suco.jpeg',
        
    },{    
        Nome:'Água de Coco',
        Preco: `R$ ${15}`,
        Refeicao: "Copo de 750ml com água de coco natural, direto do coco verde.",
        Imagem: './src/assets/aguadecoco.jpg',
    }

]

useEffect(()=>{
        
},[])

return(
    <>
    <div className='comidas-container'>
        <div className='comidas-title'>
            <span id='comidas-title'>Bebidas</span>
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