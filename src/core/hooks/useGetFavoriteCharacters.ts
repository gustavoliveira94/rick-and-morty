import { useEffect } from 'react';

import { ICharacter } from 'contracts/character';
import {
  CharactersinitialState,
  charactersFavoriteSelector,
  getFavoriteCharacter,
} from 'core/store/characters';
import { graphql } from 'config/graphql';

import { useDispatch } from './useDispatch';
import { useSelector } from './useSelector';

import { useQuery } from './useQuery';

const CHARACTERS_IDS_QUERY = graphql`
  query ($ids: [ID!]!) {
    charactersByIds(ids: $ids) {
      id
      name
      image
      gender
      species
      status
    }
  }
`;

interface IUseCharacters {
  charactersByIds: ICharacter[];
}

export const useGetFavoriteCharacters = () => {
  const ids = localStorage.getItem('favorites');

  const { data, loading } = useQuery<IUseCharacters>(CHARACTERS_IDS_QUERY, {
    variables: {
      ids,
    },
  });
  const dispatch = useDispatch();
  const { data: characters } = useSelector<
    CharactersinitialState['favoriteCharacters']
  >(charactersFavoriteSelector);

  useEffect(() => {
    if (data?.charactersByIds) {
      dispatch(getFavoriteCharacter(data?.charactersByIds));
    }
  }, [data?.charactersByIds]);

  return {
    data: characters,
    loading,
  };
};
