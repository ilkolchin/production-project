// eslint-disable-next-line fsd-stable/fsd-layer-imports
import { UserRole } from '@/entities/User';
import { RouteProps } from 'react-router-dom';

export type AppRouterProps = RouteProps & {
  authOnly?: boolean;
  roles?: UserRole[];
};
