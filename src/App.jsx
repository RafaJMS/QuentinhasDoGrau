import './App.css'
import Home from './pages/Home'
import Header from './components/Header'
import { Routes,Route } from 'react-router'
import Cafe from './pages/Manha'
import Almoco from './pages/Almoco'
import Jantar from './pages/Jantar'
import Sobremesas from './pages/Sobremesas'
import Bebidas from './pages/Bebidas'
import * as bootstrap from 'bootstrap'



function App() {

  return (
    <>
    <div className='major-box'>
    
    <Header></Header>
      
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path={'/cafe'} element={<Cafe/>}/>
        <Route path={'/almoco'} element={<Almoco/>}/>
        <Route path={'/jantar'} element={<Jantar/>}/>
        <Route path={'/sobremesas'} element={<Sobremesas/>}/>
        <Route path={'/bebidas'} element={<Bebidas/>}/>
      </Routes>
      </div>
      
    
    </>
  )
}

export default App
