import Cards from "../Manha"
import Slide from "../../components/Slides"
import "./index.css"
import { Link } from "react-router-dom"

export default function Home(){
    return(
        <>
            <Slide/>
            <div className="home-box">
            <h1 className="title">Bem vindo ao Quentinhas do Grau</h1>
            
            <article className="text-home"> 
                Seja muito bem vindo ao Quentinhas do Grau, o lugar certo para
                sua refeição diária. Os melhores preços e sabores, você encontra aqui!
            </article>

            <span className="cardapio"> Cardapios: </span>
            <div className="section-box">

                <Link to={"/cafe"}><span className="section-item">Café da Manhã</span></Link>
                <Link to={"/almoco"}><span className="section-item">Almoço</span></Link>
                <Link to={"/jantar"}><span className="section-item">Jantar</span></Link> 
                <Link to={"/sobremesas"}><span className="section-item">Sobremesas</span></Link>
                <Link to={"/bebidas"}><span className="section-item">Bebidas</span></Link>

            </div>

            </div>
            
                
            
        </>
    )
}