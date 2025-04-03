import { useEffect} from 'react'
import './indexAlmoco.css'

export default function Almoco(){

    const comidas =[ {

        Nome:'Frango a Parmegiana',
        Preco: `R$ 38 / 49 / 60`,
        Refeicao: 'Frango a parmegiana com molho de tomate e queijo gratinado, acompanhado de arroz e batata frita.\n Tamanhos: P, M, G.',
        Imagem: './src/assets/parmegiana.jpeg',
    },{
        Nome:'Carne do Sol com Fritas',
        Preco: `R$ 30`,
        Refeicao: "Carne do Sol acompanhado com Batata ou Polenta Frita. Serve até 2 pessoas",
        Imagem: './src/assets/carnedosol.jpg',
    },{
        Nome:'Carbonara',
        Preco: `R$ 34`,
        Refeicao: "Macarrão feito ao molho branco, bacon e queijo parmesão. Serve 1 pessoa",
        Imagem: './src/assets/carbonara.jpg',
    },{
        Nome:'Ratatouille',
        Preco: `R$ 32 / 40`,
        Refeicao: "Ratatouille feito com berinjela, abobrinha, pimentão, tomate e cebola. Serve 1 ou 2 pessoas",
        Imagem: './src/assets/ratattoile.jpg',
    },{
        Nome:'Feijoada',
        Preco: `R$ 31 / 43 / 57`, 
        Refeicao: "Feijoada completa com arroz, couve, farofa, laranja e torresmo. Tamanhos: P, M, G.",
        Imagem: './src/assets/feijoada.jpg',
        
    },{    
        Nome:'Strogonoff de Frango',
        Preco: `R$ 28`,
        Refeicao: "Strogonoff de frango com arroz e batata palha. Serve 2 pessoas",
        Imagem: './src/assets/strogonoff.jpg',
    }

]

useEffect(()=>{
        
},[])

return(
    <>
    <div className='comidas-container'>
        <div className='comidas-title'>
            <span id='comidas-title'>Almoço</span>
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