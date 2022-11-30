import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IPagination } from '../global/interfaces';

const initialState = {
  pagination: {
    current: 0,
    next: 0,
    last: 0,
    records: 0,
  },
};

export const paginationSlice = createSlice({
  name: 'pagination',
  initialState,
  reducers: {
    setRecords(
      state: {
        pagination: IPagination;
      },
      { payload }: PayloadAction<IPagination>
    ) {
      state.pagination = payload;
    },
    nextPage(
      state: {
        pagination: IPagination;
      },
      { payload }: PayloadAction<number>
    ) {
      state.pagination.current = payload;
    },
  },
});

export const { setRecords, nextPage } = paginationSlice.actions;
export default paginationSlice.reducer;
