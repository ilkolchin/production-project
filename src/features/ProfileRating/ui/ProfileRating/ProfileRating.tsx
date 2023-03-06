import { RatingCard } from '@/entities/Rating';
import { getUserAuthData } from '@/entities/User';
import { getProfileError } from '../../../EditableProfileCard';
import { Skeleton } from '@/shared/ui/Skeleton';
import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import {
  useGetProfileRating,
  useRateProfile,
} from '../../api/profileRatingApi';

export interface ProfileRatingProps {
  className?: string;
  profileId?: string;
}
export const ProfileRating = memo((props: ProfileRatingProps) => {
  const { className, profileId = '' } = props;
  const { t } = useTranslation();
  const userData = useSelector(getUserAuthData);
  const [profileMutation] = useRateProfile();
  const error = useSelector(getProfileError);

  const { data, isLoading } = useGetProfileRating({
    profileId,
    userId: userData?.id ?? '',
  });
  const rating = data?.[0];

  const handleRateProfile = useCallback(
    (starsCount: number, feedback?: string) => {
      try {
        profileMutation({
          profileId,
          userId: userData?.id ?? '',
          rate: starsCount,
          feedback,
        });
      } catch (e) {
        console.log(e);
      }
    },
    [profileId, profileMutation, userData?.id],
  );

  const onCancel = useCallback(
    (starsCount: number) => {
      handleRateProfile(starsCount);
    },
    [handleRateProfile],
  );

  const onAccept = useCallback(
    (starsCount: number, feedback?: string) => {
      handleRateProfile(starsCount, feedback);
    },
    [handleRateProfile],
  );

  if (isLoading) {
    return <Skeleton width={'100%'} height={110} border={'12px'} />;
  }

  if (error) {
    return null;
  }

  return (
    <RatingCard
      title={t('Оцените профиль')}
      feedbackTitle={t('Здесь вы можете оставить совй отзыв о пользователе')}
      className={className}
      hasFeedback
      rate={rating?.rate}
      onCancel={onCancel}
      onAccept={onAccept}
    />
  );
});
