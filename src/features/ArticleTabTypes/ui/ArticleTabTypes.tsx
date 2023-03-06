import { memo, useCallback, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames';
import { TabItem, Tabs } from '@/shared/ui/Tabs';
import { ArticleType } from '@/entities/Article';

interface ArticleTabTypesProps {
  className?: string;
  value: ArticleType;
  onChangeType: (type: ArticleType) => void;
}
export const ArticleTabTypes = memo((props: ArticleTabTypesProps) => {
  const { className, value, onChangeType } = props;
  const { t } = useTranslation();

  const typeTabs = useMemo<TabItem[]>(
    () => [
      { content: t('All'), value: ArticleType.ALL },
      { content: t('ECONOMICS'), value: ArticleType.ECONOMICS },
      { content: t('IT'), value: ArticleType.IT },
      { content: t('SCIENCE'), value: ArticleType.SCIENCE },
    ],
    [t],
  );

  const onTabClick = useCallback(
    (tab: TabItem) => {
      onChangeType(tab.value as ArticleType);
    },
    [onChangeType],
  );

  return (
    <Tabs
      testID="ArticleTabTypes"
      tabs={typeTabs}
      value={value}
      onTabClick={onTabClick}
      className={classNames('', {}, [className])}
    />
  );
});
