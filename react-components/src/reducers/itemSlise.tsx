import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../store';
import { IData } from '../global/interfaces';

const initialState = {
  items: [],
  isLoading: false,
};

export const itemSlice = createSlice({
  name: 'item',
  initialState,
  reducers: {
    setItems(
      state: {
        items: Array<IData>;
        isLoading: boolean;
      },
      { payload }: PayloadAction<Array<IData>>
    ) {
      state.items = payload;
      state.isLoading = false;
    },
  },
});

export const { setItems } = itemSlice.actions;
export default itemSlice.reducer;
