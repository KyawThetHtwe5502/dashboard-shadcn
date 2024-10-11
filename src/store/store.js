import { configureStore } from "@reduxjs/toolkit";
import { ApiService } from "./service/ApiService";
import themeSlice from "./slice/themeSlice"

 export const store = configureStore({
    reducer : {
        [ApiService.reducerPath]: ApiService.reducer,
        theme : themeSlice
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(ApiService.middleware) 
 })