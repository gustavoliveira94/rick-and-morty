import { Card } from 'presentation/components/Card';
import { Search } from 'presentation/pages/Home/components/Search';

import { useCharacters } from 'core/hooks/useCharacters';
import { useSetFavoriteCharacter } from 'core/hooks/useSetFavoriteCharacter';

import { Pagination } from 'presentation/components/Pagination';

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

  return (
    <>
      <Search setFilter={handleFilterName} />
      <Styles.List>
        {loading
          ? 'Loading...'
          : characters?.map(({ image, name, id, species, gender, status }) => {
              const isFavorite = favoriteCharacters?.some(
                (favorite) => favorite === id,
              );

              return (
                <Card
                  key={id}
                  image={image}
                  name={name}
                  species={species}
                  gender={gender}
                  status={status}
                  isFavorite={isFavorite}
                  setFavorite={() => setFavoriteCharacter(id)}
                />
              );
            })}
      </Styles.List>
      {!loading ? (
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
