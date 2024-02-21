import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
    name: 'cart',
    initialState: [
        'first'
    ],
    reducers : {
        addToCart: (state, action) => {
            state.push(action.payload)
        }
    }
})

export const {addToCart} = cartSlice.actions;

export default cartSlice.reducer;