import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home.jsx'
import App from './App.jsx'
import Favoritos from './pages/Favoritos.jsx'
import FavoritosProvider from './context/Favoritos.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <FavoritosProvider>
        <Routes>
          <Route element={<App/>}>
            <Route path="/" element={<Home/>}/>
            <Route path="favoritos" element={<Favoritos/>}/>
          </Route>
        </Routes>
      </FavoritosProvider>
     
    </BrowserRouter>
  </React.StrictMode>,
)
