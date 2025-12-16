import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles/index.css'
import './styles/theme-switch.css'
import './styles/grained-style.css'
import App from './App.jsx'
import AppThemeController from './utils/AppThemeController'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AppThemeController>
      <App />
    </AppThemeController>
  </StrictMode>,
)
