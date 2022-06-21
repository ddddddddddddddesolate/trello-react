import { useCallback, useMemo } from 'react';
import { Controller, useForm } from 'react-hook-form';

import { ColumnType } from 'types/columnType';

import { LocalStorageService } from 'services/storage/LocalStorageService';

import styles from './ColumnForm.module.scss';
import TextInput from 'components/UI/TextInput';

interface FormValues {
  name: string;
}

interface Props extends ColumnType {}

const ColumnForm = ({ id, name }: Props) => {
  const columnStorageService = useMemo<LocalStorageService<ColumnType>>(
    () => new LocalStorageService<ColumnType>(),
    []
  );

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({ defaultValues: { name } });

  const onSubmit = useCallback(
    ({ name: newName }: FormValues) => {
      const columns = columnStorageService.getItems('columns');

      const updatedColumns = columns.map((column) => {
        if (column.id === id) {
          column.name = newName;
        }

        return column;
      });

      columnStorageService.setItems('columns', updatedColumns);
    },
    [columnStorageService, id]
  );

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

export default ColumnForm;
