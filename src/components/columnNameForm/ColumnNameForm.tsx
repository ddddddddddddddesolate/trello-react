import { FC, useCallback, useState } from 'react';
import localStorageService from '../../services/storage';
import { Column } from '../../types/column';

interface ColumnNameFormProps {
  id: number,
  name: string,
}

const ColumnNameForm:FC<ColumnNameFormProps> = ({ id, name }) => {
  const [columnName, setColumnName] = useState<string>(name);

  const handleChange = useCallback((e) => {
    e.preventDefault();

    setColumnName(e.currentTarget.value);
  }, []);

  const handleSubmit = useCallback((e) => {
    e.preventDefault();

    let previousColumns = localStorageService.getItem('columns');

    const updatedColumns = previousColumns.map((column: Column) => {
      if (column.id === id) {
        column.name = columnName;
      }

      return column;
    });

    localStorageService.setItem('columns', updatedColumns);
  }, [columnName]);

  return(
    <form onSubmit={handleSubmit}>
      <input type="text" value={columnName} onChange={handleChange}/>
    </form>
  );
};

export default ColumnNameForm;


