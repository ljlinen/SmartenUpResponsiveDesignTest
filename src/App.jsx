import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './assets/css/root/reset.css'
import './assets/css/root/fonts.css'
import './assets/css/root/index.css'
import Home from './js/pages/Home'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Home />
  </StrictMode>,
)
