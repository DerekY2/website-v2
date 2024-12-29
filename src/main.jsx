import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Lander from './Lander.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Lander />
  </StrictMode>,
)
