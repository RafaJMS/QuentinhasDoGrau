import Cards from "../../components/Cards"
import Slide from "../../components/Slides"
import "./index.css"

export default function Home(){
    return(
        <>
            <Slide/>
            <h1 className="title">Bem vindo ao Quentinhas do Grau</h1>
            <div className="content-box">
                
                <Cards/>
            </div>
        </>
    )
}