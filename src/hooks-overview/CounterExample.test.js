import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import CounterExample from './CounterExample';

describe('Testing hooks intro', () => {

  it('should renders a Click me button', () => {
    const { getByText } = render(<CounterExample />);
    const buttonElement = getByText(/click me/i);
    expect(buttonElement).toBeInTheDocument();
  });
  
  it('should renders a Counter', () => {
    const { getByText } = render(<CounterExample />);
    const counterElement = getByText(/You clicked 0 times./i);
    expect(counterElement).toBeInTheDocument();
  });

  it('should renders a Counter + 1', () => {
    const { getByText } = render(<CounterExample />);
    fireEvent.click(getByText(/click me/i));
    const counterElement = getByText(/You clicked 1 times./i);
    expect(counterElement).toBeInTheDocument();
  });

  it('should change the page title', () => {
    const title = document.title;
    expect(title).toMatch(/You clicked [0-9] times./i)
  })
});

