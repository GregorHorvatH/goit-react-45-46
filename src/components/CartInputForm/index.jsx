import style from './style.module.scss';

const CartInputForm = () => {
  // logic here....

  return (
    <div className={style.cartInputForm}>
      <form>
        <label className={style.label}>
          <span>name</span>
          <input type='text' />
        </label>

        <label className={style.label}>
          <span>price</span>
          <input type='number' />
        </label>

        <button type='submit'>+ add</button>
      </form>
    </div>
  );
};

export default CartInputForm;
