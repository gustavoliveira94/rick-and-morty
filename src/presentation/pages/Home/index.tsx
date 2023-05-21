import { Card } from 'presentation/components/Card';

import { useCharacters } from 'core/hooks/useCharacters';
import { useFilterCharacter } from 'core/hooks/useFilterCharacter';

import { useFavoriteCharacter } from 'core/hooks/useFavoriteCharacter';
import * as Styles from './styles';

export const Home: React.FC = () => {
  const { data: characters, loading: loadingCharacters } = useCharacters();
  const { data: filteredCharacters, loading: loadingFilterCharacters } =
    useFilterCharacter();
  const { favoriteCharacters, setFavoriteCharacter } = useFavoriteCharacter();

  const loading = loadingCharacters || loadingFilterCharacters;
  const charactersData = filteredCharacters.length
    ? filteredCharacters
    : characters;

  return (
    <Styles.List>
      {loading
        ? 'Loading...'
        : charactersData?.map(
            ({ image, name, id, species, gender, status }) => {
              const isFavorite = favoriteCharacters?.some(
                (favorite) => favorite === id,
              );

              return (
                <Card
                  key={id}
                  image={image}
                  name={name}
                  species={species}
                  gender={gender}
                  status={status}
                  favorite={isFavorite}
                  setFavoriteCharacter={() => setFavoriteCharacter(id)}
                />
              );
            },
          )}
    </Styles.List>
  );
};
