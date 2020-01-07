import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import ContextExample from './ContextExample';

describe('Testing hooks intro', () => {
  it('should renders an styled button', () => {
    const { getByText } = render(<ContextExample />);
    const buttonElement = getByText(/> I am styled by theme context!/i);
    expect(buttonElement).toBeInTheDocument();
    expect(buttonElement.classList.contains('dark')).toBe(true);
  });
});

