import { sum, min, max } from './index';

describe('sum', () => {
  test('sum - should return number', () => {
    expect(sum(1, 1)).toEqual(2);
    expect(sum(1)).toEqual(1);
    expect(sum(-100, 20)).toEqual(-80);
  });

  test('sum - should return zero', () => {
    expect(sum()).toEqual(0);
  });
});

describe('min', () => {
  test('min - should return minimum value', () => {
    expect(min([4, 2, 3])).toEqual(2);
  });

  test('min - when no value', () => {
    expect(min([])).toBeUndefined();
    expect(min()).toBeUndefined();
  });
});

describe('max', () => {
  test('max - should return minimum value', () => {
    expect(max([4, 2, 3])).toEqual(4);
  });

  test('max - when no value', () => {
    expect(max([])).toBeUndefined();
    expect(max()).toBeUndefined();
  });
});
