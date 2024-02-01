import "../Header/index.css"
import { Link } from "react-router-dom"

export default function Header(){
    return(
        
        <div className="header-box">
           <div className="titleheader-box">
         <img className="title-img" src="./src/assets/svgrepo.svg"></img>
            <span className="title-header">Quentinhas do Grau</span>
           </div>
           
           <div className="headertype-box">
           <Link to={"/cafe"}><span className="type-header">Café da Manhã</span></Link>
            <Link to={"/almoco"}><span className="type-header">Almoço</span></Link>
            <Link to={"/jantar"}><span className="type-header">Jantar</span></Link>
            <Link to={"/sobremesas"}><span className="type-header">Sobremesas</span></Link>   
            <Link to={"/bebidas"}><span className="type-header">Bebidas</span> </Link>        
           </div>
           
        </div>
    )
}