/* eslint-disable jsx-a11y/no-static-element-interactions */
import { useState } from 'react';

import * as Styles from './styles';

interface SearchProps {
  setFilter: ({ name }: { name: string }) => void;
}

export const Search: React.FC<SearchProps> = ({ setFilter }) => {
  const [name, setName] = useState('');
  const [searching, setSearching] = useState(false);

  const handleFilter = () => {
    setFilter({ name });
    setSearching(true);
  };

  const clearFilter = () => {
    setFilter({ name: '' });
    setSearching(false);
    setName('');
  };

  return (
    <Styles.ContentSearch>
      <Styles.Search>
        <input
          placeholder="Search a character"
          onChange={(e) => setName(e.target.value)}
          value={name}
        />
        <button type="button">
          <i
            className="fa-solid fa-magnifying-glass"
            onClick={() => handleFilter()}
          />
        </button>
      </Styles.Search>
      {searching ? (
        <Styles.Clear type="button" onClick={() => clearFilter()}>
          Limpar Filtro
        </Styles.Clear>
      ) : null}
    </Styles.ContentSearch>
  );
};
