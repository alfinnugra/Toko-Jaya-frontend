import React from 'react'
import ReactDOM from 'react-dom/client'
import HomePages from './assets/pages/HomePages.jsx'
import './index.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import DetailsProductPages from './assets/pages/DetailsProductPages.jsx';
import CartPages from './assets/pages/CartPages.jsx';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path='/' element={<HomePages/>}  exact />
        <Route path='/DetailsProduct/:id' element={<DetailsProductPages/>} exact/>
        <Route path='/Cart' element={<CartPages/>} exact/>
      </Routes>
    </Router>
  </React.StrictMode>,
)
