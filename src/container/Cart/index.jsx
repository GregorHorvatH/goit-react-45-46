import CartInputForm from '../../components/CartInputForm';
import Loader from '../../components/Loader';
import CartItemList from '../../components/CartItemList';
import TotalAmount from '../../components/TotalAmount';

import ErrorBoundary from '../../components/ErrorBoundary';
import TestComponent from '../../components/TestComponent';

const initialState = [
  { id: '1', name: 'printer', price: 110, count: 2 },
  { id: '2', name: 'RAM', price: 30, count: 0 },
  { id: '3', name: 'motherboard', price: 150, count: 1 },
];

const Cart = () => {
  // logic here....

  return (
    <div className='cart'>
      <CartInputForm />
      <Loader />
      <CartItemList items={initialState} />
      <TotalAmount items={initialState} />

      <ErrorBoundary>
        <TestComponent />
      </ErrorBoundary>
    </div>
  );
};

export default Cart;
