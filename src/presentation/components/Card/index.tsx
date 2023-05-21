/* eslint-disable jsx-a11y/no-static-element-interactions */
import { useSetFavoriteCharacter } from 'core/hooks/useSetFavoriteCharacter';

import * as Styles from './styles';

interface CardProps {
  name: string;
  image: string;
  gender: string;
  status: string;
  species: string;
  id: string;
}

export const Card: React.FC<CardProps> = ({
  id,
  image,
  name,
  gender,
  species,
  status,
}) => {
  const { favoriteCharacters, setFavoriteCharacter } =
    useSetFavoriteCharacter();

  const setFavorite = () => {
    const isFavorite = favoriteCharacters?.some((favorite) => favorite === id);

    return isFavorite ? (
      <i
        className="fa-solid fa-heart"
        onClick={() => setFavoriteCharacter(id)}
      />
    ) : (
      <i
        className="fa-regular fa-heart"
        onClick={() => setFavoriteCharacter(id)}
      />
    );
  };

  return (
    <Styles.Card>
      <img src={image} alt="character" />
      {setFavorite()}
      <Styles.Infos>
        <p title={name}>{name}</p>
        <small>Gender: {gender}</small>
        <small>Species: {species}</small>
        <small>Status: {status}</small>
      </Styles.Infos>
    </Styles.Card>
  );
};
