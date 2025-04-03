import './App.css'
import Home from './pages/Home'
import Header from './components/Header'
import { Routes,Route } from 'react-router'
import Cafe from './pages/Manha'
import Almoco from './pages/Almoco'
import Jantar from './pages/Jantar'
import Sobremesas from './pages/Sobremesas'
import Bebidas from './pages/Bebidas'
import Footer from './components/Footer'
import Login from './pages/Login'



function App() {

  return (
    <>
    <Header></Header>
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
    </>
  )
}

export default App
