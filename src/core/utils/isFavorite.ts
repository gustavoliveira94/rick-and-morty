interface IIsFavorite {
  favoriteCharacters: string[];
  id: string;
}

export const isFavorite = ({ favoriteCharacters, id }: IIsFavorite) =>
  favoriteCharacters.some((favorite) => favorite === id);
