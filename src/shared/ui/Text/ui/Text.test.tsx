import { componentRender } from '@/shared/config/tests/componentRender';
import { screen } from '@testing-library/react';
import { Text, TextAlign, TextSize, TextTheme } from './Text';

describe('Text', () => {
  test('should render', () => {
    componentRender(<Text data-testid="TestText" />);

    expect(screen.getByTestId('TestText.Component')).toBeInTheDocument();
    expect(screen.getByTestId('TestText.Component')).toHaveClass(
      'default size_M left',
    );
  });

  test('should render with error', () => {
    componentRender(<Text data-testid="TestText" theme={TextTheme.ERROR} />);

    expect(screen.getByTestId('TestText.Component')).toBeInTheDocument();
    expect(screen.getByTestId('TestText.Component')).toHaveClass(
      'error size_M left',
    );
  });

  test('should render with align center', () => {
    componentRender(<Text data-testid="TestText" align={TextAlign.CENTER} />);

    expect(screen.getByTestId('TestText.Component')).toBeInTheDocument();
    expect(screen.getByTestId('TestText.Component')).toHaveClass(
      'default size_M center',
    );
  });

  test('should render with text size L', () => {
    componentRender(<Text data-testid="TestText" size={TextSize.L} />);

    expect(screen.getByTestId('TestText.Component')).toBeInTheDocument();
    expect(screen.getByTestId('TestText.Component')).toHaveClass(
      'default size_L left',
    );
  });
});
