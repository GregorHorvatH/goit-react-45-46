import propTypes from 'prop-types';

import CartItem from '../CartItem';
import ErrorBoundary from '../ErrorBoundary';
import styles from './style.module.css';

const CartItemList = ({ items, ...rest }) => (
  <div className={styles.cartItemList}>
    {items.map((item) => (
      <ErrorBoundary key={item.id}>
        <CartItem item={item} {...rest} />
      </ErrorBoundary>
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
