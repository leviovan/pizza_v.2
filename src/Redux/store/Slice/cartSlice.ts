import { createSlice, PayloadAction } from '@reduxjs/toolkit'


export type IitemsCart={
    id:string,
    size:string,
    type:string,
    imageUrl:string,
    name:string,
    price:number
    count:number,
}

interface ICartSlice{
    items:IitemsCart[],
    totalPrice:number,
    count:number
}

const initialState:ICartSlice= {
    items:[],
    // items:JSON.parse(localStorage.getItem('cart'))||[],
    totalPrice:0,
    count:0
}

export const cartSlice = createSlice({
    name: 'cart',
    initialState: initialState,
    reducers: {
        addCartItem: (state, action:PayloadAction<IitemsCart>) => {
            const NewPizzaCount=state.items.find((obj)=>(obj.id===action.payload.id && obj.size===action.payload.size && obj.type===action.payload.type))
             if(NewPizzaCount){
                NewPizzaCount.count++
             }else{
                state.items.push({...action.payload, count:1})
            }
            state.totalPrice= state.totalPrice+action.payload.price;
            state.count++;
        },
        removeAllItem: (state) => {
            state.items=[]
            state.count=0;
            state.totalPrice=0
        },
        removeItem: (state, action:PayloadAction<IitemsCart>) => {
           const NewPizzaCount=state.items.find((obj)=>(obj.id===action.payload.id && obj.size===action.payload.size && obj.type===action.payload.type))
           NewPizzaCount.count--
           state.totalPrice= state.totalPrice-action.payload.price;
           state.count--;
        },
        removeAllItemFromCart: (state,action:PayloadAction<number>) => { 
            const pricedeleted=(state.items[action.payload].count*state.items[action.payload].price)
            state.totalPrice= state.totalPrice-pricedeleted
            state.count=state.count-state.items[action.payload].count
            state.items.splice(action.payload, 1)
        },  
    },
})
export const {addCartItem,removeAllItem,removeItem,removeAllItemFromCart} = cartSlice.actions

export default cartSlice.reducer




