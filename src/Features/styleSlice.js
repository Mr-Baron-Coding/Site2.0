import { createSlice } from "@reduxjs/toolkit";

export const styleSlice = createSlice({
    name: 'styles',
    initialState: {
        isDark: false,
        isEnglish: true,
    },
    reducers: {
        changeTheme: (state) => {
            state.isDark = !state.isDark;
        },
        changeLang: (state, action) => {
            state.isEnglish = !state.isEnglish;
        }
    },
});

export const { changeTheme, changeLang } = styleSlice.actions;

export default styleSlice.reducer;