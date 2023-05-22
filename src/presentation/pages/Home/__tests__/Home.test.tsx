import { fireEvent } from '@testing-library/react';

import { render } from 'config/tests/helper';

import { Home } from 'presentation/pages';

import characters from './mock.json';

let charactersData = characters;
let loading = false;

jest.mock('core/hooks/useCharacters', () => ({
  useCharacters: () => ({
    data: charactersData,
    loading,
  }),
}));

const setFavoriteCharacter = jest.fn();

jest.mock('core/hooks/useSetFavoriteCharacter', () => ({
  useSetFavoriteCharacter: () => ({
    favoriteCharacters: [],
    setFavoriteCharacter,
  }),
}));

describe('Testing <Home /> Page', () => {
  it('should render characters', () => {
    const { getAllByTestId } = render(<Home />);

    expect(getAllByTestId('character')).toHaveLength(20);
  });

  it('Should click on favorite character', () => {
    const { queryAllByTestId } = render(<Home />);

    const favorite = queryAllByTestId('is-not-favorite')[0];

    fireEvent.click(favorite);
    expect(setFavoriteCharacter).toBeCalledTimes(1);
  });

  it('Should render not found', () => {
    charactersData = [];
    loading = false;

    const { getByText } = render(<Home />);

    expect(getByText('Character not found!')).toBeInTheDocument();
  });

  it('Should render loading', () => {
    charactersData = [];
    loading = true;

    const { getByTestId } = render(<Home />);

    expect(getByTestId('loading')).toBeInTheDocument();
  });
});
