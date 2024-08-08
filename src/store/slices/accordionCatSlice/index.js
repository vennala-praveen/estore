import { createSlice } from "@reduxjs/toolkit";


const initialState= [
    {
        category:"Men",
        items:["Track Pants", "T-shirts", "Jeans", "Shirts"]
    },

    {
        category:"Women",
        items:["Dresses", "Sarees", "Jeans", "Tops&Shirts"]
    },

    {
        category:"Kids",
        items:["FootWear", "Ethnic Wear", "Party Wear", "Toys"]
    }

]


const accordionSlice = createSlice({
    name:"AccordionSlice",
    initialState

})

export default accordionSlice;