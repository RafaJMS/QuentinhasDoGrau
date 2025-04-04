import React from 'react';
import './Footer.css';
import { Link } from "react-router-dom"

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <p>&copy; {new Date().getFullYear()} QuentinhasDoGrau. Todos os direitos reservados.</p>
            </div>
        </footer>
    );
};

export default Footer;