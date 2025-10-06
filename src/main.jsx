import { createRoot } from 'react-dom/client'

import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Home from './pages/Home.jsx'
import Item from './pages/Item.jsx'
import Profile from './pages/Profile.jsx'

import './style/main.css'


createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/item' element={<Item />} />
        <Route path='/profile' element={<Profile />} />
    </Routes>
  </BrowserRouter>
)