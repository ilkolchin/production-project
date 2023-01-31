import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { Button } from 'shared/ui/Button';
import { ButtonTheme } from 'shared/ui/Button/ui/Button';

interface LangSwitcherProps {
  short?: boolean;
}

export const LangSwitcher = memo(({ short }: LangSwitcherProps) => {
  const { t, i18n } = useTranslation();

  const toggleLanguage = () => {
    i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru');
  };

  return (
    <Button theme={ButtonTheme.CLEAR_INVERTED} onClick={toggleLanguage}>
      {t(short ? 'Short lang' : 'Language')}
    </Button>
  );
});
