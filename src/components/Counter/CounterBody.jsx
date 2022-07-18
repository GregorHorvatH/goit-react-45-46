import { memo } from 'react';

const CounterBody = ({ value, onIncrement, onDecrement }) => {
  console.log('render counter body');

  return (
    <>
      <button onClick={onDecrement}>-</button>
      <span>{value}</span>
      <button onClick={onIncrement}>+</button>
    </>
  );
};

// isEqual
export default memo(CounterBody, (prevProps, nextProps) => {
  return prevProps.value === nextProps.value;
});
