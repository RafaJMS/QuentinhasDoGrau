import { useEffect} from 'react'
import './indexJantar.css'

export default function Jantar(){

    const comidas =[ {

        Nome:'Hamburguer Artesanal com Fritas (Acompanha Refri e Molhos)',
        Preco: `R$ ${36}`,
        Refeicao: 'Pão com carne artesanal, bacon em tiras, queijo cheddar, alface, tomate e cebola caramelizada. Acompanha fritas, refrigerante e molhos.',
        Imagem: 'https://static.itdg.com.br/images/1200-630/25eccc57e89354df6b2df7d9060aca4e/355695-original.jpg',
    },{
        Nome:'Fatia única de pizza (Sabor a escolher)',
        Preco: `R$ ${32}`,
        Refeicao: "Fatia de pizza de 15cm. Sabores: Marguerita, 4 Queijos, Frango com Catupiry, Calabresa, Portuguesa, Pepperoni.",
        Imagem: 'https://www.designi.com.br/images/preview/10755260.jpg',
    },{
        Nome:'Almôndegas ao Sugo',
        Preco: `R$ ${30}`,
        Refeicao: "Almôndegas de carne moída ao molho de tomate, acompanhadas por arroz branco e batata palha.",
        Imagem: 'https://conteudo.imguol.com.br/c/entretenimento/ca/2022/10/14/almondegas-ao-sugo-1665771899729_v2_4x3.jpg',
    },{
        Nome:'Macarrão com Camarões ao Molho Branco',
        Preco: `R$ ${37}`,
        Refeicao: "Macarrão ao molho branco com camarões, temperado com ervas finas e queijo parmesão ralado.",
        Imagem: 'https://static.itdg.com.br/images/1200-675/bc528efbf3b8577477cc9eda0adf25d7/326681-original.jpg',
    },{
        Nome:'Salmão Grelhado',
        Preco: `R$ ${40}`,
        Refeicao: "Salmão grelhado com molho de manteiga e ervas, acompanhado por arroz branco, salada e legumes assados.",
        Imagem: 'https://diariodonordeste.verdesmares.com.br/image/contentid/policy:1.3272574:1661813887/Fil%C3%A9%20de%20Salm%C3%A3o%20Grelhado%20(1).jpg?f=16x9&$p$f=767b29d',
        
    },{    
        Nome:'Risoto de Cogumelos',
        Preco: `R$ ${38}`,
        Refeicao: "Risoto de cogumelos frescos, temperado com ervas finas e queijo parmesão ralado.",
        Imagem: 'https://blog.biglar.com.br/wp-content/uploads/2023/06/iStock-1367349793.jpg',
    }

]

    useEffect(()=>{
        
    },[])
    
        return(
            <>

            <div className='jantar-title'>
                <span id='title'>Cardápio para o Jantar</span>
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