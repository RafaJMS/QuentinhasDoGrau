import Cards from "../Manha"
import Slide from "../../components/Slides"
import "./index.css"
import { Link } from "react-router-dom"

export default function Home(){
    return(
        <>
            <Slide/>
            <div className="home-box">
            <h1 className="title">Bem vindo ao Quentinhas do Grau !</h1>
            
            <article className="text-home"> 
                Seja muito bem vindo ao Quentinhas do Grau, o lugar perfeito para
                sua refeição diária. Os melhores preços e sabores, você encontra aqui!
            </article>

            <span className="cardapio"> Cardapios Disponiveis: </span>
            <div className="section-box">

                <Link id="section-link" to={"/cafe"}><span className="section-item">Café da Manhã</span></Link>
                <Link id="section-link" to={"/almoco"}><span className="section-item">Almoço</span></Link>
                <Link id="section-link" to={"/jantar"}><span className="section-item">Jantar</span></Link> 
                <Link id="section-link" to={"/sobremesas"}><span className="section-item">Sobremesas</span></Link>
                <Link id="section-link" to={"/bebidas"}><span className="section-item">Bebidas</span></Link>

            </div>

            </div>
            
                
            
        </>
    )
}