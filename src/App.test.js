import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';

test('renders exercise menu', () => {
  render(<App />);
  expect(screen.getByText(/exercise tracker/i)).toBeInTheDocument();
  expect(screen.getByText(/push-ups/i)).toBeInTheDocument();
  expect(screen.getByText(/running/i)).toBeInTheDocument();
});

test('clicking a repetition exercise shows counter', async () => {
  render(<App />);
  await userEvent.click(screen.getByText(/push-ups/i));
  expect(screen.getByText(/push-ups/i)).toBeInTheDocument();
  expect(screen.getByText(/add rep/i)).toBeInTheDocument();
  expect(screen.getByText(/reset/i)).toBeInTheDocument();
});

test('clicking a duration exercise shows timer', async () => {
  render(<App />);
  await userEvent.click(screen.getByText(/running/i));
  expect(screen.getByText(/running/i)).toBeInTheDocument();
  expect(screen.getByText(/start/i)).toBeInTheDocument();
  expect(screen.getByText(/reset/i)).toBeInTheDocument();
});

