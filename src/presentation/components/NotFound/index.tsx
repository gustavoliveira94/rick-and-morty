import * as Styles from './styles';

interface NotFoundProps {
  text: string;
}

export const NotFound: React.FC<NotFoundProps> = ({ text }) => {
  return (
    <Styles.Container>
      <h3>{text}</h3>
    </Styles.Container>
  );
};
