import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from './App';

describe('App', () => {
  test('renders header text', () => {
    render(<App />);
    const headerElement = screen.getByText(/Reward Points Calculator/i);
    expect(headerElement).toBeInTheDocument();
  });
});
