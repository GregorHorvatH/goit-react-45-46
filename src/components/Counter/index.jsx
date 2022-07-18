import { useState, useCallback } from 'react';
import CounterBody from './CounterBody';
import CounterStepSelector from './CounterStepSelector';

const Counter = () => {
  const [value, setValue] = useState(0);
  const [step, setStep] = useState(1);

  const decrement = () => setValue((prev) => prev - step);
  const increment = () => setValue((prev) => prev + step);

  const handleStepChange = useCallback(
    (e) => setStep(Number(e.target.value)),
    []
  );

  return (
    <div className='counter'>
      <CounterBody
        value={value}
        onDecrement={decrement}
        onIncrement={increment}
      />

      <CounterStepSelector step={step} onStepChange={handleStepChange} />
    </div>
  );
};

export default Counter;
