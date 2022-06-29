import propTypes from 'prop-types';

import CartItem from '../CartItem';
import styles from './style.module.css';

const CartItemList = ({ items }) => (
  <div className={styles.cartItemList}>
    {items.map((item) => (
      <CartItem key={item.id} item={item} />
    ))}
  </div>
);

CartItemList.propTypes = {
  items: propTypes.arrayOf(
    propTypes.shape({
      id: propTypes.string.isRequired,
    })
  ),
};

export default CartItemList;
