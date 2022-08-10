import { useSelector } from 'react-redux';
import ShopFilter from '../../components/ShopFilter';
import ShopItemList from '../../components/ShopItemList';
import styles from './styles.module.css';

const Shop = ({ onFilter = () => {} }) => {
  const items = useSelector((state) => state.shop.items);
  const filter = useSelector((state) => state.filter.value);
  const filteredItems = filter
    ? items.filter(({ name }) => name.toLowerCase().includes(filter))
    : items;

  return (
    <div className={styles.shop}>
      <h3>My Awesome Shop</h3>

      <ShopFilter onChange={onFilter} />
      <ShopItemList items={filteredItems} />
    </div>
  );
};

export default Shop;
