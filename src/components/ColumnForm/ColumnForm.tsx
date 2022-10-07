import { useCallback } from 'react';
import { Controller, useForm } from 'react-hook-form';

import { ColumnType } from 'app/types';

import TextInput from 'components/UI/TextInput';
import { useDispatch } from 'react-redux';
import { updateColumn } from 'app/slices/columns';

interface FormValues {
  name: string;
}

interface Props extends ColumnType {}

const ColumnForm = ({ id, name }: Props) => {
  const dispatch = useDispatch();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({ defaultValues: { name } });

  const onSubmit = useCallback(
    ({ name: newName }: FormValues) => {
      dispatch(updateColumn({ id, name: newName }));
    },
    [dispatch, id]
  );

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Controller
          name="name"
          control={control}
          render={({ field: { value, onChange } }) => (
            <TextInput id="name" value={value} onChange={onChange} />
          )}
        />
        {errors.name && <p>Required</p>} {/* TODO: implement error handling */}
      </form>
    </>
  );
};

export default ColumnForm;
