import {
  charactersFavoriteSelector,
  favoriteCharacter as favorite,
} from 'core/store/characters';

import { useDispatch } from './useDispatch';
import { useSelector } from './useSelector';

export const useFavoriteCharacter = () => {
  const dispatch = useDispatch();
  const { data: favoriteCharacters } = useSelector<string[]>(
    charactersFavoriteSelector,
  );

  const setFavoriteCharacter = (id: string) => {
    dispatch(favorite(id));
  };

  return {
    setFavoriteCharacter,
    favoriteCharacters,
  };
};
