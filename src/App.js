
import './App.css';
import Header from './components/header/Header'
import './scss/app.scss'

import { Route, Routes } from 'react-router-dom';
import Home from './components/pages/Home';
import NotFoundBlock from './components/NotFoundBlock/NotFoundBlock';
import Cart from './components/cart/Cart';


function App() {

  return (
    <div className="wrapper" >
      <Header />
      <div className="content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<NotFoundBlock />} />
          <Route path="cart" element={<Cart />} />/

        </Routes>
      </div>
    </div>
  )
}

export default App;
