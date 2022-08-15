import { createSlice, PayloadAction } from '@reduxjs/toolkit'


type Iitems={
    id:string,
    size:string,
    type:string,
    count:number,
    imageUrl:string,
    name:string,
    price:number
}

interface ICartSlice{
    items:Iitems[],
    totalPrice:number,
    count:number
}



const initialState:ICartSlice= {
    items:[],
    totalPrice:0,
    count:0
}

export const cartSlice = createSlice({
    name: 'cart',
    initialState: initialState,
    reducers: {
        addCartItem: (state, action:PayloadAction<Iitems>) => {
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
        removeItem: (state, action:PayloadAction<Iitems>) => {
           const NewPizzaCount=state.items.find((obj)=>(obj.id===action.payload.id && obj.size===action.payload.size && obj.type===action.payload.type))
           NewPizzaCount.count--
           state.totalPrice= state.totalPrice-action.payload.price;
           state.count--;
        },
    },
})
export const {addCartItem,removeAllItem,removeItem} = cartSlice.actions

export default cartSlice.reducer




