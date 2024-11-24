// src/__tests__/TodoList.test.js
import { render, screen, fireEvent } from '@testing-library/react';
import TodoList from './TodoList';

test('renders TodoList component correctly', () => {
  render(<TodoList />);

  // Check if initial todos are rendered
  expect(screen.getByText(/Learn React/i)).toBeInTheDocument();
  expect(screen.getByText(/Learn Jest/i)).toBeInTheDocument();
});

test('adds a new todo when input is provided and button is clicked', () => {
  render(<TodoList />);

  // Input and Add Todo Button
  const input = screen.getByPlaceholderText(/Add a new todo/i);
  const button = screen.getByText(/Add Todo/i);

  // Simulate user typing a new todo
  fireEvent.change(input, { target: { value: 'Learn Testing' } });
  fireEvent.click(button);

  // Check if the new todo is added
  expect(screen.getByText(/Learn Testing/i)).toBeInTheDocument();
});

test('toggles the todo completed state when clicked', () => {
  render(<TodoList />);

  const todoText = screen.getByText(/Learn React/i);
  
  // Toggle the todo (simulate a click)
  fireEvent.click(todoText);

  // Check if the todo text is struck-through after toggle
  expect(todoText).toHaveStyle('text-decoration: line-through');
});

test('deletes a todo when delete button is clicked', () => {
  render(<TodoList />);

  const deleteButton = screen.getAllByText(/Delete/i)[0];  // Grab the first delete button
  
  fireEvent.click(deleteButton);

  // Check if the todo is removed from the list
  expect(screen.queryByText(/Learn React/i)).not.toBeInTheDocument();
});
