import { useState } from 'react';

const Counter = () => {
  const [value, setValue] = useState(10);

  const decrement = () => setValue((prev) => prev - 1);
  const increment = () => setValue((prev) => prev + 1);

  return (
    <div className='counter'>
      <CounterBody value={value} decrement={decrement} increment={increment} />
    </div>
  );
};

const CounterBody = ({ value, decrement, increment }) => (
  <>
    <button onClick={decrement}>-</button>
    <CounterValue value={value} />
    <button onClick={increment}>+</button>
  </>
);

const CounterValue = ({ value }) => <span>{value}</span>;

export default Counter;
