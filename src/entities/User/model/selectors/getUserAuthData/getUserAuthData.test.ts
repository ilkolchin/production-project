import { StateSchema } from 'app/providers/StoreProvider';
import { User } from 'entities/User/model/types/user';
import { getUserAuthData } from './getUserAuthData';

describe('getUserAuthData.test', () => {
  test('should return data', () => {
    const data: User = {
      id: '',
      username: ''
    };
    const state: DeepPartial<StateSchema> = {
      user: { authData: data }
    };
    expect(getUserAuthData(state as StateSchema)).toEqual(data);
  });
  test('should work with empty state', () => {
    const state: DeepPartial<StateSchema> = {
      user: {}
    };
    expect(getUserAuthData(state as StateSchema)).toEqual(undefined);
  });
});
