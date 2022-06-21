import { useCallback, useEffect, useMemo, useState } from 'react';

import { initColumns } from 'components/Board/mock';
import { ColumnType } from 'types/columnType';
import { LocalStorageService } from 'services/storage/LocalStorageService';

import Column from 'components/Column';

import styles from './Board.module.scss';

const Board = () => {
  const columnsStorage = useMemo<LocalStorageService<ColumnType>>(
    () => new LocalStorageService<ColumnType>(),
    []
  );

  const [columns, setColumns] = useState<ColumnType[]>([]);

  const setDefaultColumns = useCallback(() => {
    const existingColumns = columnsStorage.getItems('columns');

    columnsStorage.setItems('columns', existingColumns || initColumns);

    setColumns(existingColumns || initColumns);
  }, [columnsStorage]);

  useEffect(() => setDefaultColumns(), [setDefaultColumns]);

  return (
    <div className={styles.container}>
      {columns.map((column) => (
        <Column key={`column-${column.id}`} {...column} />
      ))}
    </div>
  );
};

export default Board;
