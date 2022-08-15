import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';
import { fetchItem } from '../../redux/shopApi';
import styles from './styles.module.css';

const ShopItemDetails = () => {
  const dispatch = useDispatch();
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
    setItem(items.find(({ id }) => id === itemId));
  }, [items, itemId]);

  useEffect(() => {
    if (!items.length) {
      dispatch(fetchItem(itemId));
    }
  }, [dispatch, items, itemId]);

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
