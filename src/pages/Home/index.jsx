import "./index.css"
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import { useState } from 'react';

export default function Home(){
    const cards =[ {
        Description: "",
        Image: '',
        id: "welcome",
    },{
        Title:'',
        Description: ``,
        Image: '',
        id: "history",
    },{
        Title:'Venha nos visitar!',
        Description: 'Deseja nos fazer uma visita? Você pode nos encontrar no endereço:',
        Image: '/src/assets/map.svg',
        id: "location",
    }]
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
        id: "cafe",
    },{
        Title:'Bebidas',
        Description: 'Venha conhecer nosso cardápio de bebidas!',
        Image: '/src/assets/refri.jpg',
        id: "almoco",
    }]

    return(
        <>
        <div className="intro-collection">
            <div className="intro-box">
                    <div className="intro-text">
                        <span className="title">Bem vindo!</span>
                            <article className='text'>
                                Seja muito bem vindo ao Quentinhas do Grau, 
                                o lugar perfeito para sua refeição diária. 
                                Os melhores preços e sabores, você encontra aqui!
                            </article>
                        <Button variant="primary" id="intro-button">Começar</Button>
                    </div>
            </div>
            <div className="intro-box">
                <img className="intro-img" src={'https://cachoeiradafurna.com.br/wp-content/uploads/2020/05/comida-de-hotel-fazenda.jpg'}></img>
                <div>
                    <span className="title">Nossa Historia!</span>
                    <article className='text'>teste</article>
                </div>
            </div>
            <div className="cardapio-collection" key={1}>
                <span className="title">Conheça nossos cardapios: </span>
                <div className="cardapio-box-container">
                    {cardapios.map((cardapio)=> (
                        <Card style={{ width: '20rem', height:'26rem', borderRadius:'10px',border:'1px solid', boxShadow: '0 0 5px rgba(0, 0, 0, 0.471)'}} key={cardapio.id}>
                        <Card.Img variant="top" className="cardapio-img" src={cardapio.Image} />
                            <Card.Body>
                                <Card.Title>{cardapio.Title}</Card.Title>
                                <Card.Text>{cardapio.Description}
                                </Card.Text>
                                <Button variant="primary" id="intro-button">Visitar</Button>
                            </Card.Body>
                      </Card>))}
                </div>
            </div>
        </div>
    </>
    )
}