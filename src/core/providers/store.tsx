import { Provider } from 'react-redux';

import { store } from 'config/store';

interface IProviderStore {
  children: JSX.Element;
}

export const ProviderStore: React.FC<IProviderStore> = ({ children }) => {
  return <Provider store={store}>{children}</Provider>;
};
