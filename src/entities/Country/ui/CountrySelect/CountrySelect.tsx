import { useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames';
import { DropdownDirection } from 'shared/types/ui';
import { ListBox } from 'shared/ui/ListBox';
import { Country } from '../../model/types/country';

interface CountrySelectProps {
  className?: string;
  value?: Country;
  onChange?: (value: Country) => void;
  readonly?: boolean;
  direction?: DropdownDirection;
}

const options = [
  { value: Country.Russia, content: Country.Russia },
  { value: Country.Belarus, content: Country.Belarus },
  { value: Country.Kazakhstan, content: Country.Kazakhstan },
  { value: Country.Ukraine, content: Country.Ukraine }
];

export const CountrySelect = (props: CountrySelectProps) => {
  const { className, value, onChange, readonly, direction = 'top right' } = props;
  const { t } = useTranslation();

  const onChangeHadler = useCallback(
    (value: string) => {
      onChange?.(value as Country);
    },
    [onChange]
  );

  return (
    <ListBox
      onChange={onChangeHadler}
      defaultValue={t('Country')}
      items={options}
      readonly={readonly}
      value={value}
      className={classNames('', {}, [className])}
      direction={direction}
      label={t('Country')}
    />
  );

  // return (
  //   <Select
  //     className={classNames('', {}, [className])}
  //     label={t('Country')}
  //     options={options}
  //     value={value}
  //     onChange={onChangeHadler}
  //     readonly={readonly}
  //   />
  // );
};
