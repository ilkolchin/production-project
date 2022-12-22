import { RequireAuth } from 'app/providers/router/ui/RequireAuth';
import { memo, Suspense, useCallback } from 'react';
import { Route, Routes } from 'react-router-dom';
import { PageLoader } from 'widgets/PageLoader';
import { AppRouterProps, routeConfig } from '../config/routeConfig';

const AppRouter = () => {
  const renderWithWrapper = useCallback((route: AppRouterProps) => {
    const element = (
      <Suspense fallback={<PageLoader />}>
        <div className="page-wrapper">{route.element}</div>
      </Suspense>
    );

    return (
      <Route
        key={route.path}
        path={route.path}
        element={
          route.authOnly ? <RequireAuth>{element}</RequireAuth> : element
        }
      />
    );
  }, []);

  return <Routes>{Object.values(routeConfig).map(renderWithWrapper)}</Routes>;
};

export default memo(AppRouter);
