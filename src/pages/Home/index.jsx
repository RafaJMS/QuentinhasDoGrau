import "./index.css"
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { useState } from 'react';

export default function Home(){
    const cards =[ {

        Title:'Bem vindo!',
        Description: "Seja muito bem vindo ao Quentinhas do Grau, o lugar perfeito para sua refeição diária. Os melhores preços e sabores, você encontra aqui!",
        Image: 'https://i.imgur.com/G5KIMtb.png',
        id: "welcome",
    },{
        Title:'Nossa Historia!',
        Description: `R$ 38 / 49 / 60`,
        Image: 'https://cachoeiradafurna.com.br/wp-content/uploads/2020/05/comida-de-hotel-fazenda.jpg',
        id: "history",
    },{
        Title:'Venha nos visitar!',
        Description: 'Deseja nos fazer uma visita? Você pode nos encontrar no endereço:',
        Image: '/src/assets/map.svg',
        id: "location",
    }]

    return(
        <>
        <div className="intro-collection" key={1}>
        {cards.map((card)=> (
            <div className="intro-box"id={card.id} key={1}>
                <img className="intro-img"id={card.id} src={card.Image}></img>
                <div>
                    <span className="title">{card.Title}</span>
                    <article className='text'>{card.Description}</article>
                    {card.id === "location" && (
                        <div className="contact-box">
                            <span className="endereco">Rua das Flores, 123, Bairro das Rosas, Cidade das Cores.</span>
                            <span className="contato">Contato: (&#) 4002 - 8922</span>
                        </div>
                    )}
                </div>
            </div>))}
        </div>
    </>
    )
}