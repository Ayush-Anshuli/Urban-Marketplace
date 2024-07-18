import { createSlice } from "@reduxjs/toolkit";
import { products } from "../Api/Alldatadetails";
import { useState } from "react";



const initialState = {

    cart:[],
    items:products,
    totalQuantity:0,
    totalprice : 0,
}



export const cartSlice = createSlice ({
    

    name:'cart',
    initialState,
    reducers:{
        addToCart: (state,action) => {
            let find = state.cart.findIndex((items) => items.id === action.payload.id);
            

            if(find>=0){
                state.cart[find].quantity+=1;
            }
            else{
            state.cart.push(action.payload)
            }
        },

        remove: (state,action) => {
            state.cart.pop(action.payload)
        },
        clear: (state) => {
            state.cart=[]
        }
    }
})

export const {remove} = cartSlice.actions
export const {clear} = cartSlice.actions

export const {addToCart} = cartSlice.actions
// export const {Remove} = cartSlice.actions
export default cartSlice.reducer;


