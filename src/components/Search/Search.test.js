import { render } from '@testing-library/react';
import { Search } from './Search';
import { useSelector } from 'react-redux';

const mockState = {
  search: {
    loginData: [],
    loading: false,
  },
};

jest.mock('react-redux', () => ({
  ...jest.requireActual('react-redux'),
  useDispatch: jest.fn(),
  useSelector: jest.fn(),
}));

describe('Search component', () => {
  beforeEach(() => {
    useSelector.mockImplementation((callback) => {
      return callback(mockState);
    });
  });
  afterEach(() => {
    useSelector.mockClear();
  });

  it('Search renders without errors', () => {
    const { queryByTestId } = render(<Search />);
    expect(queryByTestId('search')).toBeInTheDocument();
  });
});
