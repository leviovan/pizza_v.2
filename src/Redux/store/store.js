import { configureStore } from '@reduxjs/toolkit'

import filterReducer from './Slice/filterSlice';

import cartReducer from './Slice/cartSlice';

export const store = configureStore({
    reducer: {
        filter: filterReducer,
        cart:cartReducer
    },
})