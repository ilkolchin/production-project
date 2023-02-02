import { StateSchema } from '@/app/providers/StoreProvider';
import { User } from '../../types/user';
import { getUserInited } from './getUserInited';

describe('getUserInited.test', () => {
  test('should return data', () => {
    const data: User = {
      id: '',
      username: ''
    };
    const state: DeepPartial<StateSchema> = {
      user: { authData: data, _inited: false }
    };
    expect(getUserInited(state as StateSchema)).toEqual(false);
  });
  test('should work with empty state', () => {
    const state: DeepPartial<StateSchema> = {
      user: {}
    };
    expect(getUserInited(state as StateSchema)).toEqual(undefined);
  });
});
