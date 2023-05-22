import { BounceLoader } from 'react-spinners';

import { Card, Pagination, NotFound } from 'presentation/components';
import { Search } from 'presentation/pages/Home/components/Search';

import { useCharacters } from 'core/hooks/useCharacters';
import { useSetFavoriteCharacter } from 'core/hooks/useSetFavoriteCharacter';
import { isFavorite } from 'core/utils/isFavorite';

import * as Styles from './styles';

export const Home: React.FC = () => {
  const {
    data: characters,
    loading,
    pagination,
    handleFilterName,
    handlePagination,
  } = useCharacters();

  const { favoriteCharacters, setFavoriteCharacter } =
    useSetFavoriteCharacter();

  const hasNotSearch = !loading && !characters.length;

  return (
    <>
      <Search setFilter={handleFilterName} />
      <Styles.List>
        {loading ? (
          <BounceLoader data-testid="loading" color="#712512" />
        ) : (
          characters.map(({ image, name, id, species, gender, status }) => {
            return (
              <Card
                key={id}
                image={image}
                name={name}
                species={species}
                gender={gender}
                status={status}
                isFavorite={isFavorite({ favoriteCharacters, id })}
                setFavorite={() => setFavoriteCharacter(id)}
              />
            );
          })
        )}

        {hasNotSearch ? <NotFound text="Character not found!" /> : null}
      </Styles.List>
      {!loading && characters.length ? (
        <Pagination
          setPage={handlePagination}
          pages={pagination?.pages}
          prev={pagination?.prev}
          next={pagination?.next}
        />
      ) : null}
    </>
  );
};
