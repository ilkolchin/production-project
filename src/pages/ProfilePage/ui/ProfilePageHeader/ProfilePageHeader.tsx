import {
  getProfileReadonly,
  profileActions,
  updateProfileData
} from 'entities/Profile';
import { useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { classNames } from 'shared/lib/classNames';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { Button, ButtonTheme } from 'shared/ui/Button';
import { Text } from 'shared/ui/Text';
import cls from './ProfilePageHeader.module.scss';

interface ProfilePageHeaderProps {
  className?: string;
}
export const ProfilePageHeader = (props: ProfilePageHeaderProps) => {
  const { className } = props;
  const { t } = useTranslation('profile');
  const readonly = useSelector(getProfileReadonly);

  const dispatch = useAppDispatch();

  const onEdit = useCallback(() => {
    dispatch(profileActions.setReadonly(false));
  }, [dispatch]);

  const onCancelEdit = useCallback(() => {
    dispatch(profileActions.cancelEdit());
  }, [dispatch]);

  const onSave = useCallback(() => {
    dispatch(updateProfileData());
  }, [dispatch]);

  return (
    <div className={classNames(cls.ProfilePageHeader, {}, [className])}>
      <Text title={t('Profile')} className={cls.profileText} />
      {readonly ? (
        <Button
          theme={ButtonTheme.OUTLINED}
          onClick={onEdit}
          className={cls.btn}
        >
          {t('Edit')}
        </Button>
      ) : (
        <>
          <Button
            theme={ButtonTheme.CLEAR}
            onClick={onCancelEdit}
            className={cls.cancelBtn}
          >
            {t('Cancel')}
          </Button>
          <Button
            theme={ButtonTheme.OUTLINED}
            onClick={onSave}
            className={cls.btn}
          >
            {t('Save')}
          </Button>
        </>
      )}
    </div>
  );
};
