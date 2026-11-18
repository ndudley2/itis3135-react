import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './MyApp.css'
import App from './App.jsx'
import MyApp from './MyApp.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <MyApp />
  </StrictMode>,
)
