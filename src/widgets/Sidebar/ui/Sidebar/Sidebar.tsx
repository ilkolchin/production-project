import { memo, useMemo, useState } from 'react';
import { useSelector } from 'react-redux';
import { classNames } from 'shared/lib/classNames';
import { Button, ButtonTheme } from 'shared/ui/Button';
import { ButtonSize } from 'shared/ui/Button/ui/Button';
import { LangSwitcher } from 'widgets/LangSwitcher';
import { getSidebarItems } from '../../model/selectors/getSidebarItems';
import { ThemeSwitcher } from 'widgets/ThemeSwitcher';
import { SidebarItem } from '../SidebarItem/SidebarItem';
import cls from './Sidebar.module.scss';
import { VStack } from 'shared/ui/Stack';

interface SidebarProps {
  className?: string;
}

export const Sidebar = memo(({ className }: SidebarProps) => {
  const [collapsed, setCollapsed] = useState(false);

  const sidebarItemsList = useSelector(getSidebarItems);

  const itemsList = useMemo(
    () =>
      sidebarItemsList.map((item) => (
        <SidebarItem item={item} key={item.path} collapsed={collapsed} />
      )),
    [collapsed, sidebarItemsList]
  );

  const toggleCollapsed = () => {
    setCollapsed((prev) => !prev);
  };

  return (
    <section
      data-testid="sidebar"
      className={classNames(cls.Sidebar, { [cls.collapsed]: collapsed }, [className])}
    >
      <div className={cls.items}>
        <Button
          data-testid="sidebar-toggle"
          onClick={toggleCollapsed}
          className={cls.collapsedBtn}
          theme={ButtonTheme.CLEAR}
          size={ButtonSize.Xl}
        >
          {collapsed ? '>' : '<'}
        </Button>
        <VStack role="navigation">{itemsList}</VStack>
      </div>

      <footer className={cls.switchers}>
        <ThemeSwitcher />
        <LangSwitcher short={collapsed} />
      </footer>
    </section>
  );
});
