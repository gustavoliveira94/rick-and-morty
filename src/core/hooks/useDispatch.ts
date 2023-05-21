import { useDispatch as useDispatchs } from 'react-redux';

export const useDispatch = () => {
  const dispatch = useDispatchs();

  return { dispatch };
};
