import { UserSchema } from '../types/user';
import { userActions, userReducer } from './userSlice';

describe('userSlice.test', () => {
  test('should set authData', () => {
    const state: DeepPartial<UserSchema> = { authData: {} };
    expect(
      userReducer(
        state as UserSchema,
        userActions.setAuthData({ id: '1', username: 'Waze' }),
      ),
    ).toEqual({ authData: { id: '1', username: 'Waze' } });
  });

  test('should init authData', () => {
    // const user = "{ id: '1', username: 'Waze' }";
    const state: DeepPartial<UserSchema> = {
      // authData: user as unknown as User,
      _inited: false,
    };

    expect(
      userReducer(state as UserSchema, userActions.initAuthData()),
    ).toEqual({
      // authData: { id: '1', username: 'Waze' },
      _inited: true,
    });
  });

  test('should log out', () => {
    const state: DeepPartial<UserSchema> = {
      authData: { id: '1', username: 'Waze' },
    };
    expect(userReducer(state as UserSchema, userActions.logout())).toEqual({
      authData: undefined,
    });
  });
});
