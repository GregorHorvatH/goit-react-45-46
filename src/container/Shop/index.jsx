import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import ShopFilter from '../../components/ShopFilter';
import ShopItemList from '../../components/ShopItemList';
import { fetchItems } from '../../store/shopApi';
import styles from './styles.module.css';

const Shop = ({ filter, onFilter, ...props }) => {
  const dispatch = useDispatch();
  const { items } = useSelector((state) => state.shop);
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
      <ShopItemList items={filteredItems} {...props} />
    </div>
  );
};

export default Shop;
