// import { useState, useEffect } from 'react';
// import { useSearchParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { setFilter } from '../../store/actions';
import styles from './styles.module.css';

const ShopFilter = () => {
  const dispatch = useDispatch();
  const value = useSelector((state) => state.filter.value);

  // const [searchParams, setSearchParams] = useSearchParams();
  // const [value, setValue] = useState(searchParams.get('filter') || '');

  const handleChangeInput = (e) => {
    // setValue(e.target.value);
    dispatch(setFilter(e.target.value));
  };

  // useEffect(() => {
  // onChange(value.toLowerCase());
  // setSearchParams({ filter: filterValue });
  // }, [onChange, filterValue, setSearchParams]);

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
