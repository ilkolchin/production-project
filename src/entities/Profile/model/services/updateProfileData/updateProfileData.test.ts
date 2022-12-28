import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';
import { ValidateProfileError } from '../../types/profile';
import { TestAsyncThunk } from 'shared/config/tests/TestAsyncThunk';
import { updateProfileData } from './updateProfileData';

jest.mock('axios');

const data = {
  id: '1',
  first: 'Ilya',
  lastname: 'Kolchin',
  username: 'admin',
  age: 22,
  country: Country.Russia,
  city: 'Saint-Petersburg',
  currency: Currency.RUB
};

describe('updateProfileData.test', () => {
  test('should success', async () => {
    const thunk = new TestAsyncThunk(updateProfileData, {
      profile: {
        form: data
      }
    });

    thunk.api.put.mockReturnValue(Promise.resolve({ data }));
    const result = await thunk.callThunk();

    expect(thunk.api.put).toHaveBeenCalled();
    expect(result.meta.requestStatus).toBe('fulfilled');
    expect(result.payload).toEqual(data);
  });

  test('should return server error', async () => {
    const thunk = new TestAsyncThunk(updateProfileData, {
      profile: {
        form: data
      }
    });
    thunk.api.put.mockReturnValue(Promise.resolve({ status: 403 }));
    const result = await thunk.callThunk();

    expect(result.meta.requestStatus).toBe('rejected');
    expect(result.payload).toEqual([ValidateProfileError.SERVER_ERROR]);
  });

  test('should return validate error', async () => {
    const thunk = new TestAsyncThunk(updateProfileData, {
      profile: {
        form: { ...data, lastname: '' }
      }
    });
    const result = await thunk.callThunk();

    expect(result.meta.requestStatus).toBe('rejected');
    expect(result.payload).toEqual([ValidateProfileError.INCORRECT_USER_DATA]);
  });
});
