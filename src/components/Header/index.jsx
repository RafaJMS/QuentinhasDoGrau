import "../Header/index.css"
import { Link } from "react-router-dom"

export default function Header(){
    return(
        
        <div className="header-box">
            <Link id="icon-link" to={'/'}>
           <div className="titleheader-box">
         <img className="title-img" src="https://i.imgur.com/AMFouer.png"></img>
            <span className="title-header">Quentinhas do Grau</span>
           </div>
           </Link>
           <div className="headertype-box">
            <Link id="type-link" to={"/cafe"}><span className="type-header">Café da Manhã</span></Link>
            <Link id="type-link" to={"/almoco"}><span className="type-header">Almoço</span></Link>
            <Link id="type-link" to={"/jantar"}><span className="type-header">Jantar</span></Link>
            <Link id="type-link" to={"/sobremesas"}><span className="type-header">Sobremesas</span></Link>   
            <Link id="type-link" to={"/bebidas"}><span className="type-header">Bebidas</span> </Link>        
           </div> 
           
        </div>
    )
}