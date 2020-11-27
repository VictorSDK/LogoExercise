import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const logoElement = screen.getAllByAltText(/logo/i);
  expect(logoElement[0]).toBeInTheDocument();
});
