import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    categotyNumber: 0,
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
        }
    },
})
export const { setCategoty, setSort } = filterSlice.actions

export default filterSlice.reducer




