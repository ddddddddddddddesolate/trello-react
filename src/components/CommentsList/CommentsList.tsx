import { useSelector } from 'react-redux';

import { RootStateType } from 'app/store';

import styles from './CommentsList.module.scss';
import AddCommentForm from 'components/AddCommentForm';
import Comment from 'components/CommentForm';

interface Props {
  cardId: string;
}

const commentsSelector =
  (cardId: string) =>
  ({ commentsReducer: { comments } }: RootStateType) =>
    comments.filter((comment) => comment.cardId === cardId);

const CommentsList = ({ cardId }: Props) => {
  const comments = useSelector(commentsSelector(cardId));

  return (
    <div className={styles.container}>
      <div className={styles.title}>Comments</div>

      {comments.length > 0 ? (
        <div className={styles.comments}>
          {comments.map((comment) => (
            <Comment {...comment} />
          ))}
        </div>
      ) : (
        <div className={styles.empty}>No comments</div>
      )}

      <AddCommentForm cardId={cardId} />
    </div>
  );
};

export default CommentsList;
