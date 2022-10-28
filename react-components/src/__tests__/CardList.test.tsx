import React from 'react';
import { render, screen, within } from '@testing-library/react';
import CardList from '../components/CardList/cardList';
import heroes from '../resources/heroes.json';

it('should render list of 9 heroes', () => {
  render(<CardList filteredItems={heroes} />);
  const list = screen.getByRole('list');
  const { getAllByRole } = within(list);
  const items = getAllByRole('listitem');
  expect(items.length).toBe(7);
});
