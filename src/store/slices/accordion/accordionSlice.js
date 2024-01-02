import { createSlice } from '@reduxjs/toolkit';
const initialState = [
{
    category: "Men",
    subCategories: ["Shirts", "Pants", "Shoes", "Accessories"]
},
{
    category: "Women",
    subCategories: ["Shirts", "Pants", "Shoes", "Accessories"]
},
];
export const accordionSlice = createSlice({
    name: "Accordion",
    initialState,
});
