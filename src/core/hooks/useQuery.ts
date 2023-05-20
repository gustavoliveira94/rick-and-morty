import { useQuery as useQueries, DocumentNode } from '@apollo/client';

export const useQuery = <TData = any>(query: DocumentNode) => {
  const { data, loading } = useQueries<TData>(query);

  return {
    data,
    loading,
  };
};
