import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';
import { updateProfileData } from '../services/updateProfileData/updateProfileData';
import { ProfileSchema, ValidateProfileError } from '../types/profile';
import { profileActions, profileReducer } from './profileSlice';

const data = {
  first: 'Ilya',
  lastname: 'Kolchin',
  username: 'admin',
  age: 22,
  country: Country.Russia,
  city: 'Saint-Petersburg',
  currency: Currency.RUB
};

describe('profileSlice.test', () => {
  test('should set readonly', () => {
    const state: DeepPartial<ProfileSchema> = { readonly: true };
    expect(
      profileReducer(state as ProfileSchema, profileActions.setReadonly(false))
    ).toEqual({ readonly: false });
  });

  test('should cancel edit', () => {
    const state: DeepPartial<ProfileSchema> = {
      data,
      form: { username: '' }
    };
    expect(
      profileReducer(state as ProfileSchema, profileActions.cancelEdit())
    ).toEqual({
      readonly: true,
      data,
      validateErrors: undefined,
      form: data
    });
  });

  test('should update profile', () => {
    const state: DeepPartial<ProfileSchema> = {
      form: { username: '' }
    };
    expect(
      profileReducer(
        state as ProfileSchema,
        profileActions.updateProfile({ username: '123456' })
      )
    ).toEqual({
      form: { username: '123456' }
    });
  });

  test('should update profile service pending', () => {
    const state: DeepPartial<ProfileSchema> = {
      isLoading: false,
      validateErrors: [ValidateProfileError.INCORRECT_AGE]
    };
    expect(
      profileReducer(state as ProfileSchema, updateProfileData.pending)
    ).toEqual({
      isLoading: true,
      validateErrors: undefined
    });
  });

  test('should update profile service fulfilled', () => {
    const state: DeepPartial<ProfileSchema> = {
      isLoading: true
    };
    expect(
      profileReducer(
        state as ProfileSchema,
        updateProfileData.fulfilled(data, '')
      )
    ).toEqual({
      isLoading: false,
      readonly: true,
      validateErrors: undefined,
      form: data,
      data
    });
  });
});
