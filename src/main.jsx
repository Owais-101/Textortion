import React from 'react'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router'
import { AnimationsProvider } from './context/AnimationsContext'

createRoot(document.getElementById('root')).render(
  <AnimationsProvider>
    <BrowserRouter>
      <StrictMode>
        <App />
      </StrictMode>
    </BrowserRouter>
  </AnimationsProvider>
)
