import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './main.scss'
import { AppProvider } from '../contexts/DarkModeContext.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <AppProvider>
    <App />
    </AppProvider>
  </React.StrictMode>,
)
