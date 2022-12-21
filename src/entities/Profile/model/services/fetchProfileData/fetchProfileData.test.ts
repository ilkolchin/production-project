import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';
import { TestAsyncThunk } from 'shared/config/tests/TestAsyncThunk';
import { fetchProfileData } from './fetchProfileData';

jest.mock('axios');

const data = {
  first: 'Ilya',
  lastname: 'Kolchin',
  username: 'admin',
  age: 22,
  country: Country.Russia,
  city: 'Saint-Petersburg',
  currency: Currency.RUB
};

describe('fetchProfileData.test', () => {
  test('should success', async () => {
    const thunk = new TestAsyncThunk(fetchProfileData);
    thunk.api.get.mockReturnValue(Promise.resolve({ data: data }));
    const result = await thunk.callThunk();

    expect(thunk.api.get).toHaveBeenCalled();
    expect(result.meta.requestStatus).toBe('fulfilled');
    expect(result.payload).toEqual(data);
  });

  test('should error', async () => {
    const thunk = new TestAsyncThunk(fetchProfileData);
    thunk.api.get.mockReturnValue(Promise.resolve({ status: 403 }));
    const result = await thunk.callThunk();

    expect(result.meta.requestStatus).toBe('rejected');
  });
});
