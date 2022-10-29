import React from 'react';
import { render, screen, waitFor, fireEvent } from '@testing-library/react';
import heroes from '../resources/heroes.json';
import hero from '../resources/hero.json';
import Main from '../components/main/main';
import { IData } from 'global/interfaces';
import { act } from 'react-dom/test-utils';

async function mockFetch(url: RequestInfo | URL): Promise<Response> {
  console.log('enter to mock ', url);
  switch (url) {
    case 'https://api.potterdb.com/v1/characters?filter[name_cont_any]=Harry': {
      console.log('mock harry');
      return {
        ok: true,
        status: 200,
        json: () => Promise.resolve({ data : hero}),
      } as Response;
    }
    case 'https://api.potterdb.com/v1/characters': {
      console.log('mock list');
      return {
        ok: true,
        status: 200,
        json: () => Promise.resolve({ data : heroes}),
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

test('renders main page heroes list', async () => {
  render(<Main filteredItems={[]} />);
  expect(screen.getByRole('heading')).toHaveTextContent('Please wait some time...');
  await waitFor(() => expect(screen.getByText("Abraham Potter")).toBeInTheDocument());

  heroes.filter((hero) => hero.attributes.image !== null).forEach((hero) => {
    expect(screen.getByText(hero.attributes.name)).toBeInTheDocument();
  });
});

test('render input in main', async () => {
  render(<Main filteredItems={[]} />);
  await waitFor(() => expect(screen.getByText("Abraham Potter")).toBeInTheDocument());

  const inputEl = screen.getByTestId("search-input");
  expect(inputEl).toBeInTheDocument();
  expect(inputEl).toHaveAttribute("type", "text");
  expect(inputEl).toHaveAttribute("autoComplete", "off");
});

test('render search hero in main', async () => {
  render(<Main filteredItems={[]} />);

  const inputValue = 'Harry';
  //const harry: IData = hero as IData;
  await waitFor(() => expect(screen.getByTestId("search-input")).toBeInTheDocument());
  const inputEl = screen.getByTestId("search-input");
  
  fireEvent.change(inputEl, {target: {value: inputValue}});
  
  await waitFor(() => expect(screen.getByText('Harry James Potter')).toBeInTheDocument());
  
  expect(screen.getByText(hero[0].attributes.name)).toBeInTheDocument();
});
