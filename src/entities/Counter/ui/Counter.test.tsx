import { screen } from '@testing-library/react';
import { componentRender } from 'shared/config/tests/componentRender';
import { Counter } from './Counter';

describe('Counter Component', () => {
  test('render', () => {
    componentRender(<Counter />, { initialState: { counter: { value: 10 } } });
    expect(screen.getByTestId('value-title')).toHaveTextContent('value = 10');
  });
});
