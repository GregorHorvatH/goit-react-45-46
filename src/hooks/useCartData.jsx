import { useState, useEffect, useCallback } from 'react';
import {
  fetchCartItems,
  deleteItem,
  addItem,
  updateItem,
} from '../api/cartApi';
import { showSuccess } from '../utils';

const useCartData = (defaultIsLoading = false) => {
  const [isLoading, setIsLoading] = useState(defaultIsLoading);
  const [items, setItems] = useState([]);
  const [error, setError] = useState('');

  // +1, -1
  const handleChangeCount = useCallback(
    (id, step) => {
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
    },
    [setItems]
  );

  const handleRemoveItem = useCallback(
    (id) => {
      setIsLoading(true);

      deleteItem(id)
        .then(() => {
          setItems((prev) => prev.filter((item) => item.id !== id));
        })
        .catch(({ message }) => setError(message))
        .finally(() => {
          setIsLoading(false);
        });
    },
    [setIsLoading]
  );

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

  const loadData = async () => {
    setIsLoading(true);

    try {
      const data = await fetchCartItems();

      setItems(data);
      setIsLoading(false);
    } catch ({ message }) {
      setError(message);
    }
  };

  useEffect(() => {
    loadData();
  }, []); // componentDidMount

  return {
    isLoading,
    items,
    error,
    handleChangeCount,
    handleRemoveItem,
    handleAddItem,
  };
};

export default useCartData;
