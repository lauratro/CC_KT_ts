import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import Logout from "./components/Logout/Logout"

/* test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
 */
test('renders learn react link', () => {
  render(<Logout/>);
  const linkElement = screen.getByText("Logout");
  expect(linkElement).toBeInTheDocument();
})