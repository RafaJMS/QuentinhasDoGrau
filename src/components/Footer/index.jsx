import React from 'react';
import './Footer.css';
import { Link } from "react-router-dom"

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <p>&copy; {new Date().getFullYear()} QuentinhasDoGrau. Todos os direitos reservados.</p>
                <ul className="footer-links">
                    <li><a href="/about">Sobre</a></li>
                    <li><a href="/contact">Contato</a></li>
                    <li><a href="/privacy">Política de Privacidade</a></li>
                </ul>
            </div>
        </footer>
    );
};

export default Footer;