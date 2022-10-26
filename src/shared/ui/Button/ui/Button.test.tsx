import { render, screen } from '@testing-library/react';
import { Button } from 'shared/ui/Button';

describe('Button Component', () => {
  test('with only one param', () => {
    render(<Button>Test</Button>);
    expect(screen.getByText('Test')).toBeInTheDocument();

  });
});