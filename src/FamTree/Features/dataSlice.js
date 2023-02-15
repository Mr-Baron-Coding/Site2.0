import { createSlice } from "@reduxjs/toolkit";

export const dataSlice = createSlice({
    name: 'famData',
    initialState: {
        inputFormOpen: true,
        userData: [],
    },
    reducers: {
        closeForm: (state, action) => {
            state.inputFormOpen = !state.inputFormOpen;
        },
        addData: (state, action) => {
            state.userData = [...state.userData, action.payload];
        }
        
    },
});

export const { closeForm, addData } = dataSlice.actions;

export default dataSlice.reducer;