import { FC, useCallback, useState } from 'react';
import styled from 'styled-components';

import localStorageService from 'services/storage';

import { ColumnType } from 'types/columnType';

interface ColumnNameFormProps {
  id: string;
  name: string;
}

const ColumnNameForm: FC<ColumnNameFormProps> = ({ id, name }) => {
  const [columnName, setColumnName] = useState<string>(name);

  const handleChange = useCallback((e) => {
    e.preventDefault();

    setColumnName(e.currentTarget.value);
  }, []);

  const handleSubmit = useCallback(
    (e) => {
      e.preventDefault();

      let previousColumns = localStorageService.getItem('columns');

      const updatedColumns = previousColumns.map((column: ColumnType) => {
        if (column.id === id) {
          column.name = columnName;
        }

        return column;
      });

      localStorageService.setItem('columns', updatedColumns);
    },
    [columnName, id]
  );

  return (
    <form onSubmit={handleSubmit}>
      <StyledInput type="text" value={columnName} onChange={handleChange} />
    </form>
  );
};

const StyledInput = styled.input`
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
