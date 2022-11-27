import { configureStore } from '@reduxjs/toolkit';
import itemsReducer from './reducers/itemSlise';

const store = configureStore({
  reducer: {
    items: itemsReducer,
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
