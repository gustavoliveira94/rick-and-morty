/* eslint-disable jsx-a11y/no-static-element-interactions */

import * as Styles from './styles';

interface CardProps {
  name: string;
  image: string;
  gender: string;
  status: string;
  species: string;
  isFavorite: boolean;
  setFavorite: () => void;
}

export const Card: React.FC<CardProps> = ({
  image,
  name,
  gender,
  species,
  status,
  isFavorite,
  setFavorite,
}) => {
  const favorite = () => {
    return isFavorite ? (
      <i className="fa-solid fa-heart" onClick={() => setFavorite()} />
    ) : (
      <i className="fa-regular fa-heart" onClick={() => setFavorite()} />
    );
  };

  return (
    <Styles.Card>
      <img src={image} alt="character" loading="lazy" />
      {favorite()}
      <Styles.Infos>
        <p title={name}>{name}</p>
        <small>Gender: {gender}</small>
        <small>Species: {species}</small>
        <small>Status: {status}</small>
      </Styles.Infos>
    </Styles.Card>
  );
};
