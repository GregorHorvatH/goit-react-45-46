import { useState, useEffect } from 'react';
import CartInputForm from '../../components/CartInputForm';
import Loader from '../../components/Loader';
import CartItemList from '../../components/CartItemList';
import TotalAmount from '../../components/TotalAmount';
import {
  fetchCartItems,
  deleteItem,
  addItem,
  updateItem,
} from '../../api/cartApi';
import { showSuccess } from '../../utils';
import styles from './styles.module.css';

const Cart = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [items, setItems] = useState([]);
  const [error, setError] = useState('');

  // +1, -1
  const handleChangeCount = (id, step) => {
    setItems((prev) =>
      prev.map((item) => {
        if (item.id === id) {
          const updatedItem = {
            ...item,
            count: item.count + step >= 0 ? item.count + step : item.count,
          };

          updateItem(id, { count: updatedItem.count }).then(() => {
            showSuccess('🦄 Wow so easy!');
          });

          return updatedItem;
        } else {
          return item;
        }
      })
    );
  };

  const handleRemoveItem = (id) => {
    setIsLoading(true);

    deleteItem(id)
      .then(() => {
        setItems((prev) => prev.filter((item) => item.id !== id));
      })
      .catch(({ message }) => setError(message))
      .finally(() => {
        setIsLoading(false);
      });
  };

  const handleAddItem = (newItem) => {
    setIsLoading(true);

    addItem(newItem)
      .then((data) => {
        setItems((prev) => [...prev, data]);
      })
      .catch(({ message }) => setError(message))
      .finally(() => {
        setIsLoading(false);
      });
  };

  useEffect(() => {
    setIsLoading(true);

    fetchCartItems()
      .then(setItems)
      .catch(({ message }) => setError(message))
      .finally(() => {
        setIsLoading(false);
      });
  }, []); // componentDidMount

  // useEffect(() => {
  // localStorage.setItem('cart', JSON.stringify(items));
  // updateItem();
  // }, [items]);

  return (
    <div className={styles.cart}>
      <CartInputForm onSubmit={handleAddItem} />

      {isLoading && <Loader />}

      {error && <p>{error}</p>}

      <CartItemList
        items={items}
        onChangeCount={handleChangeCount}
        onRemoveItem={handleRemoveItem}
      />
      <TotalAmount items={items} />
    </div>
  );
};

export default Cart;
