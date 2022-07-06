import PropTypes from 'prop-types';
import { createUseStyles } from 'react-jss';
import { CloseButton } from '../Button';

const useStyles = createUseStyles({
  cartItem: {
    display: 'flex',
    padding: 10,
    alignItems: 'center',
    columnGap: 30,
    // backgroundColor: '#bada55',
    backgroundColor: '#c9e0e6',
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

const CartItem = ({ item, onRemoveItem, onChangeCount }) => {
  const styles = useStyles({ item });
  const amount = item.count * item.price;

  const decrement = () => onChangeCount(item.id, -1);
  const increment = () => onChangeCount(item.id, 1);
  const remove = () => onRemoveItem(item.id);

  console.log('render item:', item.id);

  return (
    <div className={styles.cartItem}>
      <div className={styles.leftCol}>
        <span>{item.name}</span>
        <span>{item.price}$</span>
      </div>

      <div className={styles.counter}>
        <button onClick={decrement}>-</button>
        <span className={styles.value}>{item.count}</span>
        <button onClick={increment}>+</button>
      </div>

      <span className={styles.amount}>
        {amount}${item.extendedGuarantee && ' +10%'}
      </span>
      <CloseButton item={item} onClick={remove} />
    </div>
  );
};

CartItem.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    count: PropTypes.number.isRequired,
  }),
  onRemoveItem: PropTypes.func.isRequired,
  onChangeCount: PropTypes.func.isRequired,
  // onDecrement: PropTypes.func.isRequired,
  // onIncrement: PropTypes.func.isRequired,
};

export default CartItem;
