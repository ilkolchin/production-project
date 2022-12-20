import { Country, CountrySelect } from 'entities/Country';
import { Currency, CurrencySelect } from 'entities/Currency';
import { useTranslation } from 'react-i18next';
import { classNames, Mods } from 'shared/lib/classNames';
import { Avatar } from 'shared/ui/Avatar';
import { Input } from 'shared/ui/Input';
import { Loader } from 'shared/ui/Loader';
import { Text, TextTheme } from 'shared/ui/Text';
import { TextAlign } from 'shared/ui/Text/ui/Text';
import { Profile } from '../../model/types/profile';
import cls from './ProfileCard.module.scss';

interface ProfileCardProps {
  className?: string;
  data?: Profile;
  error?: string;
  isLoading?: boolean;
  readonly?: boolean;
  onChangeUsername?: (value?: string) => void;
  onChangeFirstName?: (value?: string) => void;
  onChangeLastName?: (value?: string) => void;
  onChangeAge?: (value?: string) => void;
  onChangeCity?: (value?: string) => void;
  onChangeAvatar?: (value?: string) => void;
  onChangeCurrency?: (currency: Currency) => void;
  onChangeCountry?: (country: Country) => void;
}

export const ProfileCard = (props: ProfileCardProps) => {
  const {
    className,
    data,
    error,
    isLoading,
    readonly,
    onChangeUsername,
    onChangeFirstName,
    onChangeLastName,
    onChangeAge,
    onChangeCity,
    onChangeAvatar,
    onChangeCurrency,
    onChangeCountry
  } = props;
  const { t } = useTranslation('profile');

  if (isLoading) {
    return (
      <div
        className={classNames(cls.ProfileCard, { [cls.isLoading]: true }, [
          className
        ])}
      >
        <Loader />
      </div>
    );
  }

  if (error) {
    return (
      <div className={classNames(cls.ProfileCard, {}, [className, cls.error])}>
        <Text
          theme={TextTheme.ERROR}
          align={TextAlign.CENTER}
          title={t('Произошла ошибка при загрузке профиля :(')}
          text={t('Попробуйте обновить страницу!')}
        />
      </div>
    );
  }

  const mods: Mods = {
    [cls.editing]: !readonly
  };

  return (
    <div className={classNames(cls.ProfileCard, mods, [className])}>
      {data?.avatar && (
        <div className={cls.avatarWrapper}>
          <Avatar src={data.avatar} />
        </div>
      )}
      <div className={cls.data}>
        <div className={cls.inputWrapper}>
          <Input
            readonly={readonly}
            placeholder={t('Username')}
            value={data?.username}
            onChange={onChangeUsername}
            className={cls.input}
          />
          <Input
            readonly={readonly}
            placeholder={t('Age')}
            value={data?.age}
            onChange={onChangeAge}
            className={cls.input}
          />
        </div>

        <div className={cls.inputWrapper}>
          <Input
            readonly={readonly}
            placeholder={t('First Name')}
            value={data?.first}
            onChange={onChangeFirstName}
            className={cls.input}
          />
          <Input
            readonly={readonly}
            placeholder={t('Last Name')}
            value={data?.lastname}
            onChange={onChangeLastName}
            className={cls.input}
          />
        </div>

        <div className={cls.inputWrapper}>
          <Input
            readonly={readonly}
            placeholder={t('City')}
            className={cls.input}
            value={data?.city}
            onChange={onChangeCity}
          />
          <CountrySelect
            className={cls.input}
            value={data?.country}
            onChange={onChangeCountry}
            readonly={readonly}
          />
        </div>

        <div className={cls.inputWrapper}>
          <CurrencySelect
            className={cls.input}
            value={data?.currency}
            onChange={onChangeCurrency}
            readonly={readonly}
          />
          <Input
            readonly={readonly}
            placeholder={t('Profile avatar link')}
            className={cls.input}
            value={data?.avatar}
            onChange={onChangeAvatar}
          />
        </div>
      </div>
    </div>
  );
};
