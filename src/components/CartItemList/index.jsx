import propTypes from 'prop-types';

import CartItem from '../CartItem';
import ErrorBoundary from '../ErrorBoundary';
import useToggle from '../../hooks/useToggle';
import styles from './style.module.css';

const CartItemList = ({ items, ...rest }) => {
  const { visible, toggle } = useToggle();

  return (
    <div className={styles.cartItemList}>
      <button onClick={toggle}>Show/Hide</button>

      {visible &&
        items.map((item) => (
          <ErrorBoundary key={item.id}>
            <CartItem item={item} {...rest} />
          </ErrorBoundary>
        ))}
    </div>
  );
};

CartItemList.propTypes = {
  items: propTypes.arrayOf(
    propTypes.shape({
      id: propTypes.string.isRequired,
    })
  ),
};

export default CartItemList;
