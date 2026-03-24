import { useState } from 'react'

import './App.css'
import Navbar from './Component/Navbar/Navbar'
import Dash from './Component/Dash/Dash'
import Home from './Component/Home/Home'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navbar/>  
<Home/>
{/* <Dash/> */}

     </>
  )
}

export default App
