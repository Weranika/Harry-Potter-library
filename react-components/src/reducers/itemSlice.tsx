import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit';
import { IData, ICard, defaultValues } from '../global/interfaces';
import ApiList from '../Api/Api';

const initialState = {
  items: [] as Array<IData>,
  isLoading: false,
  cardInfo: defaultValues,
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
  extraReducers: (builder) => {
    builder
      .addCase(fetchCharacter.fulfilled, (state, action) => {
        state.items = action.payload;
        state.isLoading = true;
      })
      .addCase(fetchCharacter.rejected, (state, action) => {
        alert(action.payload);
        state.items = [];
        state.isLoading = true;
      })
      .addCase(fetchList.fulfilled, (state, action) => {
        state.items = action.payload;
        state.isLoading = true;
      })
      .addCase(fetchList.rejected, (state, action) => {
        alert(action.payload);
        state.items = [];
        state.isLoading = true;
      });
  },
});

export const { setItems, setCardInfo, addItem } = itemSlice.actions;
export default itemSlice.reducer;

export const fetchCharacter = createAsyncThunk('item/setItems', async (name: string) => {
  return await ApiList.getCharacter(name);
});

export const fetchList = createAsyncThunk('item/setList', async () => {
  return await ApiList.getList();
});
