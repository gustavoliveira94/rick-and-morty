/* eslint-disable jsx-a11y/no-static-element-interactions */
import * as Styles from './styles';

interface CardProps {
  name: string;
  image: string;
  gender: string;
  status: string;
  species: string;
  favorite: boolean;
  setFavoriteCharacter: () => void;
}

export const Card: React.FC<CardProps> = ({
  image,
  name,
  gender,
  species,
  status,
  favorite,
  setFavoriteCharacter,
}) => {
  const setFavorite = () => {
    return favorite ? (
      <i className="fa-solid fa-heart" onClick={() => setFavoriteCharacter()} />
    ) : (
      <i
        className="fa-regular fa-heart"
        onClick={() => setFavoriteCharacter()}
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
