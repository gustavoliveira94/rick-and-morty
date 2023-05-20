import { useLazyQuery as useLazyQueries, DocumentNode } from '@apollo/client';

export const useLazyQuery = <TData = any>(query: DocumentNode) => {
  const [getQuery, { data, loading }] = useLazyQueries<TData>(query);

  return {
    getQuery,
    data,
    loading,
  };
};
