import { useState } from 'react'
import './App.css'
import Home from './pages/Home'
import Header from './components/Header'
import * as bootstrap from 'bootstrap'
import { Routes,Route } from 'react-router'
import Cafe from './pages/Manha'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className='major-box'>
    
    <Header></Header>
      
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path={'/cafe'} element={<Cafe/>}/>
        <Route path={'/almoco'} element={<Cafe/>}/>
        <Route path={'/jantar'} element={<Cafe/>}/>
        <Route path={'/sobremesas'} element={<Cafe/>}/>
        <Route path={'/bebidas'} element={<Cafe/>}/>
      </Routes>
      </div>
      
    
    </>
  )
}

export default App
