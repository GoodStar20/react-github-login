import { render } from '@testing-library/react';
import { Result } from './Result';
import { useSelector } from 'react-redux';

const mockState = {
  search: {
    loginData: [],
    totalCount: 0,
    searchKey: '',
    error: '',
  },
};

jest.mock('react-redux', () => ({
  ...jest.requireActual('react-redux'),
  useDispatch: jest.fn(),
  useSelector: jest.fn(),
}));

describe('Result component', () => {
  beforeEach(() => {
    useSelector.mockImplementation((callback) => {
      return callback(mockState);
    });
  });
  afterEach(() => {
    useSelector.mockClear();
  });

  it('Result renders without errors', () => {
    const { queryByTestId } = render(<Result />);
    expect(queryByTestId('result')).toBeInTheDocument();
  });
});
