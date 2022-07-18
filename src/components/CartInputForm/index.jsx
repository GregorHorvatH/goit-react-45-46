import { useState } from 'react';
import Button from '../Button';
import useToggle from '../../hooks/useToggle';
import style from './style.module.scss';

const CartInputForm = ({ onSubmit }) => {
  const { visible, toggle } = useToggle();

  const [name, setName] = useState('');
  const [price, setPrice] = useState(0);
  const [extendedGuarantee, setExtendedGuarantee] = useState(false);

  const handleNameChange = (e) => setName(e.target.value);
  const handlePriceChange = (e) => setPrice(e.target.value);
  const handleEGChange = (e) => setExtendedGuarantee(e.target.checked);

  const handleSubmit = (e) => {
    e.preventDefault();

    onSubmit({
      // id: Date.now().toString(),
      count: 1,
      name,
      price: Number(price),
      extendedGuarantee,
    });

    setName('');
    setPrice(0);
    setExtendedGuarantee(false);
    // formRef.current.reset();
  };

  return (
    <div className={style.cartInputForm}>
      <button onClick={toggle}>Show/hide</button>

      {visible && (
        <form className={style.form} onSubmit={handleSubmit}>
          <label className={style.label}>
            <span>name</span>
            <input type='text' value={name} onChange={handleNameChange} />
          </label>

          <label className={style.label}>
            <span>price</span>
            <input type='number' value={price} onChange={handlePriceChange} />
          </label>

          <label className={style.label}>
            <span>extended guarantee</span>
            <input
              type='checkbox'
              checked={extendedGuarantee}
              onChange={handleEGChange}
            />
          </label>

          <Button type='submit'>+ add</Button>
        </form>
      )}
    </div>
  );
};

export default CartInputForm;
