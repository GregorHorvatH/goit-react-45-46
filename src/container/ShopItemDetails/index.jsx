import { useQuery } from '@tanstack/react-query';
import { useSelector } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';
import { getShopItem } from '../../api/shopApi';
import styles from './styles.module.css';

const ShopItemDetails = () => {
  const navigate = useNavigate();
  const { itemId } = useParams();
  const filter = useSelector((state) => state.filter.value);

  const { data: item } = useQuery(['shop/item'], getShopItem(itemId));

  const handleGoBack = () => {
    if (filter) {
      navigate(`/shop?filter=${filter}`);
    } else {
      navigate('/shop');
    }
  };

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
