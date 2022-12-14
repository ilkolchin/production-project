import { ArticleSortField } from 'entities/Article/model/types/article';
import { memo, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames';
import { SortOrder } from 'shared/types';
import { Select, SelectOptions } from 'shared/ui/Select';
import cls from './ArticleSortSelector.module.scss';

interface ArticleSortSelectorProps {
  className?: string;
  order: SortOrder;
  onChangeOrder: (newOrder: SortOrder) => void;
  sort: ArticleSortField;
  onChangeSort: (newSort: ArticleSortField) => void;
}
export const ArticleSortSelector = memo((props: ArticleSortSelectorProps) => {
  const { className, onChangeOrder, onChangeSort, order, sort } = props;
  const { t } = useTranslation('article');

  const orderOptions = useMemo<SelectOptions<SortOrder>[]>(
    () => [
      {
        value: 'asc',
        content: t('возрастанию')
      },
      {
        value: 'desc',
        content: t('убыванию')
      }
    ],
    [t]
  );

  const sortFieldOptions = useMemo<SelectOptions<ArticleSortField>[]>(
    () => [
      {
        value: ArticleSortField.CREATED,
        content: t('дате публикации')
      },
      {
        value: ArticleSortField.TITLE,
        content: t('названию')
      },
      {
        value: ArticleSortField.VIEWS,
        content: t('количеству просмотров')
      }
    ],
    [t]
  );

  return (
    <div className={classNames(cls.ArticleSortSelector, {}, [className])}>
      <Select
        label={t('sortirovat-po')}
        className={cls.select}
        options={sortFieldOptions}
        value={sort}
        onChange={onChangeSort}
      />
      <Select
        label={t('po')}
        className={cls.select}
        value={order}
        options={orderOptions}
        onChange={onChangeOrder}
      />
    </div>
  );
});
