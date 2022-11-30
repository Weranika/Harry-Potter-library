import { configureStore } from '@reduxjs/toolkit';
import itemsReducer from './reducers/itemSlice';
import searchReducer from './reducers/searchSlice';

const store = configureStore({
  reducer: {
    items: itemsReducer,
    search: searchReducer,
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
