import { ArticleSortField } from '../../model/consts/articleConsts';
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
  const { t } = useTranslation();

  const orderOptions = useMemo<SelectOptions<SortOrder>[]>(
    () => [
      {
        value: 'asc',
        content: t('ascending')
      },
      {
        value: 'desc',
        content: t('descending')
      }
    ],
    [t]
  );

  const sortFieldOptions = useMemo<SelectOptions<ArticleSortField>[]>(
    () => [
      {
        value: ArticleSortField.CREATED,
        content: t('date')
      },
      {
        value: ArticleSortField.TITLE,
        content: t('name')
      },
      {
        value: ArticleSortField.VIEWS,
        content: t('views')
      }
    ],
    [t]
  );

  return (
    <div className={classNames(cls.ArticleSortSelector, {}, [className])}>
      <Select
        label={t('Sort by...')}
        options={sortFieldOptions}
        value={sort}
        onChange={onChangeSort}
      />
      <Select label={t('order')} value={order} options={orderOptions} onChange={onChangeOrder} />
    </div>
  );
});
