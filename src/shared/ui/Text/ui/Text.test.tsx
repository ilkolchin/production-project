import { componentRender } from '@/shared/config/tests/componentRender';
import { screen } from '@testing-library/react';
import { Text, TextAlign, TextSize, TextTheme } from './Text';

describe('Text', () => {
  test('should render', () => {
    componentRender(<Text />);

    expect(screen.getByTestId('TextComponent')).toBeInTheDocument();
    expect(screen.getByTestId('TextComponent')).toHaveClass(
      'default size_M left'
    );
  });

  test('should render with error', () => {
    componentRender(<Text theme={TextTheme.ERROR} />);

    expect(screen.getByTestId('TextComponent')).toBeInTheDocument();
    expect(screen.getByTestId('TextComponent')).toHaveClass(
      'error size_M left'
    );
  });

  test('should render with align center', () => {
    componentRender(<Text align={TextAlign.CENTER} />);

    expect(screen.getByTestId('TextComponent')).toBeInTheDocument();
    expect(screen.getByTestId('TextComponent')).toHaveClass(
      'default size_M center'
    );
  });

  test('should render with text size L', () => {
    componentRender(<Text size={TextSize.L} />);

    expect(screen.getByTestId('TextComponent')).toBeInTheDocument();
    expect(screen.getByTestId('TextComponent')).toHaveClass(
      'default size_L left'
    );
  });
});
