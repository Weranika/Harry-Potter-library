import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit';
import { IPagination, IMeta } from '../global/interfaces';
import ApiList from '../Api/Api';

const initialState = {
  pagination: {
    current: 0,
    next: 0,
    last: 0,
    records: 0,
  } as IPagination,
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
  extraReducers: (builder) => {
    builder
      .addCase(fetchRecords.fulfilled, (state, action) => {
        state.pagination = (action.payload as IMeta).pagination as IPagination;
      })
      .addCase(fetchRecords.rejected, (state, action) => {
        alert(action.payload);
        state.pagination = {
          current: 0,
          next: 0,
          last: 0,
          records: 0,
        };
      });
  },
});

export const { setRecords, nextPage } = paginationSlice.actions;
export default paginationSlice.reducer;

export const fetchRecords = createAsyncThunk(
  'pagination/setRecords',
  async () => {
    return await ApiList.getRecords();
  }
);
