
import './App.css';
import Header from './components/header/Header'
import './scss/app.scss'
import { Route, Routes } from 'react-router-dom';
import Home from './components/pages/Home';
import NotFoundBlock from './components/NotFoundBlock/NotFoundBlock';
import Cart from './components/cart/Cart';
import { useState } from 'react';
import { createContext } from 'react';

export const AppContext = createContext({});

function App() {
  const [searchValue, setSearchValue] = useState("");
  return (
    <div className="wrapper" >
      <AppContext.Provider value={{ searchValue, setSearchValue }}>
        <Header />
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="*" element={<NotFoundBlock />} />
            <Route path="cart" element={<Cart />} />/

          </Routes>
        </div>
      </AppContext.Provider>
    </div>
  )
}

export default App;
