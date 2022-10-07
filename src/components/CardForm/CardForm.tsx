import { Controller, useForm } from 'react-hook-form';
import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { CardType } from 'app/types';

import TextInput from 'components/UI/TextInput';

import styles from './CardForm.module.scss';
import TextArea from 'components/UI/TextArea';
import { deleteCard, updateCard } from 'app/slices/cards';
import Button from 'components/UI/Button';
import { RootStateType } from 'app/store';

interface FormValues {
  name: string;
  description?: string;
}

interface Props extends CardType {}

const currentUserSelector = ({
  currentUserReducer: { currentUser },
}: RootStateType) => currentUser;

const userSelector =
  (userId: string) =>
  ({ usersReducer: { users } }: RootStateType) =>
    users.find(({ id }) => id === userId);

const columnSelector =
  (columnId: string) =>
  ({ columnsReducer: { columns } }: RootStateType) =>
    columns.find(({ id }) => id === columnId);

const CardForm = ({ id, userId, columnId, name, description }: Props) => {
  const dispatch = useDispatch();

  const currentUser = useSelector(currentUserSelector);

  const user = useSelector(userSelector(userId));
  const column = useSelector(columnSelector(columnId));

  const { control, handleSubmit, reset } = useForm({
    defaultValues: { name, description },
  });

  const handleFormSubmit = useCallback(
    ({ name: updatedName, description: updatedDescription }: FormValues) => {
      if (currentUser) {
        dispatch(
          updateCard({
            id,
            columnId,
            userId: currentUser.id,
            name: updatedName,
            description: updatedDescription,
          })
        );
      }
    },
    [currentUser, dispatch, id, columnId]
  );

  const handleClearDescription = useCallback(() => {
    reset({ description: '' });
  }, [reset]);

  const handleDeleteCard = useCallback(() => {
    dispatch(deleteCard(id));
  }, [dispatch, id]);

  return (
    <div className={styles.container}>
      <form className={styles.form} onSubmit={handleSubmit(handleFormSubmit)}>
        <div className={styles.fields}>
          <Controller
            name="name"
            control={control}
            render={({ field: { value, onChange } }) => (
              <TextInput
                id="name"
                label="Name"
                value={value}
                onChange={onChange}
              />
            )}
          />

          {user && (
            <TextInput id="author" label="Author" value={user.name} readOnly />
          )}

          {column && (
            <TextInput
              id="column"
              label="Column"
              value={column.name}
              readOnly
            />
          )}

          <Controller
            name="description"
            control={control}
            render={({ field: { value, onChange } }) => (
              <TextArea
                id="description"
                label="Description"
                value={value}
                onChange={onChange}
                onClear={handleClearDescription}
              />
            )}
          />
        </div>

        <div className={styles.actions}>
          <Button value="Submit" type="submit" />
          <Button
            value="Delete Card"
            type="button"
            onClick={handleDeleteCard}
          />
        </div>
      </form>
    </div>
  );
};

export default CardForm;
