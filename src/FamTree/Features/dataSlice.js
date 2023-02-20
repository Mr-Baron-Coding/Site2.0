import { createSlice } from "@reduxjs/toolkit";

export const dataSlice = createSlice({
    name: 'famData',
    initialState: {
        inputFormOpen: true,
        userData: [],
        userDataLevelTwo: []
    },
    reducers: {
        closeForm: (state, action) => {
            state.inputFormOpen = !state.inputFormOpen;
        },
        addData: (state, action) => {
            if (action.payload.level === 'level_two') {
                state.userDataLevelTwo = [...state.userDataLevelTwo, action.payload];
            } 
            else {
                state.userData = [...state.userData, action.payload];
            }
        }
        
    },
});

export const { closeForm, addData } = dataSlice.actions;

export default dataSlice.reducer;