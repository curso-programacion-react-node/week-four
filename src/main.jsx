import React from 'react'
import ReactDOM from 'react-dom/client'
import MyRoutes from './Routes/index.jsx'
import { BrowserRouter } from 'react-router-dom'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
    <BrowserRouter>
      <MyRoutes />
    </BrowserRouter>
)
