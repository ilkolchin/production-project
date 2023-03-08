import { Age } from '@/entities/Age';
import { Country, CountrySelect } from '@/entities/Country';
import { Currency, CurrencySelect } from '@/entities/Currency';
import { classNames } from '@/shared/lib/classNames';
import { Avatar } from '@/shared/ui/Avatar';
import { Input } from '@/shared/ui/Input';
import { RefreshBtn } from '@/shared/ui/RefreshBtn';
import { Skeleton } from '@/shared/ui/Skeleton';
import { HStack, VStack } from '@/shared/ui/Stack';
import { Text, TextAlign, TextSize, TextTheme } from '@/shared/ui/Text';
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
    return (
      <VStack gap="16" max className="cls.ProfileCard">
        <HStack gap="32" max>
          <Skeleton height={200} width={200} border={'50%'} />
          <VStack gap="8">
            <VStack gap="4" align={'start'}>
              <Text title={t('Username')} size={TextSize.S} />
              <Skeleton height={40} width={217} border={12} />
            </VStack>
            <VStack gap="4" align={'start'}>
              <Text title={t('Profile avatar link')} size={TextSize.S} />
              <Skeleton height={40} width={217} border={12} />
            </VStack>
          </VStack>
        </HStack>

        <VStack gap="16" max align="start">
          <HStack gap="16">
            <VStack gap="4" align={'start'}>
              <Text title={t('First Name')} size={TextSize.S} />
              <Skeleton height={40} width={217} border={12} />
            </VStack>
            <VStack gap="4" align={'start'}>
              <Text title={t('Last Name')} size={TextSize.S} />
              <Skeleton height={40} width={217} border={12} />
            </VStack>
          </HStack>

          <HStack gap="16">
            <VStack gap="4" align={'start'}>
              <Text title={t('Age')} size={TextSize.S} />
              <Skeleton height={40} width={217} border={12} />
            </VStack>
            <VStack gap="4" align={'start'}>
              <Text title={t('City')} size={TextSize.S} />
              <Skeleton height={40} width={217} border={12} />
            </VStack>
          </HStack>

          <HStack gap="32">
            <HStack gap="16" align="center">
              <Text title={t('Country')} size={TextSize.S} />
              <Skeleton height={42} width={130} border={12} />
            </HStack>
            <HStack gap="16" align="center">
              <Text title={t('Currency')} size={TextSize.S} />
              <Skeleton height={42} width={70} border={12} />
            </HStack>
          </HStack>
        </VStack>
      </VStack>
    );
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

  return (
    <VStack gap="16" max className={classNames('', {}, [className])}>
      <HStack gap="32" max>
        {data?.avatar && (
          <Avatar size={200} src={data.avatar} fallbackBigSize />
        )}
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
        <HStack gap="16">
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
        <HStack gap="16">
          <Age readonly={readonly} value={data?.age} onChange={onChangeAge} />
          <Input
            readonly={readonly}
            placeholder={t('City')}
            className={cls.input}
            value={data?.city}
            onChange={onChangeCity}
          />
        </HStack>
        <HStack gap="32" align="stretch" justify="center">
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
