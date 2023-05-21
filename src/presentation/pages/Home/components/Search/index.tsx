import { useState } from 'react';

import { useFilterCharacter } from 'core/hooks/useFilterCharacter';

import * as Styles from './styles';

export const Search: React.FC = () => {
  const { filterCharacter, isFiltered, removeFilter } = useFilterCharacter();

  const [name, setName] = useState('');

  const handleFilter = () => {
    if (!isFiltered) {
      return filterCharacter(name);
    }

    setName('');
    removeFilter();
  };

  return (
    <Styles.ContentSearch>
      <Styles.Search>
        <input
          placeholder="Search a character"
          onChange={(e) => setName(e.target.value)}
          value={name}
        />
        <button type="button" onClick={() => handleFilter()}>
          {!isFiltered ? (
            <i className="fa-solid fa-magnifying-glass" />
          ) : (
            <i className="fa-regular fa-circle-xmark" />
          )}
        </button>
      </Styles.Search>
    </Styles.ContentSearch>
  );
};
