import CartInputForm from '../../components/CartInputForm';
// import Loader from '../../components/Loader';
import CartItemList from '../../components/CartItemList';
import TotalAmount from '../../components/TotalAmount';
import styles from './styles.module.css';

import { useSelector } from 'react-redux';

const Cart = ({
  // isLoading,
  // items,
  error,
  handleChangeCount,
  handleRemoveItem,
  handleAddItem,
}) => {
  const items = useSelector((state) => state.cart.items);

  return (
    <div className={styles.cart}>
      <CartInputForm onSubmit={handleAddItem} />

      {/* {isLoading && <Loader />} */}

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
