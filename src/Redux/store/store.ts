import { configureStore } from '@reduxjs/toolkit'

import filterReducer from './Slice/filterSlice';

import cartReducer from './Slice/cartSlice';
import PizzaReducer from './Slice/PizzaSlice';
import { useDispatch } from 'react-redux';

export const store = configureStore({
    reducer: {
        filter: filterReducer,
        cart:cartReducer,
        pizza:PizzaReducer
    },
})
export type RootState = ReturnType<typeof store.getState>

 type AppDispatch = typeof store.dispatch
export const useAppDispatch= () =>useDispatch<AppDispatch>()