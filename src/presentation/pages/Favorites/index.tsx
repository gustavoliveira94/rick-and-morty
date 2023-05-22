import { Card } from 'presentation/components/Card';

import { useGetFavoriteCharacters } from 'core/hooks/useGetFavoriteCharacters';
import { useSetFavoriteCharacter } from 'core/hooks/useSetFavoriteCharacter';
import { isFavorite } from 'core/utils/isFavorite';

import * as Styles from './styles';

export const Favorites: React.FC = () => {
  const { data: characters, loading } = useGetFavoriteCharacters();

  const { favoriteCharacters, setFavoriteCharacter } =
    useSetFavoriteCharacter();

  return (
    <Styles.List>
      {loading
        ? 'Loading...'
        : characters?.map(({ image, name, id, species, gender, status }) => {
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
          })}
    </Styles.List>
  );
};
