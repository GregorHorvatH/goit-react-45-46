import { useEffect, useRef, useReducer } from 'react';
import CounterBody from './CounterBody';
import { CounterStepSelectorMemoised } from './CounterStepSelector';
import CounterContext from './counterContext';
import reducer from './reducer';

const initialState = {
  value: 1,
  step: 1,
};

const Counter = () => {
  const selectRef = useRef();
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    selectRef.current.focus();
  }, []);

  return (
    <CounterContext.Provider value={{ state, dispatch }}>
      <div className='counter'>
        <CounterBody />
        <CounterStepSelectorMemoised ref={selectRef} />
      </div>
    </CounterContext.Provider>
  );
};

export default Counter;
