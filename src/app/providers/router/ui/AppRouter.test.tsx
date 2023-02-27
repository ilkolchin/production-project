import { UserRole } from '@/entities/User';
import { componentRender } from '@/shared/config/tests/componentRender';
import {
  getRouteAbout,
  getRouteAdminPanel,
  getRouteArticles,
  getRouteProfile
} from '@/shared/const/router';
import { screen } from '@testing-library/react';
import AppRouter from './AppRouter';

describe('AppRouter', () => {
  test('should render', async () => {
    componentRender(<AppRouter />, {
      route: getRouteAbout()
    });

    const page = await screen.findByTestId('AboutPage');
    expect(page).toBeInTheDocument();
  });

  test('should redirect to MainPage', async () => {
    componentRender(<AppRouter />, {
      route: getRouteArticles(),
      initialState: { user: { _inited: true, authData: undefined } }
    });

    const page = await screen.findByTestId('MainPage');
    expect(page).toBeInTheDocument();
  });

  test('should render ProfilePage', async () => {
    componentRender(<AppRouter />, {
      route: getRouteProfile('1'),
      initialState: { user: { _inited: true, authData: {} } }
    });

    const page = await screen.findByTestId('ProfilePage');
    expect(page).toBeInTheDocument();
  });

  test('should redirect to ForbiddenPage', async () => {
    componentRender(<AppRouter />, {
      route: getRouteAdminPanel(),
      initialState: { user: { _inited: true, authData: {} } }
    });

    const page = await screen.findByTestId('ForbiddenPage');
    expect(page).toBeInTheDocument();
  });

  test('should return AdminPanelPage for ADMIN User Role', async () => {
    componentRender(<AppRouter />, {
      route: getRouteAdminPanel(),
      initialState: {
        user: { _inited: true, authData: { roles: [UserRole.ADMIN] } }
      }
    });

    const page = await screen.findByTestId('AdminPanelPage');
    expect(page).toBeInTheDocument();
  });

  test('should return AdminPanelPage for MANAGER User Role', async () => {
    componentRender(<AppRouter />, {
      route: getRouteAdminPanel(),
      initialState: {
        user: { _inited: true, authData: { roles: [UserRole.MANAGER] } }
      }
    });

    const page = await screen.findByTestId('AdminPanelPage');
    expect(page).toBeInTheDocument();
  });

  test('should return to NotFoundPage', async () => {
    componentRender(<AppRouter />, {
      route: '/invalidRoute123214'
    });

    const page = await screen.findByTestId('NotFoundPage');
    expect(page).toBeInTheDocument();
  });
});
