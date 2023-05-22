import { render, fireEvent } from '@testing-library/react';

import { Card } from 'presentation/components/Card';

describe('Testing <Card /> component', () => {
  it('should render favorite card', () => {
    const setFavorite = jest.fn();

    const { getByTestId } = render(
      <Card
        name="Gustavo"
        gender="male"
        image="image.png"
        species="human"
        status="alive"
        isFavorite
        setFavorite={setFavorite}
      />,
    );

    expect(getByTestId('is-favorite')).toBeInTheDocument();
    fireEvent.click(getByTestId('is-favorite'));
    expect(setFavorite).toBeCalledTimes(1);
  });

  it('should not render favorite card', () => {
    const setFavorite = jest.fn();

    const { getByTestId } = render(
      <Card
        name="Gustavo"
        gender="male"
        image="image.png"
        species="human"
        status="alive"
        isFavorite={false}
        setFavorite={setFavorite}
      />,
    );

    expect(getByTestId('is-not-favorite')).toBeInTheDocument();
    fireEvent.click(getByTestId('is-not-favorite'));
    expect(setFavorite).toBeCalledTimes(1);
  });
});
