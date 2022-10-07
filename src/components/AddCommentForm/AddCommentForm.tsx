import { useCallback } from 'react';
import { Controller, useForm } from 'react-hook-form';

import styles from './AddCommentForm.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { createComment } from 'app/slices/comments';
import { v4 as uuid } from 'uuid';
import { RootStateType } from 'app/store';
import TextArea from 'components/UI/TextArea';
import Button from 'components/UI/Button';

interface FormValues {
  text: string;
}

interface Props {
  cardId: string;
}

const currentUserSelector = ({
  currentUserReducer: { currentUser },
}: RootStateType) => currentUser;

const AddCommentForm = ({ cardId }: Props) => {
  const dispatch = useDispatch();

  const currentUser = useSelector(currentUserSelector);

  const { control, handleSubmit, reset } = useForm({
    defaultValues: { text: '' },
  });

  const handleFormSubmit = useCallback(
    ({ text }: FormValues) => {
      if (currentUser) {
        dispatch(
          createComment({ id: uuid(), cardId, authorId: currentUser.id, text })
        );

        reset({ text: '' });
      }
    },
    [currentUser, dispatch, cardId, reset]
  );

  return (
    <div className={styles.container}>
      <div className={styles.title}>Leave a comment</div>

      <form className={styles.form} onSubmit={handleSubmit(handleFormSubmit)}>
        <Controller
          name="text"
          control={control}
          render={({ field: { value, onChange } }) => (
            <TextArea id="text" value={value} onChange={onChange} />
          )}
        />

        <Button value="Add" type="submit" />
      </form>
    </div>
  );
};

export default AddCommentForm;
