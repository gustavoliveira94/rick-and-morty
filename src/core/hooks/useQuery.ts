import { useQuery as useQueries, DocumentNode } from '@apollo/client';

interface IUseQuery {
  variables: any;
}

export const useQuery = <TData = any>(
  query: DocumentNode,
  options?: IUseQuery,
) => {
  const { data, loading } = useQueries<TData>(query, {
    variables: options?.variables,
  });

  return {
    data,
    loading,
  };
};
