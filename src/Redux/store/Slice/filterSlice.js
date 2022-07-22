    import { createSlice } from '@reduxjs/toolkit'

    const initialState = {
        categotyNumber: 0,
        pageCounter:1,
        sortActive: { sort: 'rating', name: 'популярности' }
    }

    export const filterSlice = createSlice({
        name: 'filter',
        initialState: initialState,
        reducers: {
            setCategoty: (state, action) => {
                state.categotyNumber = action.payload;
            },
            setSort: (state, action) => {
                state.sortActive = action.payload;
            },
            setPageCounter: (state, action) => {
                state.pageCounter = action.payload;
            },
            setParams: (state, action) => {
                console.log(action);
                state.pageCounter = action.payload.pageCounter;
                state.categotyNumber = action.payload.categotyNumber;
                state.sortActive= action.payload.sort

            }
            
        },
    })
    export const { setCategoty, setSort,setPageCounter,setParams} = filterSlice.actions

    export default filterSlice.reducer




