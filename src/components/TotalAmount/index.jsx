import propTypes from 'prop-types';

const TotalAmount = ({ items }) => {
  const total = items.reduce((acc, item) => acc + item.count * item.price, 0);

  return <p>Total: {total}$</p>;
};

TotalAmount.propTypes = {
  items: propTypes.arrayOf(
    propTypes.shape({
      count: propTypes.number.isRequired,
      price: propTypes.number.isRequired,
    })
  ),
};

export default TotalAmount;
