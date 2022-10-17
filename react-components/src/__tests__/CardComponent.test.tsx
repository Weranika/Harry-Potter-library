import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import CardComponent from '../components/card/card';
import heroes from '../resources/heroes.json';

it('renders card', () => {
  const card = render(<CardComponent item={heroes[0]} />);

  expect(card.getByText(/Harry Potter/i)).toBeInTheDocument();
  expect(card.getByText(/Gryffindor/i)).toBeInTheDocument();
});

it('renders more info in card', () => {
  const card = render(<CardComponent item={heroes[0]} />);
  const button = screen.getByLabelText('show-more');

  fireEvent.click(button);

  expect(card.getByText(/male/i)).toBeInTheDocument();
  expect(card.getByText(/31-07-1980/i)).toBeInTheDocument();
  expect(card.getByText('1980')).toBeInTheDocument();
  expect(card.getByText(/green/i)).toBeInTheDocument();
  expect(card.getByText(/black/i)).toBeInTheDocument();
  expect(card.getByText(/stag/i)).toBeInTheDocument();
  expect(card.getByText(/Daniel Radcliffe/i)).toBeInTheDocument();
  expect(card.getByText(/holly/i)).toBeInTheDocument();
  expect(card.getByText(/phoenix feather/i)).toBeInTheDocument();
  expect(card.getByText(/11/i)).toBeInTheDocument();
});
