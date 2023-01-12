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
    <menu
      data-testid="sidebar"
      className={classNames(cls.Sidebar, { [cls.collapsed]: collapsed }, [
        className
      ])}
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

        {/* {sidebarItemsList.map((item) => (
          <SidebarItem item={item} key={item.path} collapsed={collapsed} />
        ))} */}
        {itemsList}
      </div>

      <div className={cls.switchers}>
        <ThemeSwitcher />
        <LangSwitcher short={collapsed} />
      </div>
    </menu>
  );
});
