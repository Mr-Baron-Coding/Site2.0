import { createSlice } from "@reduxjs/toolkit";

export const styleSlice = createSlice({
    name: 'styles',
    initialState: {
        isDark: false
    },
    reducers: {
        changeTheme: (state) => {
            state.isDark = !state.isDark;
        }
    },
});

export const { changeTheme } = styleSlice.actions;

export default styleSlice.reducer;