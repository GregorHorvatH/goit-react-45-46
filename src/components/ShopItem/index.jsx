import { useDispatch } from 'react-redux';
import Button from '../Button';
import { addCartItem } from '../../store/actions';
import styles from './styles.module.css';

const ShopItem = ({ item, onAdd, onView }) => {
  const dispatch = useDispatch();

  const handleItemCLick = () => {
    onView(item.id);
  };

  // const handleAddToCartClick = (e) => {
  //   e.stopPropagation();
  //   onAdd(item.id);
  // };

  const handleAddToCartClick = (e) => {
    e.stopPropagation();

    dispatch(
      addCartItem({
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
