import { configureStore } from '@reduxjs/toolkit';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import productReducer from './reducers/product-reducer';
import thunkHttpReducer from './reducers/thunk-reducer';

/**
 * Configuring all the store reducers.
 */
export const store = configureStore({
  reducer: {
    productReducer,
    thunkHttpReducer
  },
  devTools: true, // Used to show reducer state info in Redux Devtools
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector<RootState>;
 