import { useState } from 'react';
import CartInputForm from '../../components/CartInputForm';
import Loader from '../../components/Loader';
import CartItemList from '../../components/CartItemList';
import TotalAmount from '../../components/TotalAmount';
import styles from './styles.module.css';

const initialState = [
  { id: '183756', name: 'printer', price: 110, count: 2 },
  { id: '212345', name: 'RAM', price: 30, count: 0 },
  { id: '323522', name: 'motherboard', price: 150, count: 1 },
  { id: '434556', name: 'mouse', price: 15, count: 4 },
];

const Cart = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [items, setItems] = useState(initialState);

  // const handleDecrement = (id) =>
  //   setItems((prev) =>
  //     prev.map((item) =>
  //       item.id === id
  //         ? {
  //             ...item,
  //             count: item.count > 0 ? item.count - 1 : 0,
  //           }
  //         : item
  //     )
  //   );

  // const handleIncrement = (id) =>
  //   setItems((prev) =>
  //     prev.map((item) =>
  //       item.id === id
  //         ? {
  //             ...item,
  //             count: item.count + 1,
  //           }
  //         : item
  //     )
  //   );

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

  return (
    <div className={styles.cart}>
      <CartInputForm />

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
