import "../Header/index.css"

export default function Header(){
    return(
        
        <div className="header-box">
           <div className="titleheader-box">
         <img className="title-img" src="./src/assets/svgrepo.svg"></img>
            <span className="title-header">Quentinhas do Grau</span>
           </div>
           
           <div className="headertype-box">
            <span className="type-header">Café da Manhã</span>
            <span className="type-header">Almoço</span>
            <span className="type-header">Jantar</span>
            <span className="type-header">Sobremesas</span>           
           </div>
           
        </div>
    )
}