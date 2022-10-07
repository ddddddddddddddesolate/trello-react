import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Controller, useForm } from 'react-hook-form';
import { v4 as uuid } from 'uuid';
import { createCard } from 'app/slices/cards';

import TextInput from 'components/UI/TextInput';

import { RootStateType } from 'app/store';

interface FormValues {
  name: string;
}

interface Props {
  columnId: string;
}

const currentUserSelector = ({
  currentUserReducer: { currentUser },
}: RootStateType) => currentUser;

const AddCardForm = ({ columnId }: Props) => {
  const dispatch = useDispatch();

  const currentUser = useSelector(currentUserSelector);

  const { control, handleSubmit, reset } = useForm({
    defaultValues: { name: '' },
  });

  const handleFormSubmit = useCallback(
    ({ name }: FormValues) => {
      if (currentUser) {
        dispatch(
          createCard({ id: uuid(), userId: currentUser.id, columnId, name })
        );

        reset({ name: '' });
      }
    },
    [currentUser, dispatch, reset, columnId]
  );

  return (
    <>
      <form onSubmit={handleSubmit(handleFormSubmit)}>
        <Controller
          name="name"
          control={control}
          render={({ field: { value, onChange } }) => (
            <TextInput
              id="name"
              placeholder="Add a card"
              value={value}
              onChange={onChange}
            />
          )}
        />
      </form>
    </>
  );
};

export default AddCardForm;
