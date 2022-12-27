import { screen } from '@testing-library/react';
import { componentRender } from 'shared/config/tests/componentRender';
import { ArticleBlockType, ArticleType } from '../../model/types/article';
import { ArticleDetails } from './ArticleDetails';

const article = {
  id: '1',
  title: 'string',
  subtitle: 'string',
  img: 'string',
  views: 1,
  createdAt: 'string',
  type: [ArticleType.IT],
  blocks: [
    {
      id: '1',
      type: ArticleBlockType.TEXT,
      title: 'Заголовок этого блока',
      paragraphs: []
    },
    {
      id: '4',
      type: ArticleBlockType.CODE,
      code: ''
    }
  ]
};

describe('ArticleDetails.test', () => {
  test('should render', () => {
    componentRender(<ArticleDetails id={article.id} />);
    expect(screen.getByTestId('ArticleDetailsComponent')).toBeInTheDocument();
  });
});
