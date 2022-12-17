import { getProfileData } from '../../model/selectors/getProfileData/getProfileData';
import { getProfileError } from '../../model/selectors/getProfileError/getProfileError';
import { getProfileIsLoading } from '../../model/selectors/getProfileIsLoading/getProfileIsLoading';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { classNames } from 'shared/lib/classNames';
import cls from './ProfileCard.module.scss';
import { Text } from 'shared/ui/Text';
import { Button, ButtonTheme } from 'shared/ui/Button';
import { Input } from 'shared/ui/Input';

interface ProfileCardProps {
  className?: string;
}
export const ProfileCard = (props: ProfileCardProps) => {
  const { className } = props;
  const { t } = useTranslation('profile');
  const data = useSelector(getProfileData);
  const error = useSelector(getProfileError);
  const isLoading = useSelector(getProfileIsLoading);

  return (
    <div className={classNames(cls.ProfileCard, {}, [className])}>
      <div className={cls.header}>
        <Text title={t('User Profile')} />
        <Button theme={ButtonTheme.OUTLINED} className={cls.btn}>
          {t('Edit')}
        </Button>
      </div>
      <div className={cls.data}>
        <Input placeholder={t('First Name')} value={data?.first} />
        <Input placeholder={t('Last Name')} value={data?.lastname} />
        <Input placeholder={t('Age')} value={data?.age} />
        <Input placeholder={t('Country')} value={data?.country} />
        <Input placeholder={t('City')} value={data?.city} />
      </div>
    </div>
  );
};
