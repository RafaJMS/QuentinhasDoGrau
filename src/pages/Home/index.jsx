import Cards from "../../components/Cards"
import "./index.css"

export default function Home(){
    return(
        <div className="container">
            <h1>Bem vindo ao Quentinhas do Grau</h1>
            <div className="content-box">
                <Cards/>
            </div>
        </div>
    )
}