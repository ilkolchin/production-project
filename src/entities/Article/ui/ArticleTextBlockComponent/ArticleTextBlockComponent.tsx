import { ArticleTextBlock } from 'entities/Article/model/types/article';
import { memo } from 'react';
import { classNames } from 'shared/lib/classNames';
import { Text } from 'shared/ui/Text';
import cls from './ArticleTextBlockComponent.module.scss';

interface ArticleTextBlockComponentProps {
  className?: string;
  block: ArticleTextBlock;
}
export const ArticleTextBlockComponent = memo(
  (props: ArticleTextBlockComponentProps) => {
    const { className, block } = props;

    return (
      <div
        className={classNames(cls.ArticleTextBlockComponent, {}, [className])}
      >
        {block.title && <Text title={block.title} />}
        {block.paragraphs.map((paragraph, index) => (
          <Text key={index} text={paragraph} />
        ))}
      </div>
    );
  }
);
