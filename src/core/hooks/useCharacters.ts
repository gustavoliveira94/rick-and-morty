import { useEffect } from 'react';

import { ICharacter } from 'contracts/character';
import {
  CharactersinitialState,
  charactersSelector,
  getCharacters,
} from 'core/store/characters';
import { graphql } from 'config/graphql';

import { useDispatch } from './useDispatch';
import { useSelector } from './useSelector';

import { useQuery } from './useQuery';

const CHARACTERS_QUERY = graphql`
  query {
    characters {
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

interface IUseCharacters {
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

export const useCharacters = () => {
  const { data, loading } = useQuery<IUseCharacters>(CHARACTERS_QUERY);
  const dispatch = useDispatch();
  const { data: characters } =
    useSelector<CharactersinitialState['characters']>(charactersSelector);

  useEffect(() => {
    if (data?.characters?.results) {
      dispatch(getCharacters(data?.characters?.results));
    }
  }, [data?.characters?.results]);

  return {
    data: characters,
    loading,
  };
};
