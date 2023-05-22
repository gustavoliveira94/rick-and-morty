import { fireEvent } from '@testing-library/react';

import { render } from 'config/tests/helper';

import { Favorites } from 'presentation/pages';

import characters from './mock.json';

let charactersData = characters;
let loading = false;

jest.mock('core/hooks/useGetFavoriteCharacters', () => ({
  useGetFavoriteCharacters: () => ({
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

describe('Testing <Favorites /> Page', () => {
  it('Should render characters', () => {
    const { getAllByTestId } = render(<Favorites />);

    expect(getAllByTestId('character')).toHaveLength(20);
  });

  it('Should click on favorite character', () => {
    const { queryAllByTestId } = render(<Favorites />);

    const favorite = queryAllByTestId('is-not-favorite')[0];

    fireEvent.click(favorite);
    expect(setFavoriteCharacter).toBeCalledTimes(1);
  });

  it('Should render characters', () => {
    charactersData = [];
    loading = true;

    const { getByText } = render(<Favorites />);

    expect(getByText('Loading...')).toBeInTheDocument();
  });
});
