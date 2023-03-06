// import { Dispatch } from '@reduxjs/toolkit';
// import { StateSchema } from 'app/providers/StoreProvider';
import { userActions } from '@/entities/User';
import { TestAsyncThunk } from '@/shared/config/tests/TestAsyncThunk';
import { loginByUsername } from './loginByUsername';

jest.mock('axios');

// describe('loginByUsername.test', () => {
//   let dispatch: Dispatch;
//   let getState: () => StateSchema;

//   beforeEach(() => {
//     dispatch = jest.fn();
//     getState = jest.fn();
//   });

//   test('should login success', async () => {
//     const userData = { username: '123', id: '1' };
//     mockedAxios.post.mockReturnValue(Promise.resolve({ data: userData }));

//     const action = loginByUsername({ username: '123', password: '123' });
//     const result = await action(dispatch, getState, undefined);

//     expect(dispatch).toHaveBeenCalledWith(userActions.setAuthData(userData));
//     expect(dispatch).toHaveBeenCalledTimes(3);
//     expect(mockedAxios.post).toHaveBeenCalled();
//     expect(result.meta.requestStatus).toBe('fulfilled');
//     expect(result.payload).toEqual(userData);
//   });

//   test('should login error', async () => {
//     mockedAxios.post.mockReturnValue(Promise.resolve({ status: 403 }));

//     const action = loginByUsername({ username: '123', password: '123' });
//     const result = await action(dispatch, getState, undefined);

//     expect(dispatch).toHaveBeenCalledTimes(2);
//     expect(mockedAxios.post).toHaveBeenCalled();
//     expect(result.meta.requestStatus).toBe('rejected');
//     expect(result.payload).toBe('error');
//   });
// });

describe('loginByUsername.test', () => {
  test('should login success', async () => {
    const userData = { username: '123', id: '1' };

    const thunk = new TestAsyncThunk(loginByUsername);
    thunk.api.post.mockReturnValue(Promise.resolve({ data: userData }));
    const result = await thunk.callThunk({ username: '123', password: '123' });

    expect(thunk.dispatch).toHaveBeenCalledWith(
      userActions.setAuthData(userData),
    );
    expect(thunk.dispatch).toHaveBeenCalledTimes(3);
    expect(thunk.api.post).toHaveBeenCalled();
    expect(result.meta.requestStatus).toBe('fulfilled');
    expect(result.payload).toEqual(userData);
  });

  test('should login error', async () => {
    const thunk = new TestAsyncThunk(loginByUsername);
    thunk.api.post.mockReturnValue(Promise.resolve({ status: 403 }));
    const result = await thunk.callThunk({ username: '123', password: '123' });

    expect(thunk.dispatch).toHaveBeenCalledTimes(2);
    expect(thunk.api.post).toHaveBeenCalled();
    expect(result.meta.requestStatus).toBe('rejected');
    expect(result.payload).toBe('error: Error');
  });
});
