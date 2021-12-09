import { FC, useCallback, useState } from 'react';
import localStorageService from '../../services/storage';
import { Column } from '../../types/column';
import styled from 'styled-components';

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
      <ColumnNameInput type="text" value={columnName} onChange={handleChange} />
    </form>
  );
};

const ColumnNameInput = styled.input`
  color: #2d3436;
  font-weight: bold;
  padding: 6px;
  margin-bottom: 6px;
  background: transparent;
  border: none;
  outline: none;
  width: 100%;
  font-size: 18px;
`;

export default ColumnNameForm;


