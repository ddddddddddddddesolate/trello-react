import { useCallback } from 'react';
import { Controller, useForm } from 'react-hook-form';

import styles from './AddCardForm.module.scss';
import TextInput from 'components/UI/TextInput';

interface FormValues {
  name: string;
}

interface Props {
  columnId: string;
}

// TODO: implement card form
const AddCardForm = ({ columnId }: Props) => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({ defaultValues: { name: '' } });

  // TODO: implement creating a card
  const onSubmit = useCallback(({ name }: FormValues) => {}, []);

  return (
    <div className={styles.container}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Controller
          name="name"
          control={control}
          render={({ field: { value, onChange } }) => (
            <TextInput value={value} onChange={onChange} />
          )}
        />
        {errors.name && <p>Required</p>} {/* TODO: implement error handling */}
      </form>
    </div>
  );
};

export default AddCardForm;
