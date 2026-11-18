import { createRoot } from 'react-dom/client'
import { StrictMode } from 'react'
import MyApp from '../src/MyApp.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <MyApp />
  </StrictMode>,
)
