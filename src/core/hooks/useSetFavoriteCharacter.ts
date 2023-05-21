import {
  charactersIdFavoriteSelector,
  setfavoriteCharacter as setFavorite,
} from 'core/store/characters';

import { useDispatch } from './useDispatch';
import { useSelector } from './useSelector';

export const useSetFavoriteCharacter = () => {
  const dispatch = useDispatch();
  const { data: favoriteCharacters } = useSelector<string[]>(
    charactersIdFavoriteSelector,
  );

  const setFavoriteCharacter = (id: string) => {
    dispatch(setFavorite(id));
  };

  return {
    setFavoriteCharacter,
    favoriteCharacters,
  };
};
