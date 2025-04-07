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
import ScrollToTop from './components/ScrollToTop';
import { CarrinhoProvider } from './context/CarrinhoContext'


function App() {

  return (
    <>
    <CarrinhoProvider>
    <Header></Header>
    <ScrollToTop />
    <div className='major-box'>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path={'/cafe'} element={<Cafe/>}/>
        <Route path={'/almoco'} element={<Almoco/>}/>
        <Route path={'/jantar'} element={<Jantar/>}/>
        <Route path={'/sobremesas'} element={<Sobremesas/>}/>
        <Route path={'/bebidas'} element={<Bebidas/>}/>
        <Route path={'/login'} element={<Login/>}/>
      </Routes>

     <Footer></Footer>
     
      </div>
      </CarrinhoProvider>
    </>
  )
}

export default App
