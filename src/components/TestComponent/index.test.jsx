import { render, fireEvent, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import TestComponent from './index';

describe('TestComponent', () => {
  it('should render properly', () => {
    render(<TestComponent />);

    expect(screen.getByTestId('button')).toBeVisible();
    expect(screen.getByTestId('value')).toBeVisible();

    expect(screen.getByTestId('button')).toHaveTextContent('Push me (+)');
    expect(screen.getByTestId('value')).toHaveTextContent('10');
  });

  it('should handle click', () => {
    render(<TestComponent />);

    expect(screen.getByTestId('value')).toBeVisible();
    expect(screen.getByTestId('value')).toHaveTextContent('10');

    fireEvent.click(screen.getByTestId('button'));
    expect(screen.getByTestId('value')).toHaveTextContent('11');
  });
});
