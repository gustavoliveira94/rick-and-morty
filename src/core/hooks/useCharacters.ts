import { useEffect } from 'react';

import { ICharacter } from 'contracts/character';
import {
  CharactersinitialState,
  charactersSelector,
  filterNameCharacterSelector,
  getCharacters,
  setFilterName,
} from 'core/store/characters';
import { graphql } from 'config/graphql';

import { useDispatch } from './useDispatch';
import { useSelector } from './useSelector';
import { useLazyQuery } from './useLazyQuery';

const CHARACTERS_QUERY = graphql`
  query ($page: Int, $filter: FilterCharacter) {
    characters(page: $page, filter: $filter) {
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
  const dispatch = useDispatch();

  const { data, loading, setQuery } =
    useLazyQuery<IUseCharacters>(CHARACTERS_QUERY);

  const { data: characters } =
    useSelector<CharactersinitialState['characters']>(charactersSelector);

  const { data: filterName } = useSelector<
    CharactersinitialState['filterName']
  >(filterNameCharacterSelector);

  useEffect(() => {
    setQuery();
  }, []);

  useEffect(() => {
    if (data?.characters?.results) {
      dispatch(getCharacters(data?.characters?.results));
    }
  }, [data?.characters?.results]);

  const handleFilterName = ({ name }: { name: string }) => {
    dispatch(setFilterName(name));
    setQuery({ variables: { filter: { name } } });
  };

  const handlePagination = ({ page }: { page?: number }) => {
    setQuery({ variables: { page, filter: { name: filterName } } });
  };

  return {
    data: characters,
    pagination: data?.characters.info,
    loading,
    handleFilterName,
    handlePagination,
  };
};
