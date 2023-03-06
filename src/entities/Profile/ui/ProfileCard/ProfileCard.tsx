import { Age } from '@/entities/Age';
import { Country, CountrySelect } from '@/entities/Country';
import { Currency, CurrencySelect } from '@/entities/Currency';
import { classNames, Mods } from '@/shared/lib/classNames';
import { Avatar } from '@/shared/ui/Avatar';
import { Input } from '@/shared/ui/Input';
import { RefreshBtn } from '@/shared/ui/RefreshBtn';
import { Skeleton } from '@/shared/ui/Skeleton';
import { HStack, VStack } from '@/shared/ui/Stack';
import { Text, TextTheme } from '@/shared/ui/Text';
import { TextAlign } from '@/shared/ui/Text/ui/Text';
import { useTranslation } from 'react-i18next';
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
    onChangeCountry,
  } = props;
  const { t } = useTranslation();

  if (isLoading) {
    return <Skeleton width={'100%'} height={400} border={12} />;
  }

  if (error) {
    return (
      <VStack gap="16">
        <Text
          theme={TextTheme.ERROR}
          align={TextAlign.CENTER}
          title={t('Error while profile loading')}
        />
        <RefreshBtn />
      </VStack>
    );
  }

  const mods: Mods = {
    [cls.editing]: !readonly,
  };

  return (
    <VStack
      gap="16"
      max
      className={classNames(cls.ProfileCard, mods, [className])}
    >
      <HStack gap="32" max>
        {data?.avatar && <Avatar src={data.avatar} fallbackBigSize />}
        <VStack gap="8">
          <Input
            readonly={readonly}
            placeholder={t('Username')}
            value={data?.username}
            onChange={onChangeUsername}
            className={cls.input}
          />
          <Input
            readonly={readonly}
            placeholder={t('Profile avatar link')}
            className={cls.input}
            value={data?.avatar}
            onChange={onChangeAvatar}
          />
        </VStack>
      </HStack>

      <VStack gap="16" max align="start">
        <HStack gap="8">
          <Input
            readonly={readonly}
            placeholder={t('First Name')}
            value={data?.first}
            onChange={onChangeFirstName}
            className={cls.input}
            data-testid={'ProfileCard.FirstName'}
          />
          <Input
            readonly={readonly}
            placeholder={t('Last Name')}
            value={data?.lastname}
            onChange={onChangeLastName}
            className={cls.input}
            data-testid={'ProfileCard.LastName'}
          />
        </HStack>
        <HStack gap="8">
          <Age readonly={readonly} value={data?.age} onChange={onChangeAge} />
          <Input
            readonly={readonly}
            placeholder={t('City')}
            className={cls.input}
            value={data?.city}
            onChange={onChangeCity}
          />
        </HStack>
        <HStack gap="8" align="stretch" justify="center">
          <CountrySelect
            className={cls.input}
            value={data?.country}
            onChange={onChangeCountry}
            readonly={readonly}
          />
          <CurrencySelect
            className={cls.input}
            value={data?.currency}
            onChange={onChangeCurrency}
            readonly={readonly}
          />
        </HStack>
      </VStack>
    </VStack>
  );
};
