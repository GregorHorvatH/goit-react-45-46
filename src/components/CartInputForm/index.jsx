import Button from '../Button';
import style from './style.module.scss';

const CartInputForm = () => {
  // logic here....

  return (
    <div className={style.cartInputForm}>
      <form className={style.form}>
        <label className={style.label}>
          <span>name</span>
          <input type='text' />
        </label>

        <label className={style.label}>
          <span>price</span>
          <input type='number' />
        </label>

        <Button type='submit'>+ add</Button>
      </form>
    </div>
  );
};

export default CartInputForm;
