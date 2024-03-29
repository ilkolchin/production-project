import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from '@/app/providers/StoreProvider';
import { validateProfileData } from '../validateProfileData/validateProfileData';
import { getProfileForm } from '../../selectors/getProfileForm/getProfileForm';
import { Profile } from '@/entities/Profile';
import { ValidateProfileError } from '../../consts/editableProfileCardConsts';

export const updateProfileData = createAsyncThunk<
  Profile,
  void,
  ThunkConfig<ValidateProfileError[]>
>('profile/updateProfileData', async (_, ThunkApi) => {
  const { extra, rejectWithValue, getState } = ThunkApi;

  const formData = getProfileForm(getState());

  const errors = validateProfileData(formData);

  if (errors.length) {
    return rejectWithValue(errors);
  }

  try {
    const response = await extra.api.put<Profile>(
      `/profile/${formData?.id}`,
      formData,
    );

    if (!response.data) {
      throw new Error('');
    }

    return response.data;
  } catch (e) {
    return rejectWithValue([ValidateProfileError.SERVER_ERROR]);
  }
});
