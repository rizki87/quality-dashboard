import { render, screen } from '@testing-library/react';
import App from './App';

test('renders comming soon link', () => {
  render(<App />);
  const h1Element = screen.getByText(/Wah Gwan, Soon Come/i);
  expect(h1Element).toBeInTheDocument();
});
