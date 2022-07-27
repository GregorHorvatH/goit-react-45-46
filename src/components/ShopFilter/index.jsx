import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import styles from './styles.module.css';

const ShopFilter = ({ onChange }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [value, setValue] = useState(searchParams.get('filter') || '');

  const handleChangeInput = (e) => {
    setValue(e.target.value);
  };

  useEffect(() => {
    onChange(value.toLowerCase());
    setSearchParams({ filter: value });
  }, [onChange, value, setSearchParams]);

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
