import { memo } from 'react';

const CounterStepSelector = ({ step, onStepChange }) => {
  console.log('render step selector');

  return (
    <select value={step} onChange={onStepChange}>
      <option value='1'>1</option>
      <option value='5'>5</option>
      <option value='10'>10</option>
      <option value='25'>25</option>
      <option value='50'>50</option>
      <option value='100'>100</option>
    </select>
  );
};

export default memo(CounterStepSelector);
