import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../store';
import { IData, ICard, defaultValues, IPagination } from '../global/interfaces';

const initialState = {
  items: [],
  isLoading: false,
  cardInfo: defaultValues,
  pagination: {
    current: 0,
    next: 0,
    last: 0,
    records: 0,
  },
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
    setCardInfo(
      state: {
        cardInfo: ICard;
      },
      { payload }: PayloadAction<ICard>
    ) {
      state.cardInfo = payload;
    },
    addItem(
      state: {
        items: Array<IData>;
      },
      { payload }: PayloadAction<IData>
    ) {
      state.items = [...state.items, payload];
    },
  },
});

export const { setItems, setCardInfo, addItem } = itemSlice.actions;
export default itemSlice.reducer;
