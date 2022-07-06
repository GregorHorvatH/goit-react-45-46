import { useState } from 'react';
import CartInputForm from '../../components/CartInputForm';
import Loader from '../../components/Loader';
import CartItemList from '../../components/CartItemList';
import TotalAmount from '../../components/TotalAmount';
import styles from './styles.module.css';

const initialState = [
  {
    id: '183756',
    name: 'printer',
    price: 110,
    count: 2,
    extendedGuarantee: false,
  },
  { id: '212345', name: 'RAM', price: 30, count: 0, extendedGuarantee: false },
  {
    id: '323522',
    name: 'motherboard',
    price: 150,
    count: 1,
    extendedGuarantee: true,
  },
  {
    id: '434556',
    name: 'mouse',
    price: 15,
    count: 4,
    extendedGuarantee: false,
  },
];

const Cart = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [items, setItems] = useState(initialState);

  // +1, -1
  const handleChangeCount = (id, step) =>
    setItems((prev) =>
      prev.map((item) =>
        item.id === id
          ? {
              ...item,
              count: item.count + step >= 0 ? item.count + step : item.count,
            }
          : item
      )
    );

  const handleRemoveItem = (id) =>
    setItems((prev) => prev.filter((item) => item.id !== id));

  const handleAddItem = (newItem) => setItems((prev) => [...prev, newItem]);

  return (
    <div className={styles.cart}>
      <CartInputForm onSubmit={handleAddItem} />

      {isLoading && <Loader />}

      <CartItemList
        items={items}
        onChangeCount={handleChangeCount}
        onRemoveItem={handleRemoveItem}
        // onDecrement={handleDecrement}
        // onIncrement={handleIncrement}
      />
      <TotalAmount items={items} />
    </div>
  );
};

export default Cart;
