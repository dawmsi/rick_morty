import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import App from './App'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <>
    <BrowserRouter>
      <Routes>
        <Route index element={<App />} />
        <Route path='/rick_morty/*' element={<App />} />
      </Routes>
    </BrowserRouter>
  </>
)
