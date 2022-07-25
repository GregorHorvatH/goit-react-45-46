import { useContext } from 'react';
import CounterContext from './counterContext';
import { increment, decrement } from './actions';

const CounterBody = () => {
  const { state, dispatch } = useContext(CounterContext);
  const { value } = state;

  const onDecrement = () => dispatch(decrement());
  const onIncrement = () => dispatch(increment());

  return (
    <>
      <button onClick={onDecrement}>-</button>
      <span>{value}</span>
      <button onClick={onIncrement}>+</button>
    </>
  );
};

export default CounterBody;
