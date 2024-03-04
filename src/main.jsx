import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import MyRoutes from './Routes/index.jsx'
import { BrowserRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <MyRoutes></MyRoutes>
    </BrowserRouter>
  </React.StrictMode>,
)
