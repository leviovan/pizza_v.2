import { createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";

import { createSlice } from '@reduxjs/toolkit'
import axios from "axios";
import { RootState } from "../store";
import { sortActiveType } from "./filterSlice";
const baseUrl = "https://62a7698997b6156bff8e050f.mockapi.io/pizzas";



interface IfetchPizza{
    categoryURL:string,
    sort:sortActiveType,
    searchValue:string,
    pageCounter:number,
}


export const fetchPizza = createAsyncThunk(
    'pizza/fetchPizza',
    async ({categoryURL,
        sort,
        searchValue,
        pageCounter}:IfetchPizza) => {
        let {data} = await axios.get(
            `${baseUrl}?${categoryURL}&sortBy=${sort.sort}&order=asc&search=${searchValue}&page=${pageCounter}&limit=4`
          );
        return data as Iitems[]
    }
  )
    
  type Iitems={
    id: string,
    imageUrl: string
    name: string,
    types: string[],
    sizes: string[],
    price: number,
    category: number,
    rating: number,
    count?:number
  }

    interface IpizzaSlice{
        isLoading:boolean
        items:Iitems[]
    }

const initialState:IpizzaSlice = {
    items:[],
    isLoading:false,
}

export const pizzaSlice = createSlice({
    name: 'pizza',
    initialState: initialState,
    reducers: {

    },
    extraReducers:(builder) => {
        builder.addCase(fetchPizza.pending, (state) => {
            state.isLoading=true;
        })
        builder.addCase(fetchPizza.fulfilled, (state, action) => {
            state.items=action.payload;
            state.isLoading=false;
        })
    }
    })
export const pizzaSelector=(state:RootState)=>state.pizza.items
// export const { setItems} = pizzaSlice.actions

export default pizzaSlice.reducer




