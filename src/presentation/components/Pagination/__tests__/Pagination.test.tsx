import { render, fireEvent } from '@testing-library/react';

import { Pagination } from 'presentation/components/Pagination';

describe('Testing <Pagination /> component', () => {
  it('should render 1, 2, 10', () => {
    const setPage = jest.fn();

    const { getByText, queryByTestId } = render(
      <Pagination setPage={setPage} next={2} pages={10} prev={0} />,
    );

    expect(queryByTestId('initial-page')).not.toBeInTheDocument();
    expect(getByText('1')).toBeInTheDocument();
    expect(getByText('1')).toBeInTheDocument();
    expect(getByText('2')).toBeInTheDocument();
    expect(getByText('10')).toBeInTheDocument();
  });

  it('should click on buttons', () => {
    const setPage = jest.fn();

    const { getByTestId } = render(
      <Pagination setPage={setPage} next={4} pages={10} prev={2} />,
    );

    const initialPageButton = getByTestId('initial-page');
    const prevButton = getByTestId('prev');
    const nextButton = getByTestId('next');
    const endPageButton = getByTestId('end-page');

    fireEvent.click(initialPageButton);
    expect(setPage).toBeCalledWith({ page: 1 });

    fireEvent.click(prevButton);
    expect(setPage).toBeCalledWith({ page: 2 });

    fireEvent.click(nextButton);
    expect(setPage).toBeCalledWith({ page: 4 });

    fireEvent.click(endPageButton);
    expect(setPage).toBeCalledWith({ page: 10 });
  });

  it('should 1, 9, 10', () => {
    const setPage = jest.fn();

    const { getByText, queryByTestId } = render(
      <Pagination setPage={setPage} next={10} pages={10} prev={8} />,
    );

    expect(getByText('1')).toBeInTheDocument();
    expect(getByText('9')).toBeInTheDocument();
    expect(getByText('10')).toBeInTheDocument();
    expect(queryByTestId('end-page')).not.toBeInTheDocument();
  });
});
