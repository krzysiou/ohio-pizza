import { render, screen } from '@testing-library/react';
import Home from './Home';

test('renders paragraph', () => {
  render(<Home />);
  const paragraph = screen.getByText(/Hello/i);
  expect(paragraph).toBeInTheDocument();
});
