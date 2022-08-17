import { useSelector } from 'react-redux';
import { useQuery } from '@tanstack/react-query';
import ShopFilter from '../../components/ShopFilter';
import ShopItemList from '../../components/ShopItemList';
import { getShopItems } from '../../api/shopApi';
import styles from './styles.module.css';

const Shop = ({ onFilter = () => {} }) => {
  const {
    data: items,
    isLoading,
    error,
  } = useQuery(['shop/items'], getShopItems);

  const filter = useSelector((state) => state.filter.value);
  const filteredItems = filter
    ? items.filter(({ name }) => name.toLowerCase().includes(filter))
    : items;

  return (
    <div className={styles.shop}>
      <h3>My Awesome Shop</h3>

      <ShopFilter onChange={onFilter} />
      {error && <p>{error}</p>}
      {isLoading ? <p>loading...</p> : <ShopItemList items={filteredItems} />}
    </div>
  );
};

export default Shop;
