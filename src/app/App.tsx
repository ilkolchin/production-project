import { getUserInited, useUserActions } from '@/entities/User';
import { classNames } from '@/shared/lib/classNames';
import { Navbar } from '@/widgets/Navbar';
import { Sidebar } from '@/widgets/Sidebar';
import { Suspense, useEffect } from 'react';
import { useSelector } from 'react-redux';
import AppRouter from './providers/router/ui/AppRouter';

export const App = () => {
  const inited = useSelector(getUserInited);
  const { initAuthData } = useUserActions();

  useEffect(() => {
    initAuthData();
  }, [initAuthData]);

  return (
    <Suspense fallback={''}>
      <div className={classNames('app', {}, [])}>
        <Navbar />
        <div className="content-page">
          <Sidebar />
          {inited && <AppRouter />}
        </div>
      </div>
    </Suspense>
  );
};
