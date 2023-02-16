import { LOCAL_STORAGE_THEME_KEY } from '@/shared/const/localStorage';
import { Theme } from '@/shared/const/theme';
import { ThemeContext } from '@/shared/lib/context/ThemeContext';
import { ReactNode, useMemo, useState } from 'react';

const defaultTheme =
  (localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme) || Theme.LIGHT;

interface ThemeProviderProps {
  initialTheme?: Theme;
  children: ReactNode;
}

export const ThemeProvider = (props: ThemeProviderProps) => {
  const { children, initialTheme } = props;

  const [theme, setTheme] = useState<Theme>(initialTheme || defaultTheme);
  document.body.className = theme;

  const defaultProps = useMemo(
    () => ({
      theme: theme,
      setTheme: setTheme
    }),
    [theme]
  );

  return (
    <ThemeContext.Provider value={defaultProps}>
      {children}
    </ThemeContext.Provider>
  );
};
