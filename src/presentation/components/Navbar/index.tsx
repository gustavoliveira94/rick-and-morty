import { Link } from 'react-router-dom';

import logo from 'presentation/assets/logo-white.webp';

import { Search } from './Search';

import * as Styles from './styles';

export const Navbar: React.FC = () => {
  return (
    <Styles.Navbar>
      <img className="logo" src={logo} alt="logo" />
      <Search />
      <Styles.Links>
        <Link to="/">
          <p>Home</p>
        </Link>
        <Link to="/favorites">
          <p>Favorites</p>
        </Link>
      </Styles.Links>
    </Styles.Navbar>
  );
};
