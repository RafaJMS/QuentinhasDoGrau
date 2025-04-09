import './App.css'
import Home from './pages/Home'
import Header from './components/Header'
import { Routes,Route } from 'react-router'
import Cafe from './pages/Manha/CafeDaManha'
import Almoco from './pages/Almoco/Almoco'
import Jantar from './pages/Jantar/Jantar'
import Sobremesas from './pages/Sobremesas/Sobremesas'
import Bebidas from './pages/Bebidas/Bebidas'
import Footer from './components/Footer'
import Login from './pages/Login'
import Register from './pages/Registrar'
import { CarrinhoProvider } from './context/CarrinhoContext'
import { useAcessibilidade } from './context/AcessibilidadeContext'
import BotaoAcessibilidade from './components/BotaoAcessibilidade/BotaoAcessibilidade'
import Pagamento from './pages/Pagamento/Pagamento'


function App() {
  const { tamanhoFonte, contrasteAlto } = useAcessibilidade();
  return (
    <>
    <CarrinhoProvider>
    <Header/>
    <BotaoAcessibilidade />
    <div className='major-box'style={{
        fontSize: `${tamanhoFonte}px`,
        backgroundColor: contrasteAlto ? "#000" : "#fff",
        color: contrasteAlto ? "#FFD700" : "#000",
      }}>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path={'/cafe'} element={<Cafe/>}/>
        <Route path={'/almoco'} element={<Almoco/>}/>
        <Route path={'/jantar'} element={<Jantar/>}/>
        <Route path={'/sobremesas'} element={<Sobremesas/>}/>
        <Route path={'/bebidas'} element={<Bebidas/>}/>
        <Route path={'/login'} element={<Login/>}/>
        <Route path={'/register'} element={<Register/>}/>
        <Route path={'/payment'} element={<Pagamento/>}/>
      </Routes>
     <Footer></Footer>
      </div>
      </CarrinhoProvider>
    </>
  )
}

export default App
