import { RootState } from 'config/store';
import { useSelector as useSelectors } from 'react-redux';

type IUseSelector = (selector: RootState) => any;

export const useSelector = <TData = any>(selector: IUseSelector) => {
  const data = useSelectors(selector);

  return {
    data: data as TData,
  };
};
