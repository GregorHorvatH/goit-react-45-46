import propTypes from 'prop-types';
import { createUseStyles } from 'react-jss';
import { CloseButton } from '../Button';

const useStyles = createUseStyles({
  cartItem: {
    display: 'flex',
    padding: 10,
    alignItems: 'center',
    columnGap: 30,
    backgroundColor: '#bada55',
  },
  column: {
    display: 'flex',
    flexDirection: 'column',
  },
  counter: {
    display: 'flex',
    columnGap: 10,
  },
  value({ item }) {
    return {
      color: !item.count ? 'red' : 'green',
      fontWeight: !item.count ? 800 : 400,
    };
  },
});

const CartItem = ({ item }) => {
  const styles = useStyles({ item });
  const amount = item.count * item.price;

  return (
    <div className={styles.cartItem}>
      <div className={styles.column}>
        <span>{item.name}</span>
        <span>{item.price}$</span>
      </div>

      <div className={styles.counter}>
        <button>-</button>
        <span className={styles.value}>{item.count}</span>
        <button>+</button>
      </div>

      <span>{amount}$</span>
      <CloseButton item={item} />
    </div>
  );
};

CartItem.propTypes = {
  item: propTypes.shape({
    name: propTypes.string.isRequired,
    price: propTypes.number.isRequired,
    count: propTypes.number.isRequired,
  }),
};

export default CartItem;
