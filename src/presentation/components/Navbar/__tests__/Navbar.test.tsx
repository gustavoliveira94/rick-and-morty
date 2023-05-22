import { render } from 'config/tests/helper';

import { Navbar } from 'presentation/components/Navbar';

describe('Testing <Navbar /> component', () => {
  it('should render menu', () => {
    const { getByText } = render(<Navbar />);

    expect(getByText('Home')).toBeInTheDocument();
    expect(getByText('Favorites')).toBeInTheDocument();
  });
});
