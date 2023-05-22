import { render, fireEvent } from '@testing-library/react';

import { Search } from 'presentation/pages/Home/components/Search';

describe('Testing <Search /> - Home Page', () => {
  it('Should write input search and click on button', () => {
    const setFilter = jest.fn();

    const { getByPlaceholderText, getByTestId, queryByTestId } = render(
      <Search setFilter={setFilter} />,
    );

    expect(queryByTestId('button-clear')).not.toBeInTheDocument();

    const input = getByPlaceholderText('Search a character');
    fireEvent.change(input, { target: { value: 'morty' } });

    expect(input).toHaveValue('morty');

    fireEvent.click(getByTestId('button-search'));
    expect(setFilter).toBeCalledTimes(1);

    const buttonClear = getByTestId('button-clear');
    expect(buttonClear).toBeInTheDocument();

    fireEvent.click(buttonClear);
    expect(queryByTestId('button-clear')).not.toBeInTheDocument();
  });

  it('Should disabled button', () => {
    const { getByTestId } = render(<Search setFilter={jest.fn()} />);

    expect(getByTestId('button-search')).toBeDisabled();
  });
});
