const CartInputForm = () => {
  // logic here....

  return (
    <div className='cart-input-form'>
      <form>
        <label>
          <span>name</span>
          <input type='text' />
        </label>

        <label>
          <span>price</span>
          <input type='number' />
        </label>

        <button type='submit'>+ add</button>
      </form>
    </div>
  );
};

export default CartInputForm;
