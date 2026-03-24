import { useState } from 'react'
import './App.css'
import Announcements from './Component/Announcements page/Announcements'
import Exammanagement from './Component/Exammanagement page/Exammanagement'
function App() {
  const [count, setCount] = useState(0)

  return (
    
    // <Announcements/>
    <Exammanagement/>
  )
}

export default App
