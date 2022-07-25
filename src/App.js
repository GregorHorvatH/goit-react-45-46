import { Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Counter from './components/Counter';
import Item from './components/Item';
import Cart from './container/Cart';
import Home from './container/Home';
import About from './container/About';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  return (
    <div className='App'>
      <Navigation />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/item/:itemId' element={<Item />} />
        <Route path='/counter' element={<Counter />} />
        <Route path='/about' element={<About />} />
      </Routes>

      <ToastContainer />
    </div>
  );
};

export default App;
