import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState = {
  inputSearch:
    localStorage.getItem('inputValue') === 'null' ||
    localStorage.getItem('inputValue') === null
      ? ''
      : localStorage.getItem('inputValue'),
  isLoading: false,
};

export const inputSlice = createSlice({
  name: 'input',
  initialState,
  reducers: {
    inputSearch(
      state: {
        inputSearch: string | null;
        isLoading: boolean;
      },
      { payload }: PayloadAction<string>
    ) {
      state.inputSearch = payload;
      state.isLoading = true;
    },
  },
});

export const { inputSearch } = inputSlice.actions;
export default inputSlice.reducer;
