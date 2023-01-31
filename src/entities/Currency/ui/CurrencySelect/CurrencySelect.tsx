import { useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames';
import { DropdownDirection } from 'shared/types/ui';
import { ListBox } from 'shared/ui/Popups';
import { Currency } from '../../model/types/currency';

interface CurrencySelectProps {
  className?: string;
  value?: Currency;
  onChange?: (value: Currency) => void;
  readonly?: boolean;
  direction?: DropdownDirection;
}

const options = [
  { value: Currency.RUB, content: Currency.RUB },
  { value: Currency.EUR, content: Currency.EUR },
  { value: Currency.USD, content: Currency.USD }
];

export const CurrencySelect = (props: CurrencySelectProps) => {
  const { className, value, onChange, readonly, direction = 'top right' } = props;
  const { t } = useTranslation();

  const onChangeHadler = useCallback(
    (value: string) => {
      onChange?.(value as Currency);
    },
    [onChange]
  );

  return (
    <ListBox
      className={classNames('', {}, [className])}
      onChange={onChangeHadler}
      items={options}
      defaultValue={t('Currency')}
      value={value}
      readonly={readonly}
      label={t('Currency')}
      direction={direction}
    />
  );
};
