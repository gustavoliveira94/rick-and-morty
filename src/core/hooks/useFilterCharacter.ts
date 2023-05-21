import { useEffect } from 'react';

import { ICharacter } from 'contracts/character';
import {
  CharactersinitialState,
  characterFilterSelector,
  filterCharacter,
} from 'core/store/characters';
import { graphql } from 'config/graphql';

import { useDispatch } from './useDispatch';
import { useSelector } from './useSelector';

import { useLazyQuery } from './useLazyQuery';

const CHARACTER_FILTER_QUERY = graphql`
  query ($name: String!) {
    characters(filter: { name: $name }) {
      info {
        count
        pages
        next
        prev
      }
      results {
        id
        name
        image
        gender
        species
        status
      }
    }
  }
`;

interface IUseCharacterFilter {
  characters: {
    info: {
      count: number;
      pages: number;
      next: number;
      prev: number | null;
    };
    results: ICharacter[];
  };
}

export const useFilterCharacter = () => {
  const { dispatch } = useDispatch();
  const { data, setQuery, loading } = useLazyQuery<IUseCharacterFilter>(
    CHARACTER_FILTER_QUERY,
  );
  const { data: characters } = useSelector<
    CharactersinitialState['filterCharacter']
  >(characterFilterSelector);

  useEffect(() => {
    if (data?.characters?.results) {
      dispatch(filterCharacter(data?.characters?.results));
    }
  }, [data?.characters?.results]);

  return {
    data: characters,
    filterCharacter: (name: string) => setQuery({ variables: { name } }),
    loading,
  };
};
