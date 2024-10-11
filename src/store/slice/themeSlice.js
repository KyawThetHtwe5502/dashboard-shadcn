import { createSlice } from "@reduxjs/toolkit";

const root = window.document.documentElement;

const themeSlice = createSlice({
    name : "theme",
    initialState: {mode : "light"},
    reducers :{
        toggleTheme: (state) => {
            state.mode = state.mode === "light" ? "dark" : "light"
        }
    }
});

export const { toggleTheme  } = themeSlice.actions;
export default themeSlice.reducer;