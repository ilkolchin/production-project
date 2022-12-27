import { screen } from '@testing-library/react';
import { componentRender } from 'shared/config/tests/componentRender';
import { AppLink, AppLinkTheme } from './AppLink';

describe('AppLink.test', () => {
  test('should render 4', () => {
    componentRender(<AppLink to={''}></AppLink>);
    expect(screen.getByTestId('AppLink')).toBeInTheDocument();
  });

  test('clear theme', () => {
    componentRender(<AppLink to={''} theme={AppLinkTheme.INVERTED}></AppLink>);
    expect(screen.getByTestId('AppLink')).toHaveClass('inverted');
  });
});
