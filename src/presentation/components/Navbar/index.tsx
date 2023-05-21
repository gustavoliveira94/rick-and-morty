import logo from 'presentation/assets/logo-white.webp';

import { Search } from './Search';

import * as Styles from './styles';

export const Navbar: React.FC = () => {
  return (
    <Styles.Navbar>
      <img className="logo" src={logo} alt="logo" />
      <Search />
    </Styles.Navbar>
  );
};
