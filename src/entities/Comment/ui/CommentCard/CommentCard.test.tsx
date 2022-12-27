import { CommentCard } from './CommentCard';
import { componentRender } from 'shared/config/tests/componentRender';
import { Comment } from '../../model/types/comment';
import { screen } from '@testing-library/react';

const comment: Comment = {
  id: '1',
  text: '',
  user: {
    id: '1',
    username: ''
  }
};

describe('CommentCard.test', () => {
  test('should render', () => {
    componentRender(<CommentCard comment={comment} />);
    expect(screen.getByTestId('CommentCard')).toBeInTheDocument();
  });

  test('should render while loading', () => {
    componentRender(<CommentCard comment={comment} isLoading={true} />);
    expect(screen.getByTestId('CommentCardLoading')).toBeInTheDocument();
  });
});
