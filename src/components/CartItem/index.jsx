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
    justifyContent: 'space-between',
  },
  leftCol: {
    display: 'flex',
    flexDirection: 'column',
    minWidth: 100,
  },
  rightCol: {
    display: 'flex',
  },
  counter: {
    display: 'flex',
    columnGap: 10,
  },
  amount: {
    minWidth: 50,
    textAlign: 'right',
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
      <div className={styles.leftCol}>
        <span>{item.name}</span>
        <span>{item.price}$</span>
      </div>

      <div className={styles.counter}>
        <button>-</button>
        <span className={styles.value}>{item.count}</span>
        <button>+</button>
      </div>

      <span className={styles.amount}>{amount}$</span>
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
