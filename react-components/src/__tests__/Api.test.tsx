import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import heroes from '../resources/heroes.json';
import hero from '../resources/hero.json';
import Main from '../components/main/main';

async function mockFetch(url: RequestInfo | URL): Promise<Response> {
  console.log('enter to mock ', url);
  switch (url) {
    case 'https://api.potterdb.com/v1/characters': {
      console.log('mock list');
      return {
        ok: true,
        status: 200,
        json: async () => heroes,
      } as Response;
    }
    case 'https://api.potterdb.com/v1/characters?filter[name_cont_any]=Harry': {
      console.log('mock harry');
      return {
        ok: true,
        status: 200,
        json: async () => hero,
      } as Response;
    }
    default: {
      throw new Error(`Unhandled request: ${url}`);
    }
  }
}

beforeEach(() => {
  jest.spyOn(window, 'fetch').mockImplementation(mockFetch);
});

afterEach(() => {
  jest.restoreAllMocks();
});

test('renders main page', async () => {
  const main = render(<Main filteredItems={[]} />);
  expect(screen.getByRole('heading')).toHaveTextContent('Please wait some time...');

  await waitFor(() => screen.findByRole('text', { name: 'search-input' }));

  heroes.forEach((hero) => {
    expect(screen.getByText(hero.attributes.name)).toBeInTheDocument();
  });
});
