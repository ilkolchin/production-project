import { InputHTMLAttributes, memo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames';
import { Input } from 'shared/ui/Input';
import { VStack } from 'shared/ui/Stack';
import { Text, TextTheme } from 'shared/ui/Text';

type HTMLInputProps = Omit<
  InputHTMLAttributes<HTMLInputElement>,
  'value' | 'onChange' | 'readOnly'
>;

interface AgeProps extends HTMLInputProps {
  className?: string;
  value?: string | number;
  readonly?: boolean;
  onChange?: () => void;
}

enum validKeyboardKeys {
  BACKSPACE = 'Backspace',
  ARROWRIGHT = 'ArrowRight',
  ARROWLEFT = 'ArrowLeft'
}

export const Age = memo((props: AgeProps) => {
  const { className, value, readonly, onChange } = props;
  const { t } = useTranslation();

  const [ageError, setAgeError] = useState(false);

  const onKeyPress = (event: React.KeyboardEvent) => {
    if (!/\d/.test(event.key) && !Object.values(validKeyboardKeys).some((v) => v === event.key)) {
      event.preventDefault();
      setAgeError(true);
    } else {
      setAgeError(false);
    }
  };

  return (
    <VStack align="start" className={classNames('', {}, [className])}>
      <span>{t('Age')}</span>
      <Input onChange={onChange} value={value} readonly={readonly} onKeyDown={onKeyPress} />
      {ageError && <Text theme={TextTheme.ERROR} text={t('Только цифры')} />}
    </VStack>
  );
});
