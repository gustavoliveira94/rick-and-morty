import { Card } from 'presentation/components/Card';

import { useGetFavoriteCharacters } from 'core/hooks/useGetFavoriteCharacters';

import * as Styles from './styles';

export const Favorites: React.FC = () => {
  const { data: characters, loading } = useGetFavoriteCharacters();

  return (
    <Styles.List>
      {loading
        ? 'Loading...'
        : characters?.map(({ image, name, id, species, gender, status }) => {
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
          })}
    </Styles.List>
  );
};
