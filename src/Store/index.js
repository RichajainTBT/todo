import { configureStore } from "@reduxjs/toolkit";
import TodoSlice from "./Features/TodoSlice";

export const store =configureStore({
    reducer:{
        todo:TodoSlice,
    }
})