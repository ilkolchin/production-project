// Types
export type { UserSchema, User } from './model/types/user';
export { UserRole } from './model/consts/userConsts';

// Selectors
export { getUserAuthData } from './model/selectors/getUserAuthData/getUserAuthData';
export { getUserInited } from './model/selectors/getUserInited/getUserInited';
export {
  isUserAdmin,
  isUserManager,
  getUserRoles
} from './model/selectors/roleSelectors';

//Slice
export {
  userReducer,
  userActions,
  useUserActions
} from './model/slice/userSlice';
