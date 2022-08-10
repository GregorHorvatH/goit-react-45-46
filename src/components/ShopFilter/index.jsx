import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useSearchParams } from 'react-router-dom';
import { setFilter } from '../../redux/filter';
import styles from './styles.module.css';

const ShopFilter = () => {
  const dispatch = useDispatch();
  const value = useSelector((state) => state.filter.value);
  const [searchParams, setSearchParams] = useSearchParams();

  const handleChangeInput = (e) => {
    dispatch(setFilter(e.target.value));
  };

  useEffect(() => {
    setSearchParams({ filter: value });
  }, [value, setSearchParams]);

  return (
    <label className={styles.filter}>
      <span>Filter</span>
      <input
        type='text'
        name='filter'
        placeholder='enter item name here...'
        value={value}
        onChange={handleChangeInput}
      />
    </label>
  );
};

export default ShopFilter;
