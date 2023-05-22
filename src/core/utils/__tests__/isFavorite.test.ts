import { isFavorite } from 'core/utils/isFavorite';

describe('Testing isFavorite utils', () => {
  it('Should render true', () => {
    expect(isFavorite({ id: '1', favoriteCharacters: ['1'] })).toBeTruthy();
  });

  it('Should render false', () => {
    expect(isFavorite({ id: '1', favoriteCharacters: ['2'] })).toBeFalsy();
  });
});
