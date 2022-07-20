import types from './types';

export const increment = () => ({ type: types.INCREMENT });
export const decrement = () => ({ type: types.DECREMENT });
export const setStep = (payload) => ({ type: types.SET_STEP, payload });
