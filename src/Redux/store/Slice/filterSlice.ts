import { createSlice, PayloadAction } from '@reduxjs/toolkit'





export type sortActiveType={
    sort: "rating"|"price"|"name",
    name: "популярности"|"цене"|"алфавиту" 
 
 }
interface IfilterSlice{
    searchValue:string,
    categoryNumber: number,
    pageCounter:number,
    sortActive: sortActiveType
}



const initialState:IfilterSlice = {
    searchValue:"",
    categoryNumber: 0,
    pageCounter:1,
    sortActive: { sort: 'rating', name: 'популярности' }
}

export const filterSlice = createSlice({
    name: 'filter',
    initialState: initialState,
    reducers: {
        setCategory: (state, action:PayloadAction<number>) => {

            state.categoryNumber = action.payload;
        },
        setSort: (state, action:PayloadAction<sortActiveType>) => {
            state.sortActive = action.payload;
        },
        setPageCounter: (state, action:PayloadAction<number>) => {
            state.pageCounter = action.payload;
        },
        setParams: (state, action:PayloadAction<IfilterSlice>) =>{
            state.pageCounter = action.payload.pageCounter;
            state.categoryNumber = action.payload.categoryNumber;
            state.sortActive= action.payload.sortActive
        },
        setSearch: (state, action:PayloadAction<string>) => {
            state.searchValue = action.payload;
        },
        
    },
})
export const { setSearch, setCategory, setSort,setPageCounter,setParams} = filterSlice.actions

export default filterSlice.reducer




