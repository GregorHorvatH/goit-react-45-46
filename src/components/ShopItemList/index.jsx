import ShopItem from '../ShopItem';
import styles from './styles.module.css';

const ShopItemList = ({ items = [], ...props }) => (
  <div className={styles.shopItemList}>
    {items.map((item) => (
      <ShopItem item={item} key={item.id} {...props} />
    ))}
  </div>
);

export default ShopItemList;
