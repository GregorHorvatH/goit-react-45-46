import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Button from '../Button';
import { addItem } from '../../redux/cart';
import styles from './styles.module.css';

const ShopItem = ({ item }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleItemCLick = () => {
    navigate(`/shop/${item.id}`);
  };

  const handleAddToCartClick = (e) => {
    e.stopPropagation();
    dispatch(
      addItem({
        id: item.id,
        name: item.name,
        price: item.price,
        count: 1,
        extendedGuarantee: false,
      })
    );
  };

  return (
    <div className={styles.shopItem} onClick={handleItemCLick}>
      <img className={styles.image} src={item.img} alt={item.name} />
      <span className={styles.name}>{item.name}</span>

      <div className={styles.footer}>
        <span className={styles.price}>${item.price}</span>
        <Button type='success' onClick={handleAddToCartClick}>
          Add to cart
        </Button>
      </div>
    </div>
  );
};

export default ShopItem;
