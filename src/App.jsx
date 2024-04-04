import { useState } from 'react'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
   
      <div>
<Navbar/>
This is a navbar

<Footer/>
      </div>
     
    
  )
}

export default App
