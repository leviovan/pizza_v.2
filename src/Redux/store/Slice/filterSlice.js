    import { createSlice } from '@reduxjs/toolkit'

    const initialState = {
        searchValue:"",
        categoryNumber: 0,
        pageCounter:1,
        sortActive: { sort: 'rating', name: 'популярности' }
    }

    export const filterSlice = createSlice({
        name: 'filter',
        initialState: initialState,
        reducers: {
            setCategory: (state, action) => {
                state.categoryNumber = action.payload;
            },
            setSort: (state, action) => {
                state.sortActive = action.payload;
            },
            setPageCounter: (state, action) => {
                state.pageCounter = action.payload;
            },
            setParams: (state, action) => {
                state.pageCounter = action.payload.pageCounter;
                state.categoryNumber = action.payload.categoryNumber;
                state.sortActive= action.payload.sort
            },
            setSearch: (state, action) => {
                state.searchValue = action.payload;
            },
            
        },
    })
    export const { setSearch, setCategory, setSort,setPageCounter,setParams} = filterSlice.actions

    export default filterSlice.reducer




