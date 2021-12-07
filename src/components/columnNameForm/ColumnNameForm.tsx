import { FC, useCallback, useState } from 'react';
import localStorageService from '../../services/storage';
import { Column } from '../../types/column';

interface ColumnNameFormProps {
  id: number,
  name: string,
}

const ColumnNameForm:FC<ColumnNameFormProps> = ({ id, name }) => {
  const [columnName, setColumnName] = useState<string>(name);

  const handleChange = useCallback((event) => {
    setColumnName(event.currentTarget.value)
  }, [])

  const handleSubmit = useCallback(() => {
    let columns = localStorageService.getItem('columns');
    let columnIndex = columns.findIndex((c: Column) => c.id === id)

    columns[columnIndex] = columnName;

    localStorageService.setItem('columns', columns);
  }, []);

  return(
    <form onSubmit={handleSubmit}>
      <input type="text" value={columnName} onChange={handleChange}/>
    </form>
  );
};

export default ColumnNameForm;
