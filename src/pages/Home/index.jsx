import "./index.css"
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from "react-router-dom"
import { useState } from 'react';

export default function Home(){
    const cardapios = [{
        Title:'Manhã',
        Description: 'Venha conhecer nosso cardápio da manhã!',
        Image: '/src/assets/cafe.jpg',
        id: "cafe",
    },{
        Title:'Almoço',
        Description: 'Venha conhecer nosso cardápio de almoço!',
        Image: '/src/assets/ratattoile.jpg',
        id: "almoco",
    },{
        Title:'Jantar',
        Description: 'Venha conhecer nosso cardápio de jantar!',
        Image: '/src/assets/hamburguer.jpg',
        id: "jantar",
    },{
        Title:'Sobremesas',
        Description: 'Venha conhecer nosso cardápio de sobremesas!',
        Image: '/src/assets/grandgateau.jpg',
        id: "sobremesas",
    },{
        Title:'Bebidas',
        Description: 'Venha conhecer nosso cardápio de bebidas!',
        Image: '/src/assets/refri.jpg',
        id: "bebidas",
    }]

    return(
        <>
        <div className="intro-collection">
            <div className="content-box">
                    <div className="intro-text">
                        <span className="title">Bem vindo!</span>
                            <article className='intro-article'>
                                Seja muito bem vindo ao Quentinhas do Grau, 
                                o lugar perfeito para sua refeição diária. 
                                Os melhores preços e sabores, você encontra aqui!
                            </article>
                        <Button variant="primary" id="intro-button" href="#cardapio">Começar</Button>
                    </div>
            </div>
            <div className="content-box">
                <div className="welcome-img-text" id={"history"}>
                    <div className="welcome-box">
                        <span className="title">Nossa Historia!</span>
                        <article className='welcome-text'>
                            Tudo começou numa garagem apertada no bairro do Alto Sol, 
                            quando Dona Graça — uma cozinheira de mão cheia, 
                            conhecida pelas suas marmitas caprichadas — decidiu vender quentinhas pra complementar a renda.
                            O segredo? Comida simples, feita com amor e tempero de vó.
                            O nome veio por acaso: um cliente fiel, motoboy da quebrada, pegava a quentinha todo dia antes do trampo e sempre falava:
                            "Essa tá no grau, Dona Graça! Quentinhas do grau, pô!"
                            O apelido pegou. Logo, o nome virou oficial.
                            De boca em boca, de grupo de WhatsApp em grupo de vizinhança, o negócio cresceu. 
                            Hoje, a Quentinhas do Grau serve mais de 300 refeições por dia, mantendo o mesmo sabor caseiro que conquistou o bairro desde o primeiro arroz soltinho.
                            Agora com cardápio digital, combos pra galera e entrega rápida, eles seguem firmes com o lema:
                            “Comida quente, preço justo e aquele tempero que abraça.”
                        </article>
                    </div>
                    <img className="welcome-img" src={'https://cachoeiradafurna.com.br/wp-content/uploads/2020/05/comida-de-hotel-fazenda.jpg'}></img>
                </div>
                <div className="welcome-img-text" id={"location"}>
                    <div className="welcome-box">
                        <span className="title">Onde nos encontrar</span>
                        <p className='welcome-text'>
                            📍 Quentinhas do Grau<br/>
                            Rua São Bento, nº 457 — Bairro Jardim Esperança&nbsp;&nbsp;&nbsp;&nbsp;<br/>
                            Aracaju — SE, CEP: 49000-000<br/>
                            📞 (79) 99999-1234<br/>
                        </p>
                    </div>
                    <img className="welcome-img" src={'/src/assets/map.svg'}></img>
                </div>
            </div>
            <div className="cardapio-collection" id={"cardapio"}>
                <span className="title">Conheça nossos cardapios: </span>
                <div className="cardapio-box-container">
                    {cardapios.map((cardapio)=> (
                        <Card style={{ width: '20rem', height:'26rem', borderRadius:'10px',border:'1px solid', boxShadow: '0 0 5px rgba(0, 0, 0, 0.471)'}} key={cardapio.id}>
                        <Card.Img variant="top" className="cardapio-img" src={cardapio.Image} />
                            <Card.Body>
                                <Card.Title>{cardapio.Title}</Card.Title>
                                <Card.Text>{cardapio.Description}
                                </Card.Text>
                                <Link to={cardapio.id} id="cardapio-link"><Button variant="primary" id="intro-button">Visitar</Button></Link>
                            </Card.Body>
                      </Card>))}
                </div>
            </div>
        </div>
    </>
    )
}