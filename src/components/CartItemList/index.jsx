import propTypes from 'prop-types';

import CartItem from '../CartItem';

const CartItemList = ({ items }) => (
  <div className='cart-item-list'>
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
