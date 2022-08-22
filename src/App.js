import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import Navigation from './components/Navigation';

// import useShopData from './hooks/useShopData';
// import useCartData from './hooks/useCartData';

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
// const Login = lazy(() =>
//   import('./container/Login' /* webpackChunkName: "login" */)
// );
// const Logout = lazy(() =>
//   import('./container/Logout' /* webpackChunkName: "logout" */)
// );

const App = () => {
  return (
    <div className='App'>
      <Navigation />

      <Suspense fallback={<p>loading...</p>}>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/shop' element={<Shop />} />
          <Route path='/shop/:itemId' element={<ShopItemDetails />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/counter' element={<Counter />} />
          <Route path='/about' element={<About />} />
          {/* <Route path='/login' element={<Login />} /> */}
          {/* <Route path='/logout' element={<Logout />} /> */}
        </Routes>
      </Suspense>

      <ToastContainer />
    </div>
  );
};

export default App;
