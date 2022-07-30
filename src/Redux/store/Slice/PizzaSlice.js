import { createAsyncThunk } from "@reduxjs/toolkit";

import { createSlice } from '@reduxjs/toolkit'
import axios from "axios";
const baseUrl = "https://62a7698997b6156bff8e050f.mockapi.io/pizzas";

export const fetchPizza = createAsyncThunk(
    'pizza/fetchPizza',
    async ({categoryURL,
        sort,
        searchValue,
        pageCounter,}) => {
       
        let {data} = await axios.get(
            `${baseUrl}?${categoryURL}&sortBy=${sort.sort}&order=asc&search=${searchValue}&page=${pageCounter}&limit=4`
          );
        return data
    }
  )




const initialState = {
    items:[],
    isLoading:false,
}

export const pizzaSlice = createSlice({
    name: 'pizza',
    initialState: initialState,
    reducers: {
        setItems: (state, action) => {
            state.items = action.payload;
 
        }
    },
    extraReducers:{
        [fetchPizza.pending]:(state,action)=>{
            state.isLoading=true;
        },
        [fetchPizza.fulfilled]:(state,action)=>{
            state.items=action.payload;
            state.isLoading=false;
        },
       

        }
      },
)
export const { setItems} = pizzaSlice.actions

export default pizzaSlice.reducer




