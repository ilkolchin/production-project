import { componentRender } from '@/shared/config/tests/componentRender';
import { screen } from '@testing-library/react';
import { Input } from './Input';

describe('Input', () => {
  test('should render', () => {
    componentRender(<Input />);

    expect(screen.getByTestId('CustomInput')).toBeInTheDocument();
  });
  test('should have readonly class', () => {
    componentRender(<Input readonly />);

    expect(screen.getByTestId('CustomInput')).toHaveClass('readonly');
  });
});
