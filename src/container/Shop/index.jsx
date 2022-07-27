import ShopFilter from '../../components/ShopFilter';
import ShopItemList from '../../components/ShopItemList';
import styles from './styles.module.css';

const Shop = ({ items, filter, onFilter, ...props }) => {
  const filteredItems = filter
    ? items.filter(({ name }) => name.toLowerCase().includes(filter))
    : items;

  return (
    <div className={styles.shop}>
      <h3>My Awesome Shop</h3>

      <ShopFilter onChange={onFilter} />
      <ShopItemList items={filteredItems} {...props} />
    </div>
  );
};

export default Shop;
