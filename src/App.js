import { lazy, Suspense, useState } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import Navigation from './components/Navigation';

import useShopData from './hooks/useShopData';
import useCartData from './hooks/useCartData';

import 'react-toastify/dist/ReactToastify.css';

const Counter = lazy(() =>
  import('./components/Counter' /* webpackChunkName: "counter" */)
);
const Home = lazy(() =>
  import('./container/Home' /* webpackChunkName: "home" */)
);
const Shop = lazy(() =>
  import('./container/Shop' /* webpackChunkName: "shop" */)
);
const Cart = lazy(() =>
  import('./container/Cart' /* webpackChunkName: "cart" */)
);
const ShopItemDetails = lazy(() =>
  import('./container/ShopItemDetails' /* webpackChunkName: "item-details" */)
);
const About = lazy(() =>
  import('./container/About' /* webpackChunkName: "about" */)
);

const App = () => {
  const [filter, setFilter] = useState('');
  const [items] = useShopData();
  const cartData = useCartData();
  const navigate = useNavigate();

  const handleAddItemToCart = (itemId) => {
    console.log('add to cart:', itemId);
  };

  const handleViewShopItem = (itemId) => {
    navigate(`/shop/${itemId}`, { state: { filter } });
  };

  return (
    <div className='App'>
      <Navigation />

      <Suspense fallback={<p>lodaing...</p>}>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route
            path='/shop'
            element={
              <Shop
                items={items}
                onAdd={handleAddItemToCart}
                onView={handleViewShopItem}
                filter={filter}
                onFilter={setFilter}
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
      </Suspense>

      <ToastContainer />
    </div>
  );
};

export default App;
