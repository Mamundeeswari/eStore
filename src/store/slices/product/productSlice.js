import { createSlice } from "@reduxjs/toolkit";
const products=[
    {
        id:1,
        pName:'Jacket',
        price:'£70',
        image:require('./coat.jpg'),
        rating:4
    },
    {
        id:2,
        pName:'Jacket',
        price:'£70',
        image:require('./coat.jpg'),
        rating:4
    },
    {
        id:3,
        pName:'Jacket',
        price:'£70',
        image:require('./coat.jpg'),
        rating:3
    },
    {
        id:3,
        pName:'Jacket',
        price:'£70',
        image:require('./coat.jpg'),
        rating:3
    },
    {
        id:3,
        pName:'Jacket',
        price:'£70',
        image:require('./coat.jpg'),
        rating:3
    },
    {
        id:3,
        pName:'Jacket',
        price:'£70',
        image:require('./coat.jpg'),
        rating:3
    },
    {
        id:3,
        pName:'Jacket',
        price:'£70',
        image:require('./coat.jpg'),
        rating:3
    },
]
export const productSlice = createSlice({
    name:"Product",
    initialState:products,
    reducers:{
        // addProduct:(state,action)=>{
    }
});