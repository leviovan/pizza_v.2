import { configureStore } from '@reduxjs/toolkit'

import filterReducer from './Slice/filterSlice';

import cartReducer from './Slice/cartSlice';
import PizzaReducer from './Slice/PizzaSlice';

export const store = configureStore({
    reducer: {
        filter: filterReducer,
        cart:cartReducer,
        pizza:PizzaReducer
    },
})