import { useLazyQuery as useLazyQueries, DocumentNode } from '@apollo/client';

export const useLazyQuery = <TData = any>(query: DocumentNode) => {
  const [setQuery, { data, loading }] = useLazyQueries<TData>(query);

  return {
    setQuery,
    data,
    loading,
  };
};
