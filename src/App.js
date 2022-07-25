import Navigation from './components/Navigation';
import Counter from './components/Counter';
import Cart from './container/Cart';
import Home from './container/Home';
import About from './container/About';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  const { pathname } = window.location;

  return (
    <div className='App'>
      <Navigation />

      {pathname === '/' && <Home />}
      {pathname === '/cart' && <Cart />}
      {pathname === '/counter' && <Counter />}
      {pathname === '/about' && <About />}

      <ToastContainer />
    </div>
  );
};

export default App;
