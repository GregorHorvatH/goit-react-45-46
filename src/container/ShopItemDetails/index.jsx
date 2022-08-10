import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import styles from './styles.module.css';

const ShopItemDetails = () => {
  const navigate = useNavigate();
  const items = useSelector((state) => state.shop.items);
  const filter = useSelector((state) => state.filter.value);

  const [item, setItem] = useState();
  const { itemId } = useParams();

  const handleGoBack = () => {
    if (filter) {
      navigate(`/shop?filter=${filter}`);
    } else {
      navigate('/shop');
    }
  };

  useEffect(() => {
    // fetch...
    setItem(items.find(({ id }) => id === itemId));
  }, [items, itemId]);

  return item ? (
    <div className={styles.shopItemDetails}>
      <h4>Item Deails - id: {itemId}</h4>
      <h2>{item.name}</h2>
      <h3>${item.price}</h3>
      <img src={item.img} alt={item.name} />
      <button onClick={handleGoBack}>Back</button>
    </div>
  ) : (
    <div className={styles.shopItemDetails}>
      <p>
        no item found with id: <strong>{itemId}</strong>
      </p>
      <button onClick={handleGoBack}>Back</button>
    </div>
  );
};

export default ShopItemDetails;
