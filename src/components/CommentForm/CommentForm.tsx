import styles from './CommentForm.module.scss';
import { CommentType } from 'app/types';
import { RootStateType } from 'app/store';
import { useDispatch, useSelector } from 'react-redux';
import { useCallback, useMemo, useState } from 'react';
import Button from 'components/UI/Button';
import { Controller, useForm } from 'react-hook-form';
import TextArea from 'components/UI/TextArea';
import { deleteComment, updateComment } from 'app/slices/comments';

interface FormValues {
  text: string;
}

interface Props extends CommentType {}

const userSelector =
  (userId: string) =>
  ({ usersReducer: { users } }: RootStateType) =>
    users.find(({ id }) => id === userId);

const currentUserSelector = ({
  currentUserReducer: { currentUser },
}: RootStateType) => currentUser;

const CommentForm = ({ id, cardId, authorId, text }: Props) => {
  const dispatch = useDispatch();

  const [editable, setEditable] = useState<boolean>(false);

  const { control, handleSubmit } = useForm({
    defaultValues: { text },
  });

  const currentUser = useSelector(currentUserSelector);
  const author = useSelector(userSelector(authorId));

  const canEdit = useMemo(
    () => currentUser?.id === authorId,
    [currentUser, authorId]
  );

  const handleEditComment = useCallback(() => {
    setEditable(true);
  }, []);

  const handleUpdateComment = useCallback(
    ({ text: updatedText }: FormValues) => {
      dispatch(updateComment({ id, authorId, cardId, text: updatedText }));

      setEditable(false);
    },
    [dispatch, id, authorId, cardId]
  );

  const handleDeleteComment = useCallback(() => {
    dispatch(deleteComment(id));

    setEditable(false);
  }, [dispatch, id]);

  return (
    <div className={styles.container}>
      {author && <small className={styles.author}>{author.name}</small>}

      {editable ? (
        <form
          className={styles.form}
          onSubmit={handleSubmit(handleUpdateComment)}
        >
          <Controller
            name="text"
            control={control}
            render={({ field: { value, onChange } }) => (
              <TextArea id="text" value={value} onChange={onChange} />
            )}
          />

          <div className={styles.actions}>
            <Button value="Save" type="submit" />
            <Button
              value="Delete comment"
              type="button"
              onClick={handleDeleteComment}
            />
          </div>
        </form>
      ) : (
        <div className={styles.content}>
          <div className={styles.text}>{text}</div>

          {canEdit && (
            <Button value="Edit" type="button" onClick={handleEditComment} />
          )}
        </div>
      )}
    </div>
  );
};

export default CommentForm;
