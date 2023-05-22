import { render } from '@testing-library/react';

import { NotFound } from 'presentation/components';

describe('Testing <NotFound /> component', () => {
  it('should render text', () => {
    const { getByText } = render(<NotFound text="Character not found!" />);

    expect(getByText('Character not found!')).toBeInTheDocument();
  });
});
