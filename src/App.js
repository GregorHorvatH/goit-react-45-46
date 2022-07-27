import { Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import Navigation from './components/Navigation';

import Counter from './components/Counter';
import Home from './container/Home';
import Shop from './container/Shop';
import Cart from './container/Cart';
import ShopItemDetails from './container/ShopItemDetails';
import About from './container/About';

import useShopData from './hooks/useShopData';
import useCartData from './hooks/useCartData';

import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  const [items] = useShopData();
  const cartData = useCartData();

  const handleAddItemToCart = (itemId) => {
    console.log('add to cart:', itemId);
  };

  const handleViewShopItem = (itemId) => {
    // TODO: write code here
    console.log('view item details:', itemId);
  };

  return (
    <div className='App'>
      <Navigation />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route
          path='/shop'
          element={
            <Shop
              items={items}
              onAdd={handleAddItemToCart}
              onView={handleViewShopItem}
            />
          }
        />
        <Route
          path='/shop/:itemId'
          element={<ShopItemDetails items={items} />}
        />
        <Route path='/cart' element={<Cart {...cartData} />} />
        <Route path='/counter' element={<Counter />} />
        <Route path='/about' element={<About />} />
      </Routes>

      <ToastContainer />
    </div>
  );
};

export default App;

/* webpackChunkName: "counter" */
