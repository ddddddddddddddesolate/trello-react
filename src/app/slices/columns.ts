import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { ColumnType } from 'app/types';
import { initColumns } from 'app/mock';

interface ColumnsState {
  columns: ColumnType[];
}

const initialState: ColumnsState = {
  columns: initColumns,
};

const columnsSlice = createSlice({
  name: 'columns',
  initialState,
  reducers: {
    updateColumn(state, { payload: updatedColumn }: PayloadAction<ColumnType>) {
      state.columns = state.columns.map((column) => {
        if (column.id === updatedColumn.id) {
          return updatedColumn;
        }

        return column;
      });
    },
  },
});

export const columnsReducer = columnsSlice.reducer;
export const { updateColumn } = columnsSlice.actions;
