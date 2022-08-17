import CartInputForm from '../../components/CartInputForm';
import Loader from '../../components/Loader';
import CartItemList from '../../components/CartItemList';
import TotalAmount from '../../components/TotalAmount';
import useCartData from '../../hooks/useCartData';
import { useGetCartItemsQuery } from '../../redux/cartApi';
import styles from './styles.module.css';

const Cart = () => {
  const { handleChangeCount, handleRemoveItem, handleAddItem } = useCartData();
  const { data: items = [], error, isLoading } = useGetCartItemsQuery();

  if (isLoading) return <p>loading...</p>;

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
