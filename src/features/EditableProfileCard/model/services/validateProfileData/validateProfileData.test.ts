import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';
import { ValidateProfileError } from '../../consts/editableProfileCardConsts';
import { validateProfileData } from './validateProfileData';

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

describe('validateProfileData.test', () => {
  test('should success', async () => {
    const result = validateProfileData(data);

    expect(result).toEqual([]);
  });

  test('should return error when first and last name were not provided', async () => {
    const result = validateProfileData({ ...data, first: '', lastname: '' });

    expect(result).toEqual([ValidateProfileError.INCORRECT_USER_DATA]);
  });

  test('should return error when age was not provided', async () => {
    const result = validateProfileData({ ...data, age: undefined });

    expect(result).toEqual([ValidateProfileError.INCORRECT_AGE]);
  });

  test('should return error when age was not a number', async () => {
    //@ts-ignore
    const result = validateProfileData({ ...data, age: 'undefined' });

    expect(result).toEqual([ValidateProfileError.INCORRECT_AGE]);
  });

  test('should return error when city was not provided', async () => {
    const result = validateProfileData({ ...data, city: '' });

    expect(result).toEqual([ValidateProfileError.INCORRECT_CITY]);
  });

  test('should return error when no args were provided', async () => {
    const result = validateProfileData({});

    expect(result).toEqual([
      ValidateProfileError.INCORRECT_USER_DATA,
      ValidateProfileError.INCORRECT_AGE,
      ValidateProfileError.INCORRECT_CITY
    ]);
  });
});
