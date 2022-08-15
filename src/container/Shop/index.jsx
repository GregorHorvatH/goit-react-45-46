import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import ShopFilter from '../../components/ShopFilter';
import ShopItemList from '../../components/ShopItemList';
import { fetchItems } from '../../redux/shopApi';
import styles from './styles.module.css';

const Shop = ({ onFilter = () => {} }) => {
  const dispatch = useDispatch();
  const { items, isLoading, error } = useSelector((state) => state.shop);
  const filter = useSelector((state) => state.filter.value);
  const filteredItems = filter
    ? items.filter(({ name }) => name.toLowerCase().includes(filter))
    : items;

  useEffect(() => {
    dispatch(fetchItems());
  }, []);

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
