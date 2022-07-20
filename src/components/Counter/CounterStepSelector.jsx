import { memo, forwardRef, useContext } from 'react';
import CounterContext from './counterContext';
import { setStep } from './actions';

const CounterStepSelector = (props, ref) => {
  const { state, dispatch } = useContext(CounterContext);
  const { step } = state;

  const onStepChange = (e) => dispatch(setStep(Number(e.target.value)));

  return (
    <select value={step} onChange={onStepChange} ref={ref}>
      <option value='1'>1</option>
      <option value='5'>5</option>
      <option value='10'>10</option>
      <option value='25'>25</option>
      <option value='50'>50</option>
      <option value='100'>100</option>
    </select>
  );
};

export const CounterStepSelectorMemoised = memo(
  forwardRef(CounterStepSelector)
);
