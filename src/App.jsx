import { useState } from 'react'
import './App.css'
import Home from './pages/Home'
import Header from './components/Header'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    
      <Header></Header>
      <div className='major-box'>
          <Home></Home>
      </div>
      
    </>
  )
}

export default App
