import CartInputForm from '../../components/CartInputForm';
import Loader from '../../components/Loader';
import CartItemList from '../../components/CartItemList';
import TotalAmount from '../../components/TotalAmount';
import useCartData from '../../hooks/useCartData';
import styles from './styles.module.css';

const Cart = () => {
  const {
    isLoading,
    items,
    error,
    handleChangeCount,
    handleRemoveItem,
    handleAddItem,
  } = useCartData();

  return (
    <div className={styles.cart}>
      <CartInputForm onSubmit={handleAddItem} />

      {isLoading && <Loader />}

      {error && <p>{error}</p>}

      <CartItemList
        items={items}
        onChangeCount={handleChangeCount}
        onRemoveItem={handleRemoveItem}
      />
      <TotalAmount items={items} />
    </div>
  );
};

export default Cart;
