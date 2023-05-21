import * as Styles from './styles';

interface PaginationProps {
  prev?: number | null;
  next?: number;
  pages?: number;
  setPage: ({ page }: { page?: number }) => void;
}

export const Pagination: React.FC<PaginationProps> = ({
  prev,
  next,
  pages,
  setPage,
}) => {
  const current = prev ? prev + 1 : 1;
  const newPrev = prev && prev > 1;
  const newPages = next !== pages && next;

  return (
    <Styles.Container>
      {newPrev ? (
        <Styles.Pagination onClick={() => setPage({ page: 1 })}>
          1
        </Styles.Pagination>
      ) : null}
      <Styles.Pagination
        onClick={() => setPage({ page: !prev ? 1 : prev })}
        current={!prev}
      >
        {!prev ? 1 : prev}
      </Styles.Pagination>
      {prev ? <Styles.Pagination current>{current}</Styles.Pagination> : null}
      {next ? (
        <Styles.Pagination onClick={() => setPage({ page: next })}>
          {next}
        </Styles.Pagination>
      ) : null}
      {newPages ? (
        <Styles.Pagination onClick={() => setPage({ page: pages! })}>
          {pages}
        </Styles.Pagination>
      ) : null}
    </Styles.Container>
  );
};
