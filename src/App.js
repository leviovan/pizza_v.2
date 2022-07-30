
import './App.css';

import './scss/app.scss'
import { Route, Routes } from 'react-router-dom';
import Home from './components/pages/Home';
import NotFoundBlock from './components/NotFoundBlock/NotFoundBlock';
import Cart from './components/cart/Cart';

import { createContext } from 'react';
import FullPizza from './components/pages/FullPizza';
import Header from './components/header/Header';


export const AppContext = createContext({});

function App() {
  return (
    <div className="wrapper" >
        <Header />
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="*" element={<NotFoundBlock />} />
            <Route path="pizza/:id" element={<FullPizza />} />
            <Route path="cart" element={<Cart />} />/
          </Routes>
        </div>
    </div>
  )
}

export default App;
