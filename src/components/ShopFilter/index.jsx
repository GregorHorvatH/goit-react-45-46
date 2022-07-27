import { useState, useEffect } from 'react';
import styles from './styles.module.css';

const ShopFilter = ({ onChange }) => {
  const [value, setValue] = useState('');

  const handleChangeInput = (e) => {
    setValue(e.target.value);
  };

  useEffect(() => {
    onChange(value.toLowerCase());

    // TODO: write code here
    console.log('filter:', value);
  }, [onChange, value]);

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
