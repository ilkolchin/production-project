import { AppRouter } from 'app/providers/router';
import { userActons } from 'entities/User';
import { Suspense, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { classNames } from 'shared/lib/classNames';
import { Navbar } from 'widgets/Navbar';
import { Sidebar } from 'widgets/Sidebar';

export const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(userActons.initAuthData());
  }, [dispatch]);

  return (
    <Suspense fallback={''}>
      <div className={classNames('app', {}, [])}>
        <Navbar />
        <div className="content-page">
          <Sidebar />
          <AppRouter />
        </div>
      </div>
    </Suspense>
  );
};
