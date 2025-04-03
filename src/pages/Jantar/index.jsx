import { useEffect} from 'react'
import './indexJantar.css'

export default function Jantar(){

    const comidas =[ {

        Nome:'Hamburguer Artesanal com Fritas (Acompanha Refri e Molhos)',
        Preco: `R$ ${36}`,
        Refeicao: 'Pão com carne artesanal, bacon em tiras, queijo cheddar, alface, tomate e cebola caramelizada. Acompanha fritas, refrigerante e molhos.',
        Imagem: './src/assets/hamburguer.jpg',
    },{
        Nome:'Fatia única de pizza (Sabor a escolher)',
        Preco: `R$ ${32}`,
        Refeicao: "Fatia de pizza de 15cm. Sabores: Marguerita, 4 Queijos, Frango com Catupiry, Calabresa, Portuguesa, Pepperoni.",
        Imagem: './src/assets/pizza.jpg',
    },{
        Nome:'Almôndegas ao Sugo',
        Preco: `R$ ${30}`,
        Refeicao: "Almôndegas de carne moída ao molho de tomate, acompanhadas por arroz branco e batata palha.",
        Imagem: './src/assets/almondegas.jpg',
    },{
        Nome:'Macarrão com Camarões ao Molho Branco',
        Preco: `R$ ${37}`,
        Refeicao: "Macarrão ao molho branco com camarões, temperado com ervas finas e queijo parmesão ralado.",
        Imagem: './src/assets/macarrao.jpg',
    },{
        Nome:'Salmão Grelhado',
        Preco: `R$ ${40}`,
        Refeicao: "Salmão grelhado com molho de manteiga e ervas, acompanhado por arroz branco, salada e legumes assados.",
        Imagem: './src/assets/salmao.jpg',
        
    },{    
        Nome:'Risoto de Cogumelos',
        Preco: `R$ ${38}`,
        Refeicao: "Risoto de cogumelos frescos, temperado com ervas finas e queijo parmesão ralado.",
        Imagem: './src/assets/risoto.jpg',
    }

]

useEffect(()=>{
        
},[])

    return(
        <>
        <div className='comidas-container'>
            <div className='comidas-title'>
                <span id='comidas-title'>Jantar</span>
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