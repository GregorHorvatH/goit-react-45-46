// import Cart from './container/Cart';
import Counter from './components/Counter';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  return (
    <div className='App'>
      <ToastContainer />
      {/* <Cart /> */}
      <Counter />
    </div>
  );
};

export default App;
