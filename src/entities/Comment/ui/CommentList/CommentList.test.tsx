import { CommentList } from './CommentList';
import { componentRender } from '@/shared/config/tests/componentRender';
import { Comment } from '../../model/types/comment';
import { screen } from '@testing-library/react';

const comment: Comment[] = [
  {
    id: '1',
    text: '',
    user: {
      id: '1',
      username: ''
    }
  }
];

describe('CommentList.test', () => {
  test('should render', () => {
    componentRender(<CommentList comments={comment} />);
    expect(screen.getByTestId('CommentListItem')).toBeInTheDocument();
  });

  test('should render while loading', () => {
    componentRender(<CommentList isLoading={true} />);
    expect(screen.getByTestId('CommentListLoading')).toBeInTheDocument();
  });
});
