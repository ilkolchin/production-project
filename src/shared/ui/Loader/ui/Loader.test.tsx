import { componentRender } from '@/shared/config/tests/componentRender';
import { screen } from '@testing-library/react';
import { Loader } from './Loader';

describe('Loader', () => {
  test('should render', () => {
    componentRender(<Loader />);

    expect(screen.getByTestId('Loader')).toBeInTheDocument();
  });
});
