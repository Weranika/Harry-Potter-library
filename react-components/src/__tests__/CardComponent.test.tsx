import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import CardComponent from '../components/Card/Card';
import hero from '../resources/hero.json';

it('renders card', () => {
  const card = render(<CardComponent item={hero[0].attributes} />);

  expect(card.getByText(/Harry James Potter/i)).toBeInTheDocument();
  expect(card.getByText(/Gryffindor/i)).toBeInTheDocument();
});

it('renders more info in card', () => {
  const card = render(<CardComponent item={hero[0].attributes} />);
  const button = screen.getByLabelText('show-more');

  fireEvent.click(button);

  expect(card.getByText(/male/i)).toBeInTheDocument();
  expect(
    card.getByText(
      /31 July 1980, Godric's Hollow, West Country, England, Great Britain/i
    )
  ).toBeInTheDocument();
  expect(card.getByText(/Bright green/i)).toBeInTheDocument();
  expect(card.getByText(/Jet-black/i)).toBeInTheDocument();
  expect(card.getByText(/Stag/i)).toBeInTheDocument();
});
