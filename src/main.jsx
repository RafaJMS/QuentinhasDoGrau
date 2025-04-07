import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { CarrinhoProvider } from './context/CarrinhoContext'
import { UIProvider } from './context/UIContext'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <CarrinhoProvider>
        <UIProvider>
          <App />
        </UIProvider>
      </CarrinhoProvider>
    </BrowserRouter>
  </React.StrictMode>
)
