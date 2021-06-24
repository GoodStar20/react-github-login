import { render } from '@testing-library/react';
import { Header } from './Header';

jest.mock('react-redux', () => ({
  ...jest.requireActual('react-redux'),
  useDispatch: jest.fn(),
}));

describe('Header component', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });
  it('Header renders without errors', () => {
    const { queryByTestId } = render(<Header />);
    expect(queryByTestId('header')).toBeInTheDocument();
  });
});
