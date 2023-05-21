import { useState } from 'react';

import searchButton from 'presentation/assets/search.png';

import { useFilterCharacter } from 'core/hooks/useFilterCharacter';

import * as Styles from './styles';

export const Search: React.FC = () => {
  const { filterCharacter } = useFilterCharacter();

  const [name, setName] = useState('');

  return (
    <Styles.ContentSearch>
      <Styles.Search>
        <input
          placeholder="Search a character"
          onChange={(e) => setName(e.target.value)}
        />
        <button type="button" onClick={() => filterCharacter(name)}>
          <img src={searchButton} alt="button-search" />
        </button>
      </Styles.Search>
    </Styles.ContentSearch>
  );
};
