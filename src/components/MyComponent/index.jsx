import PropTypes from 'prop-types';
import './style.css';

const MyComponent = ({ randomNumbers = 0, children }) => {
  return (
    <div className='my-component'>
      <h3>Hello from my Component</h3>
      <p>{randomNumbers === 123 ? 'Hello' : randomNumbers}</p>

      {children}
    </div>
  );
};

MyComponent.propTypes = {
  randomNumbers: PropTypes.number,
};

// MyComponent.defaultProps = {
//   randomNumbers: 0,
// };

export default MyComponent;
