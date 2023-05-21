import { Card } from 'presentation/components/Card';

import { useCharacters } from 'core/hooks/useCharacters';

import * as Styles from './styles';

export const Home: React.FC = () => {
  const { data, loading } = useCharacters();

  return (
    <Styles.List>
      {loading
        ? 'Loading...'
        : data?.map(({ image, name, id, species, gender, status }) => (
            <Card
              key={id}
              image={image}
              name={name}
              species={species}
              gender={gender}
              status={status}
            />
          ))}
    </Styles.List>
  );
};
