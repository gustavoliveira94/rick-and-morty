import { BounceLoader } from 'react-spinners';

import { Card, NotFound } from 'presentation/components';

import { useGetFavoriteCharacters } from 'core/hooks/useGetFavoriteCharacters';
import { useSetFavoriteCharacter } from 'core/hooks/useSetFavoriteCharacter';
import { isFavorite } from 'core/utils/isFavorite';

import * as Styles from './styles';

export const Favorites: React.FC = () => {
  const { data: characters, loading } = useGetFavoriteCharacters();

  const { favoriteCharacters, setFavoriteCharacter } =
    useSetFavoriteCharacter();

  const hasNotFavorites = !loading && !characters.length;

  return (
    <Styles.List>
      {loading ? (
        <BounceLoader data-testid="loading" color="#712512" />
      ) : (
        characters.map(({ image, name, id, species, gender, status }) => {
          return (
            <Card
              key={id}
              image={image}
              name={name}
              species={species}
              gender={gender}
              status={status}
              isFavorite={isFavorite({ favoriteCharacters, id })}
              setFavorite={() => setFavoriteCharacter(id)}
            />
          );
        })
      )}

      {hasNotFavorites ? (
        <NotFound text="You don't have favorite characters" />
      ) : null}
    </Styles.List>
  );
};
