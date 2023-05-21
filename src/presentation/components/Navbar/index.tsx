import logo from 'presentation/assets/logo-white.webp';

import * as Styles from './styles';

export const Navbar: React.FC = () => {
  return (
    <Styles.Navbar>
      <img src={logo} alt="logo" />
    </Styles.Navbar>
  );
};
