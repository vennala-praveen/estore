import { createSlice } from "@reduxjs/toolkit";


const initialState = [
    {
        pName:"Jacket",
        price:90,
        img:"shop-1.jpg"
    },

    {
        pName:"Purse",
        price:30,
        img:"shop-2.jpg"
    },

    {
        pName:"Dress",
        price:40,
        img:"shop-3.jpg"
    },

    {
        pName:"Denim",
        price:60,
        img:"shop-4.jpg"
    },

    {
        pName:"Boots",
        price:190,
        img:"shop-5.jpg"
    },

    {
        pName:"Bag",
        price:120,
        img:"shop-6.jpg"
    }
]

const productSlice = createSlice({
    name:"Products",
    initialState

})

export default productSlice;