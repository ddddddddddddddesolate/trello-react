import styles from './WelcomeForm.module.scss';
import { useCallback } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { setCurrentUser } from 'app/slices/currentUser';
import { v4 as uuid } from 'uuid';
import TextInput from 'components/UI/TextInput';
import { addUser } from 'app/slices/users';

interface FormValues {
  name: string;
}

const WelcomeForm = () => {
  const dispatch = useDispatch();

  const { control, handleSubmit } = useForm({
    defaultValues: { name: 'Unknown' },
  });

  const handleFormSubmit = useCallback(
    ({ name }: FormValues) => {
      const newUser = { id: uuid(), name };

      dispatch(setCurrentUser(newUser));
      dispatch(addUser(newUser));
    },
    [dispatch]
  );

  return (
    <div className={styles.container}>
      <form className={styles.form} onSubmit={handleSubmit(handleFormSubmit)}>
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
      </form>
    </div>
  );
};

export default WelcomeForm;
