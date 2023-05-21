import { Card } from 'presentation/components/Card';
import { Search } from 'presentation/pages/Home/components/Search';

import { useCharacters } from 'core/hooks/useCharacters';
import { useFilterCharacter } from 'core/hooks/useFilterCharacter';

import * as Styles from './styles';

export const Home: React.FC = () => {
  const { data: characters, loading: loadingCharacters } = useCharacters();
  const {
    data: filteredCharacters,
    loading: loadingFilterCharacters,
    isFiltered,
  } = useFilterCharacter();

  const loading = loadingCharacters || loadingFilterCharacters;
  const charactersData = isFiltered ? filteredCharacters : characters;

  return (
    <>
      <Search />
      <Styles.List>
        {loading
          ? 'Loading...'
          : charactersData?.map(
              ({ image, name, id, species, gender, status }) => {
                return (
                  <Card
                    key={id}
                    id={id}
                    image={image}
                    name={name}
                    species={species}
                    gender={gender}
                    status={status}
                  />
                );
              },
            )}
      </Styles.List>
    </>
  );
};
