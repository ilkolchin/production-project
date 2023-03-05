import { memo } from 'react';
import BigViewIcon from '@/shared/assets/icons/big_articles.svg';
import SmallViewIcon from '@/shared/assets/icons/small_articles.svg';
import { classNames } from '@/shared/lib/classNames';
import { Button, ButtonTheme } from '@/shared/ui/Button';
import { Icon, IconSize } from '@/shared/ui/Icon';
import cls from './ArticleViewSelector.module.scss';
import { ArticleView } from '@/entities/Article';

interface ArticleViewSelectorProps {
  className?: string;
  view: ArticleView;
  onViewClick?: (view: ArticleView) => void;
}

const viewTypes = [
  {
    view: ArticleView.BIG,
    icon: BigViewIcon,
    testID: 'ArticleView.BIG'
  },
  {
    view: ArticleView.SMALL,
    icon: SmallViewIcon,
    testID: 'ArticleView.SMALL'
  }
];

export const ArticleViewSelector = memo((props: ArticleViewSelectorProps) => {
  const { className, view, onViewClick } = props;

  const onClick = (newView: ArticleView) => () => {
    onViewClick?.(newView);
  };

  return (
    <div
      data-testid="ArticleViewSelector"
      className={classNames(cls.ArticleViewSelector, {}, [className])}
    >
      {viewTypes.map((viewType) => (
        <Button
          key={viewType.view}
          theme={ButtonTheme.CLEAR}
          onClick={onClick(viewType.view)}
          data-testid={viewType.testID}
        >
          <Icon
            Svg={viewType.icon}
            size={IconSize.L}
            className={classNames('', {
              [cls.Selected]: viewType.view === view
            })}
          />
        </Button>
      ))}
    </div>
  );
});
