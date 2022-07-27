import CartInputForm from '../../components/CartInputForm';
import Loader from '../../components/Loader';
import CartItemList from '../../components/CartItemList';
import TotalAmount from '../../components/TotalAmount';
import styles from './styles.module.css';

const Cart = ({
  isLoading,
  items,
  error,
  handleChangeCount,
  handleRemoveItem,
  handleAddItem,
}) => {
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
