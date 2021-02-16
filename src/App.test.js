import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/Halo ubah sedikit dari ini untuk test CICD/i);
  expect(linkElement).toBeInTheDocument();
});
