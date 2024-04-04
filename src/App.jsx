import { useState } from 'react'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
import Sidebar from './Components/Sidebar'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
   
      <div>
<Navbar/>
<Sidebar/>


<Footer/>
      </div>
     
    
  )
}

export default App
