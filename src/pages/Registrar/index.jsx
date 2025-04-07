import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';
import './index.css';

const Register = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Email:', email);
        console.log('Password:', password);
    };

    return (
        <InputGroup size="sm" className="login-box">
            <div className="content-container">
            <Form onSubmit={handleSubmit} className="login-form">
            <h1>Registrar</h1>
            <div className="input-form-group">
                <div className="form-group">
                <span id="inputGroup-sizing-sm">Email</span>
                    <Form.Control
                        type="email"
                        aria-label="Small"
                        aria-describedby="inputGroup-sizing-sm"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                <span id="inputGroup-sizing-sm">Senha</span>
                    <Form.Control
                        type="password"
                        aria-label="Small"
                        aria-describedby="inputGroup-sizing-sm"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                <span id="inputGroup-sizing-sm">Confirmar Senha</span>
                    <Form.Control
                        type="password"
                        aria-label="Small"
                        aria-describedby="inputGroup-sizing-sm"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
            </div>
                <Button type="submit" id="intro-button">Registrar</Button>
            </Form>
            <img src="/src/assets/Computer login-bro.svg" alt="Logo" className="login-img" />
            </div>
        </InputGroup>
    );
};

export default Register;