import * as Styles from './styles';

interface CardProps {
  name: string;
  image: string;
  gender: string;
  status: string;
  species: string;
}

export const Card: React.FC<CardProps> = ({
  image,
  name,
  gender,
  species,
  status,
}) => {
  return (
    <Styles.Card>
      <img src={image} alt="character" />
      <Styles.Infos>
        <p>{name}</p>
        <small>Gender: {gender}</small>
        <small>Species: {species}</small>
        <small>Status: {status}</small>
      </Styles.Infos>
    </Styles.Card>
  );
};
