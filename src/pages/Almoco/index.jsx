import { useEffect} from 'react'
import './indexAlmoco.css'

export default function Almoco(){

    const comidas =[ {

        Nome:'Frango a Parmegiana',
        Preco: `R$ 38 / 49 / 60`,
        Refeicao: 'Frango a parmegiana com molho de tomate e queijo gratinado, acompanhado de arroz e batata frita.\n Tamanhos: P, M, G.',
        Imagem: 'https://www.receiteria.com.br/wp-content/uploads/file-de-frango-parmegiana-730x548.jpeg',
    },{
        Nome:'Carne do Sol com Fritas',
        Preco: `R$ 30`,
        Refeicao: "Carne do Sol acompanhado com Batata ou Polenta Frita. Serve até 2 pessoas",
        Imagem: 'https://img77.uenicdn.com/image/upload/v1572878330/business/d-boinha-bar-e-petiscos/196ac91e-d4c5-42d7-8ee3-9657182e3452.jpg',
    },{
        Nome:'Carbonara',
        Preco: `R$ 34`,
        Refeicao: "Macarrão feito ao molho branco, bacon e queijo parmesão. Serve 1 pessoa",
        Imagem: 'https://static01.nyt.com/images/2021/02/14/dining/carbonara-horizontal/carbonara-horizontal-threeByTwoMediumAt2X-v2.jpg',
    },{
        Nome:'Ratatouille',
        Preco: `R$ 32 / 40`,
        Refeicao: "Ratatouille feito com berinjela, abobrinha, pimentão, tomate e cebola. Serve 1 ou 2 pessoas",
        Imagem: 'https://static.itdg.com.br/images/1200-675/189dacab4a4e8151b2451ecf97f85cc2/346231-original.jpg',
    },{
        Nome:'Feijoada',
        Preco: `R$ 31 / 43 / 57`, 
        Refeicao: "Feijoada completa com arroz, couve, farofa, laranja e torresmo. Tamanhos: P, M, G.",
        Imagem: 'https://assets.unileversolutions.com/recipes-v2/229468.jpg',
        
    },{    
        Nome:'Strogonoff de Frango',
        Preco: `R$ 28`,
        Refeicao: "Strogonoff de frango com arroz e batata palha. Serve 2 pessoas",
        Imagem: 'https://www.unileverfoodsolutions.com.br/dam/global-ufs/mcos/SLA/calcmenu/recipes/BR-recipes/chicken-&-other-poultry-dishes/strogonoff-de-frango/main-header.jpg',
    }

]

    useEffect(()=>{
        
    },[])
    
        return(
            <>

            <div className='almoco-title'>
                <span id='almoco-title'>Cardápio para o Almoço</span>
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