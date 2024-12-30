import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './Lander.css'
import Navbar from './components/navbar'

function Lander() {
  const [count, setCount] = useState(0)

  return (
    <div className='lander'>
      <Navbar />
    </div>
  )
}

export default Lander
